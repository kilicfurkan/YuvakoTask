import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import ImageTag from './Components/ImageTag'

export default () => (
  <View style={styles.carouselContainer}>
    <ImageTag title="Fair Priced" />
    <View style={[styles.carouselIconContainer, styles.arrowBackContainer]}>
      <Ionicons name="ios-arrow-back" style={styles.arrowBack} size={48} />
    </View>
    <Image source={require('../../../../assets/images/house.jpeg')} style={styles.image} />
    <View style={[styles.carouselIconContainer, styles.arrowForwardContainer]}>
      <Ionicons name="ios-arrow-forward" style={styles.arrowForward} size={48} />
    </View>
    <View style={styles.pinIconContainer}>
      <Ionicons name="ios-pin" style={styles.pin} size={30}/>
    </View>
  </View>
)