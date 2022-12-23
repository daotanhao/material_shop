import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'cart',
  initialState: [
    // {
    //   id: 1,
    //   productName: 'Fastening & Joining',
    //   productImage: require('../../assets/images/tool.png'),
    // },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.splice(action.payload - 1, 1);
    },
  },
});
