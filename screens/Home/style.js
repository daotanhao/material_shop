import { StyleSheet } from 'react-native';

const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#F7DD69',
    marginTop: 10,
  },
  display: {
    flex: 9,
    backgroundColor: 'white',
  },
  listMaterial: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

const componentStyles = StyleSheet.create({
  appName: {
    fontSize: 30,
  },
});

export { layoutStyles, componentStyles };
