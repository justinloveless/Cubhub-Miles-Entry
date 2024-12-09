
import { createElement, createComponent } from './miniFramework';
import { Container } from './components/container.component';
import { Title } from './components/title.component';
import { Button } from "./components/button.component";
import { Dropdown } from "./components/dropdown.component";
import { List } from "./components/list.component";
// List of items (Modified items with name, address, city, zip)
const items = [...require('./addresses.json')]
    .sort((a, b) => a.name.localeCompare(b.name));

// Main component
export const App = createComponent(() => {
    let listItems = [items.find(i => i.name === 'home')];
    console.log('List items:', listItems);
    let isCollapsed = false;
  
    const updateList = () => {
        listContainer.innerHTML = '';
        listContainer.appendChild(List({ 
            items: listItems, 
            onDelete: (item) => {
                listItems = listItems.filter(i => i !== item);
                updateList();
            }
        }));
    };
    
    const waitForButtonToBeEnabled = (buttonId) => {
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
    
    const waitForInputCleared = (elementId) => {
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

    const handleSubmit = async () => {
        // Get all items from the list
        // const listItems = [...listContainer.children];
        // console.log('listItems', listItems);
        if (listItems.length <= 0) return;

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
            const toItem = items.find(i => i.name === listItem.name);
            document.getElementById('toName').value = toItem.name;
            document.getElementById('toAddress').value = toItem.address;
            document.getElementById('toCity').value = toItem.city;
            document.getElementById('toZip').value = toItem.zip;
            document.getElementById('toState').value = 'Tx';
            console.log('to:', toItem);

            // ensure add1 and add2 are not checked
            document.getElementById('add1').checked = false;
            document.getElementById('add2').checked = false;

            // Click Verify button and wait for svc button to be enabled and clicked
            document.getElementById('Verify')?.click();
            console.log('verify clicked');
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
        listItems = [items.find(i => i.name === 'home')];
        updateList();
    };
  
    const container = Container({
        children: [
            Title({ 
                text: 'Auto-Fill Helper', 
                onToggle: () => {
                    isCollapsed = !isCollapsed;
                    Array.from(container.children).slice(1)
                        .forEach(el => el.style.display = isCollapsed ? 'none' : '');
                    updateList();
                },
                isCollapsed
            }),
            createElement('h3', {}, 'Manage List'),
            Dropdown({ 
                items: items, 
                onChange: (e) => {
                    const selectedItem = JSON.parse(e.target.value);
                    if (!listItems.some(i => i.name === selectedItem.name)) {
                        listItems.push(selectedItem);
                        updateList();
                    }
                }
            }),
            Button({ id: 'clear-btn', text: 'Clear List', onClick: () => {
                listItems = [items.find(i => i.name === 'home')];
                updateList();
            }}),
            Button({ id: 'submit-btn', text: 'Submit', onClick: handleSubmit }),
        ]
    });
  
    const listContainer = createElement('div');
    container.appendChild(listContainer);
    updateList();
  
    return container;
  });