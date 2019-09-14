import React from 'react'
import { View, Image } from 'react-native'
import Button from '../../Common/Button'
import OutlineButton from '../../Common/OutlineButton'
import NumericalInfo from './Components/NumericalInfo'
import styles from './styles'

export default () => (
  <View style={styles.profileContainer}>
    <View style={styles.imageContainer}>
      <Image source={require('../../../../assets/images/pp.png')} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <View style={styles.numericalInfoContainer}>
        <NumericalInfo title="Sent" value="25" />
        <NumericalInfo title="Showing" value="8" />
        <NumericalInfo title="Offer" value="3" />
      </View>
      <View style={styles.buttonsContainer}>
        <OutlineButton title="Add Showing" size="medium" />
        <Button title="Show Matchings" size="medium" badge={9} />
      </View> 
    </View>
  </View>
)