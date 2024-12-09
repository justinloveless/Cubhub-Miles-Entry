// List of items (Modified items with name, address, city, zip)
const items = [
  {
    name: 'home',
    address: '6010 Spring Creek Lane',
    city: 'Spring',
    zip: '77379',
  },
  {
    name: 'milan saez',
    address: '31103 Gulf Cypress Ln',
    city: 'Hockley',
    zip: '77447',
  },
  {
    name: 'London Saez',
    address: '31103 Gulf Cypress Ln',
    city: 'Hockley',
    zip: '77447',
  },
  {
    name: 'Ortega Bros',
    address: '16103 Prairie Lea St Cypress, Tx, United States',
    city: 'Cypress',
    zip: '77429',
  },
  {
    name: 'Samarah ABA',
    address: '16410 Cypress Rose Hill Rd',
    city: 'Cypress',
    zip: '77429',
  },
  {
    name: 'Chelsea Monroy',
    address: '12215 Hurst Ct',
    city: 'Cypress',
    zip: '77429',
  },
  {
    name: 'Zayden Gonzales',
    address: '14903 Calico Heights Ln',
    city: 'Cypress',
    zip: '77429',
  },
  {
    name: 'Ayden Arrington',
    address: '15330 Ella Blvd, Unit 1613',
    city: 'Houston',
    zip: '77090',
  },
  {
    name: 'John Demetro',
    address: '12817 N Palomino Lake Cir',
    city: 'Cypress',
    zip: '77429',
  },
  {
    name: 'Niles Doud',
    address: '12715 Ravensong Dr',
    city: 'Cypress',
    zip: '77429',
  },
  {
    name: 'Anthony Johnson',
    address: '12027 Mariposa Canyon Dr',
    city: 'Tomball',
    zip: '77377',
  },
  {
    name: 'Rebecca Lowery',
    address: '12503 Exbury Ct',
    city: 'TOMBALL',
    zip: '77377-8447',
  },
  {
    name: 'Jose Rivera',
    address: '20330 Savannah Bay Rd Cypress, Tx, United States',
    city: 'Cypress',
    zip: '77433',
  },
  {
    name: 'Jayden Soto',
    address: '10000 N Eldridge Pkwy',
    city: 'Houston',
    zip: '77065',
  },
];

// Add custom styles for floating UI
GM_addStyle(`
    #floating-list-container {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 250px;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        z-index: 9999;
    }

    #floating-list-container h3 {
        margin: 0 0 10px;
    }

    #dropdown {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
    }

    #add-btn, #clear-btn, #submit-btn {
        width: 100%;
        padding: 8px;
        margin-top: 10px;
        cursor: pointer;
        background-color: #28a745;
        border: none;
        color: white;
        border-radius: 5px;
        font-size: 14px;
    }

    #add-btn:hover, #clear-btn:hover, #submit-btn:hover {
        background-color: #218838;
    }

    #list-items {
        list-style: none;
        padding: 0;
        margin: 0;
        max-height: 200px;
        overflow-y: auto;
    }

    #list-items li {
        padding: 8px;
        background-color: #444;
        border: 1px solid #333;
        border-radius: 5px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #list-items li button {
        background-color: red;
        border: none;
        color: white;
        font-size: 12px;
        cursor: pointer;
        padding: 2px 6px;
        border-radius: 5px;
    }

    #list-items li button:hover {
        background-color: #c82333;
    }
`);

// Create the UI container
const container = document.createElement('div');
container.id = 'floating-list-container';
document.body.appendChild(container);

// Add the title
const titleContainer = document.createElement('div');
titleContainer.style.display = 'flex';
titleContainer.style.alignItems = 'center';
titleContainer.style.justifyContent = 'space-between';
titleContainer.style.marginBottom = '10px';

const title = document.createElement('h3');
title.textContent = 'Auto-Fill Helper';
title.style.margin = '0';
title.style.flexGrow = '1';

