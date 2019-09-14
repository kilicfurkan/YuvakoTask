import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes';

export default StyleSheet.create({
  tagsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
  tagsArea: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 4
  },
  buttonArea: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'flex-end'
  },
  button: {
    fontSize: Fonts.size.medium,
  }
});
