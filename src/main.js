import addStyles from "./styles";
import cssContent from "./styles.css";
import { App } from "./app";


// Add custom styles for floating UI
addStyles(cssContent);


// Render the app
document.body.appendChild(App());
