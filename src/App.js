import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <AnimatePresence>
      <div className="bg-[#FFFDD0]">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </AnimatePresence>
  );
}

export default App;
