import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import "./utils/cspWorkaround"; // Import the new script

createRoot(document.getElementById("root")!).render(<App />);