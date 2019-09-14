import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../../Themes';

export default StyleSheet.create({
  imageTagContainer: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    left: 10
  },
  title: {
    fontSize: Fonts.size.medium,
    color: Colors.white
  }
});
