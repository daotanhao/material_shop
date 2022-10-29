import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';

const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: Colors.backgroundGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  display: {
    flex: 9,
    backgroundColor: Colors.backgroundGray,
  },
});

const componentStyles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.green,
  },
  cancelText: {
    color: Colors.textGray,
    fontSize: 18,
    fontWeight: '500',
  },
  logOutButton: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: Colors.borderGray,
    borderRadius: 7,
  },
  logOutText: {
    fontSize: 18,
    color: Colors.textGray,
    fontWeight: '500',
  },
});

export { layoutStyles, componentStyles };
