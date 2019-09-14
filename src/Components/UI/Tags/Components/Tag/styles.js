import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../../Themes';

export default StyleSheet.create({
  tagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.grey.tag,
    marginRight: 5,
    padding: 5,
    borderRadius: 2
  },
  title: {
    fontSize: Fonts.size.medium
  }
});
