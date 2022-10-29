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
    marginTop: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  display: {
    flex: 9,
    backgroundColor: 'white',
  },
  contactSection: {
    backgroundColor: Colors.backgroundGray,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  searchResultSection: {
    flex: 11,
  },
});

const componentStyles = StyleSheet.create({
  cancelText: {
    color: Colors.textGray,
    fontSize: 18,
    fontWeight: '500',
  },
  contactText: {
    color: Colors.textGray,
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 5,
  },
});

export { layoutStyles, componentStyles };
