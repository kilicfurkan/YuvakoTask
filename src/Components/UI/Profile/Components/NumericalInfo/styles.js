import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../../../Themes'

export default StyleSheet.create({
  numericalInfoContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 3
  },
  value: {
    color: Colors.dark,
    fontSize: Fonts.size.h5
  },
  title: {
    color: Colors.grey.medium,
    fontSize: Fonts.size.small
  }
});
