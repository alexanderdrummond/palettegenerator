import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Nav/NavBar";
import { ColorPalette } from "./components/Palette/Palette";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <ColorPalette />
        <Footer />
      </div>
    </>
  );
}

export default App;
