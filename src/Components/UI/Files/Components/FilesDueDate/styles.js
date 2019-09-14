import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../../Themes';

export default StyleSheet.create({
  filesDueDateContainer: {
    zIndex: 1,
    borderBottomColor: Colors.grey.dark,
    borderBottomWidth: 0.5
  },
  title: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    color: Colors.dark,
    marginHorizontal: 20,
    marginTop: 10,
  }
});