const toggleButton = document.createElement('button');
toggleButton.id = 'toggle-btn';
toggleButton.textContent = '▼'; // Initial chevron for expanded state
toggleButton.style.cursor = 'pointer';
toggleButton.style.backgroundColor = 'transparent';
toggleButton.style.border = 'none';
toggleButton.style.fontSize = '18px';
toggleButton.style.color = 'white';

titleContainer.appendChild(title);
titleContainer.appendChild(toggleButton);
container.appendChild(titleContainer);

//     // Create the toggle button
//     const toggleButton = document.createElement('button');
//     toggleButton.id = 'toggle-btn';
//     toggleButton.textContent = 'Collapse';
//     toggleButton.style.width = '100%';
//     toggleButton.style.marginBottom = '10px';
//     toggleButton.style.cursor = 'pointer';
//     toggleButton.style.backgroundColor = '#007bff';
//     toggleButton.style.color = 'white';
//     toggleButton.style.border = 'none';
//     toggleButton.style.borderRadius = '5px';
//     toggleButton.style.padding = '8px';
//     toggleButton.style.fontSize = '14px';
//     container.appendChild(toggleButton);

// Header for the list
const header = document.createElement('h3');
header.textContent = 'Manage List';
container.appendChild(header);

// Dropdown to select items
const dropdown = document.createElement('select');
dropdown.id = 'dropdown';
container.appendChild(dropdown);

// Add button
// const addButton = document.createElement('button');
// addButton.id = 'add-btn';
// addButton.textContent = 'Add to List';
// container.appendChild(addButton);

// Clear all button
const clearButton = document.createElement('button');
clearButton.id = 'clear-btn';
clearButton.textContent = 'Clear List';
container.appendChild(clearButton);

// Submit button
const submitButton = document.createElement('button');
submitButton.id = 'submit-btn';
submitButton.textContent = 'Submit';
container.appendChild(submitButton);

// Populate the dropdown
items
  .sort((a, b) => a.name.localeCompare(b.name))
  .forEach(item => {
    const option = document.createElement('option');
    option.value = JSON.stringify(item); // Store the entire object as a JSON string
    option.textContent = item.name; // Display the 'name' property

    // Set 'home' as the initially selected item
    if (item.name === 'home') {
      option.selected = true;
    }

    dropdown.appendChild(option);
  });

// Automatically add selected item to the list when changed
dropdown.addEventListener('change', () => {
  const selectedItemJSON = dropdown.value;
  if (selectedItemJSON) {
    const selectedItem = JSON.parse(selectedItemJSON); // Parse back the object
    addItem(selectedItem); // Add the selected item to the list
  }
});

// List of items
const listContainer = document.createElement('ul');
listContainer.id = 'list-items';
container.appendChild(listContainer);

// Toggle the visibility of the overlay content
let isCollapsed = false;

toggleButton.addEventListener('click', () => {
  const elements = container.querySelectorAll(':scope > *:not(:first-child)'); // Select all except titleContainer
  elements.forEach(el => {
    el.style.display = isCollapsed ? '' : 'none'; // Show or hide elements
  });
  toggleButton.textContent = isCollapsed ? '▼' : '▶'; // Update chevron direction
  isCollapsed = !isCollapsed; // Toggle state
});

// toggleButton.addEventListener('click', () => {
//     const elements = container.querySelectorAll(':scope > *:not(#toggle-btn)');
//     elements.forEach(el => {
//         el.style.display = isCollapsed ? '' : 'none'; // Show or hide elements
//     });
//     toggleButton.textContent = isCollapsed ? '▼' : '▶'; // Update chevron direction
//     isCollapsed = !isCollapsed; // Toggle state
// });

function addItem(selectedItem) {
  if (!isItemInList(selectedItem)) {
    const listItem = document.createElement('li');
    listItem.textContent = selectedItem.name; // Use 'name' to display in the list
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      listItem.remove();
    });
    listItem.appendChild(deleteButton);
    listContainer.appendChild(listItem);

    // Scroll to the newest item
    listItem.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}

