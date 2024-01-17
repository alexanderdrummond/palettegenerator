import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Nav/NavBar";
import { ColorPalette } from "./components/Palette/Palette";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SavedPalettes from "./pages/SavedPalettes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PalettePreview from "./pages/PalettePreview";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ColorPalette />
                <Footer />
                <ToastContainer />
              </>
            }
          />
          <Route path="/saved-palettes" element={<SavedPalettes />} />
          <Route path="/palette-preview" element={<PalettePreview />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
