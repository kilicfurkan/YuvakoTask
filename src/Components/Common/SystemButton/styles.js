import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes'

export default StyleSheet.create({
  systemButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    maxHeight: 50
  },
  text: {
    color: Colors.blue,
    fontSize: Fonts.size.regular
  },
  icon: {
    color: Colors.blue,
    marginHorizontal: 5
  }
});
