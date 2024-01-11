import React, { createContext, useState, useContext } from "react";
import { ColorPalette } from "./types";

const PaletteContext = createContext<{
  activePalette: ColorPalette | null;
  setActivePalette: (palette: ColorPalette) => void;
}>({
  activePalette: null,
  setActivePalette: () => {},
});

export const usePalette = () => useContext(PaletteContext);

export const PaletteProvider: React.FC = ({ children }) => {
  const [activePalette, setActivePalette] = useState<ColorPalette | null>(null);

  return (
    <PaletteContext.Provider value={{ activePalette, setActivePalette }}>
      {children}
    </PaletteContext.Provider>
  );
};
