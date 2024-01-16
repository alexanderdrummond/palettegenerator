import { ColorPalette } from "./types";
import { toast } from "react-toastify";
const LOCAL_STORAGE_KEY = "savedPalettes";

export const savePaletteToLS = (palette: ColorPalette) => {
  const savedPalettes = getSavedPalettesFromLS();
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify([...savedPalettes, palette])
  );

  toast.success("Palette saved successfully!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const getSavedPalettesFromLS = (): ColorPalette[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const deletePaletteFromLS = (index: number) => {
  const savedPalettes = getSavedPalettesFromLS();
  const newPalettes = savedPalettes.filter((_, i) => i !== index);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newPalettes));

  toast.error("Palette deleted successfully!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
