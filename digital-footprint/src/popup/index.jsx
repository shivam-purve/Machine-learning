import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup.jsx";
 import "./popup.css";   // ✅ Move CSS import here (IMPORTANT)

createRoot(document.getElementById("root")).render(<Popup />);
