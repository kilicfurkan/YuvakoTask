import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../../Themes';

export default StyleSheet.create({
  sectionContainer: {
    borderTopColor: Colors.grey.medium,
    borderTopWidth: 0.25,
    flexDirection: 'row'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 20
  },
  detailsContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  userAndDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth / 1.3
  },
  user: {
    fontWeight: '600',
    marginBottom: 10,
    marginRight: 5,
    color: Colors.dark
  },
  detail: {
    color: Colors.grey.dark
  },
  date: {
    color: Colors.grey.medium,
    fontSize: Fonts.size.small,
  },
  detailImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 10
  },
  client: {
    fontSize: Fonts.size.regular,
    color: Colors.dark,
    fontWeight: '400',
    marginBottom: 5
  },
  bid: {
    color: Colors.grey.medium,
    fontSize: Fonts.size.small,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth / 1.9
  },
  pastButtonContainer: {
    width: Metrics.screenWidth / 1.4
  },
  disableButtonContainer: {
    backgroundColor: Colors.grey.medium
  },
  disableOutlineButtonContainer: {
    borderColor: Colors.grey.medium
  },
  disableOutlineButtonTitle: {
    color: Colors.grey.medium
  },

});
