import "./App.css";
import Navbar from "./components/Nav/NavBar";
import { ColorPalette } from "./components/Palette/Palette";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <ColorPalette />
      </div>
    </>
  );
}

export default App;