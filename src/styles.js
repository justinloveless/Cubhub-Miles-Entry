// Function to add styles to the DOM
function addStyles(cssContent) {
  if (typeof GM_addStyle !== 'undefined') {
    GM_addStyle(cssContent);
  } else {
    const styleElement = document.createElement('style');
    styleElement.textContent = cssContent;
    document.head.appendChild(styleElement);
  }
}

export default addStyles;