// add first item (home) to list
addItem(items.find(i => i.name === 'home'));

// Add selected item to the list
// addButton.addEventListener('click', () => {
//     const selectedItemJSON = dropdown.value;
//     if (selectedItemJSON) {
//         const selectedItem = JSON.parse(selectedItemJSON);  // Parse back the object
//         addItem(selectedItem);
//     }
// });

// Clear the entire list

function clearList() {
  listContainer.innerHTML = '';

  // Reset the dropdown to the 'home' option
  const homeItem = items.find(i => i.name === 'home');
  if (homeItem) {
    dropdown.value = JSON.stringify(homeItem); // Set the dropdown value to 'home'
    addItem(homeItem); // Re-add the 'home' item to the list
  }
}

clearButton.addEventListener('click', () => clearList());

// Check if the item already exists in the list
function isItemInList(item) {
  const itemsInList = [...listContainer.children];
  return itemsInList.some(li => li.textContent.includes(item.name)); // Check based on the name
}

// Function to wait for a button to be enabled and click it
function waitForButtonToBeEnabled(buttonId) {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      const button = document.getElementById(buttonId);
      if (button && !button.disabled) {
        clearInterval(interval); // Stop checking once it's enabled
        button.click();
        // console.log(`${buttonId} clicked`);
        resolve(); // Resolve the Promise
      }
    }, 100); // Check every 100ms
  });
}

// Function to wait for an input field to be cleared
function waitForInputCleared(elementId) {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      const element = document.getElementById(elementId);
      if (element && (element.value === '' || element.value === null)) {
        clearInterval(interval); // Stop checking once it's cleared
        // console.log(`${elementId} cleared`);
        resolve(); // Resolve the Promise
      }
    }, 100); // Check every 100ms
  });
}

// Handle the submit button
submitButton.addEventListener('click', async () => {
  // Get all items from the list
  const listItems = [...listContainer.children];
  // console.log('listItems', listItems);
  if (listItems.length > 0) {
    // Get the first item (from)
    const fromItem = items.find(i => i.name == 'home');

    // Fill 'from' fields
    document.getElementById('fromName').value = fromItem.name;
    document.getElementById('fromAddress').value = fromItem.address;
    document.getElementById('fromCity').value = fromItem.city;
    document.getElementById('fromZip').value = fromItem.zip;
    document.getElementById('fromState').value = 'Tx';
    // console.log('from:', fromItem);

    // For each "to" item
    for (const listItem of listItems.slice(1)) {
      const toItem = items.find(i => i.name === listItem.firstChild.textContent);
      document.getElementById('toName').value = toItem.name;
      document.getElementById('toAddress').value = toItem.address;
      document.getElementById('toCity').value = toItem.city;
      document.getElementById('toZip').value = toItem.zip;
      document.getElementById('toState').value = 'Tx';
      // console.log('to:', toItem);

      // ensure add1 and add2 are not checked
      document.getElementById('add1').checked = false;
      document.getElementById('add2').checked = false;

      // Click Verify button and wait for svc button to be enabled and clicked
      document.getElementById('Verify')?.click();
      // console.log('verify clicked');
      await waitForButtonToBeEnabled('svc');

      // Wait for the address field to be cleared before moving to the next item
      await waitForInputCleared('toAddress');
    }

    // For the final item, click 'sv' instead of 'svc' and set to home
    const homeAddressBtn = document.querySelector(
      '#dirform > div > table.sort-table.table-top20-bottom0 > tbody > tr:nth-child(9) > td > img'
    );
    homeAddressBtn?.click();
    await waitForButtonToBeEnabled('Verify');
    await waitForButtonToBeEnabled('sv');
    // console.log('sv clicked');

    // clear list, keeping home at the beginning
    clearList();
  }
});
