import { StyleSheet, Pressable, View } from 'react-native';
import React from 'react';
import ThemeSlice from '../assets/theme/ThemeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { lightThemeColor, darkThemeColor } from '../assets/theme/ThemeColors';

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(ThemeSlice.actions.changeTheme());
  };
  return (
    <View
      style={[styles.container, { backgroundColor: theme.BACKGROUND_COLOR }]}
    >
      <Pressable style={styles.button} onPress={handleChangeTheme} />
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  button: {
    height: 50,
    width: 100,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'blue',
  },
});
