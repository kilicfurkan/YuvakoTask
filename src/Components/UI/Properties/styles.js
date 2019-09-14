import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes'

export default StyleSheet.create({
  propertiesContainer: {
    width: Metrics.screenWidth,
    justifyContent: 'center',
    borderBottomColor: Colors.grey.light,
    borderBottomWidth: 0.5
  },
  titleArea: {
    flexDirection: 'row',
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.grey.light,
    borderBottomWidth: 0.5
  },
  iconAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
    marginRight: 10
  },
  title: {
    fontWeight: '600',
    fontSize: Fonts.size.regular,
    color: Colors.dark
  },
  price: {
    fontWeight: '600',
    fontSize: Fonts.size.regular,
    color: Colors.dark,
    marginRight: 15
  }
});
