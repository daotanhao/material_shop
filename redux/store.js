import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from '../assets/theme/ThemeSlice';
import CartSlice from '../screens/Order/CartSlice';

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    theme: ThemeSlice.reducer,
  },
});

export default store;
