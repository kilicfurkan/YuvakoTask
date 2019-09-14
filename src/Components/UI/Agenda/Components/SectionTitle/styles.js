import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../../Themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  title: {
    color: Colors.dark,
    fontWeight: '600',
  },
  counter: {
    color: Colors.dark,
    fontWeight: '300',
  }
});
