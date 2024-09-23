// src/App.jsx
import React from "react";
import "normalize.css"; // Ensure normalize.css is imported
import './App.css';
import { MenuCardPage } from "./pages/MenuCardPages.jsx";  // Import the new page
import { PicturesPage } from "./pages/PicturesPage.jsx";  // Import the new page

function App() {
    return (
        <>
            <MenuCardPage />
            <PicturesPage />
        </>
    );
}

export default App;
