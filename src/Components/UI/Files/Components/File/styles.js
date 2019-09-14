import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../../Themes';

export default StyleSheet.create({
  fileContainer: {
    zIndex: 1,
    flexDirection: 'row',
    borderBottomColor: Colors.grey.light,
    borderBottomWidth: 0.25
  },
  title: {
    color: Colors.dark,
    marginTop: 15
  },
  image: {
    width: Metrics.screenWidth / 5,
    height: Metrics.screenWidth / 3.75,
    marginHorizontal: 20,
    marginVertical: 15
  },
  button: {
    position: 'absolute',
    bottom: 0,
    right: 20
  }
});
