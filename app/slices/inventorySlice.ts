import {
  InventoryType,
  WareHouseInventoryType,
} from '../../types/wareHouseInventory.type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getInventory} from '../../asyncThunks/inventory/getInventory';
import {RootState} from '../store';

type InventoryState = {
  inventories: InventoryType[];
  loading: string;
  error: object;
};

const initialState: InventoryState = {
  inventories: [],
  loading: 'idle',
  error: {},
};
const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getInventory.pending, state => {
        state.loading = 'pending';
      })
      .addCase(
        getInventory.fulfilled,
        (state, action: PayloadAction<WareHouseInventoryType>) => {
          state.loading = 'idle';
          state.inventories = action.payload.inventories;
        },
      );
  },
});
export const selectInventory = (state: RootState): InventoryState =>
  state.inventoryState;
export default inventorySlice.reducer;