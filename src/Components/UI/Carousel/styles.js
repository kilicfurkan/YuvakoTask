import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes'

export default StyleSheet.create({
  carouselContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenWidth / 2
  },
  carouselIconContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.grey.dark,
    position: 'absolute',
    zIndex: 1,
    opacity: 0.8,
    top: ((Metrics.screenWidth / 2) - 70) / 2
  },
  arrowBackContainer: {
    left: -35,
  },
  arrowBack: {
    alignSelf: 'flex-end',
    top: 10,
    right: 15,
    color: Colors.white,
  },
  arrowForwardContainer: {
    right: -35,
  },
  arrowForward: {
    alignSelf: 'flex-start',
    top: 10,
    left: 15,
    color: Colors.white,
  },
  pinIconContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 10,
    left: 10,
    zIndex: 1,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  pin: {

  }
});
