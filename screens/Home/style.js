import { StyleSheet, StatusBar, Platform } from 'react-native';
import Colors from '../../assets/Colors';

const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : StatusBar.currentHeight + 20,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: Colors.yellow,
  },
  display: {
    flex: 9,
    backgroundColor: 'white',
  },
  listMaterial: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: '7%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderGray,
  },
  helpSection: {
    paddingBottom: '7%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderGray,
    marginHorizontal: '3%',
  },
  helpText: { margin: 15 },
  helpOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  policySection: {
    marginHorizontal: '8%',
    marginTop: 10,
    marginBottom: '15%',
  },
});

const componentStyles = StyleSheet.create({
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.green,
  },
  helpButton: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: Colors.borderGray,
    borderRadius: 7,
  },
  needHelpText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  helpOptionsText: {
    fontSize: 18,
    color: Colors.textGray,
    fontWeight: '500',
  },
  policyText: {
    fontSize: 17,
    color: Colors.textGray,
  },
});

export { layoutStyles, componentStyles };
