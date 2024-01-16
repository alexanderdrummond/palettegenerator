import SavedContent from "../components/Saved/SavedContent/SavedContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SavedPalettes.scss";

function SavedPalettes() {
  return (
    <div>
      <SavedContent />
      <ToastContainer />
    </div>
  );
}

export default SavedPalettes;
