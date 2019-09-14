import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes'

export default StyleSheet.create({
  badgeContainer: {
    width: 16,
    height: 16,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

  },
  buttonBadge: {
    position: 'absolute',
    top: -4, 
    right: -4
  },
  counter: {
    color: Colors.white
  }
});
