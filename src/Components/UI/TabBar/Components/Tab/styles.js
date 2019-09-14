import { StyleSheet } from 'react-native'
import { Colors } from '../../../../../Themes';

export default StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  activeTab: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1
  },
  title: {
    marginHorizontal: 5
  },
  activeTitle: {
    color: Colors.dark
  },
  passiveTitle: {
    color: Colors.grey.medium
  }
});
