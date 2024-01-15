import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Nav/NavBar";
import { ColorPalette } from "./components/Palette/Palette";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SavedPalettes from "./pages/SavedPalettes";

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
              </>
            }
          />
          <Route path="/saved-palettes" element={<SavedPalettes />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
