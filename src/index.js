import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot for React 18
import App from "./App"; // Import your main App component

// Get the root DOM element where you want to render the React application
const rootElement = document.getElementById("root");

// Create a root using createRoot() and render your App component
const root = createRoot(rootElement);

root.render(<App />); // Use createRoot's render method
