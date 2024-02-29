import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload?.card?.info?.id;

      if (itemIdToRemove) {
        state.items = state.items.filter(
          (item) => item?.card?.info?.id !== itemIdToRemove
        );
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemId
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.card.info.id !== itemId
        );
      }
    },
    increaseItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, decreaseItem, increaseItem } =
  cartSlice.actions;

export default cartSlice.reducer;
