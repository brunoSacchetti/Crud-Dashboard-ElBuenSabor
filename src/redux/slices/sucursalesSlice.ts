// Importaciones necesarias
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ISucursales from "../../types/Sucursales";

interface SucursalesState {
  sucursales: ISucursales[];
  selectedSucursal: ISucursales | null;
}

const initialState: SucursalesState = {
  sucursales: [],
  selectedSucursal: null,
};

const sucursalesSlice = createSlice({
  name: "sucursales",
  initialState,
  reducers: {
    setSucursales(state, action: PayloadAction<ISucursales[]>) {
      state.sucursales = action.payload;
    },
    selectSucursal(state, action: PayloadAction<ISucursales>) {
      state.selectedSucursal = action.payload;
    },
    clearSelectedSucursal(state) {
      state.selectedSucursal = null;
    },
  },
});

export const { setSucursales, selectSucursal, clearSelectedSucursal } = sucursalesSlice.actions;

export default sucursalesSlice.reducer;
