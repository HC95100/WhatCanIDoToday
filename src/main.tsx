import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
// Removed: import "./utils/cspWorkaround";

createRoot(document.getElementById("root")!).render(<App />);