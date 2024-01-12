import { ColorPalette } from "./types";

const LOCAL_STORAGE_KEY = "savedPalettes";

export const savePaletteToLS = (palette: ColorPalette) => {
  const savedPalettes = getSavedPalettesFromLS();
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify([...savedPalettes, palette])
  );
};

export const getSavedPalettesFromLS = (): ColorPalette[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
