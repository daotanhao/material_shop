import { createSlice } from '@reduxjs/toolkit';
import { lightThemeColor, darkThemeColor } from './ThemeColors';

export default createSlice({
  name: 'theme',
  initialState: lightThemeColor,
  reducers: {
    changeTheme: (state) => {
      if (state.mode === 'light') {
        return darkThemeColor;
      } else {
        return lightThemeColor;
      }
    },
  },
});
