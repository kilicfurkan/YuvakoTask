import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default (props) => (
  <View style={styles.propertyContainer}>
    <Text>{props.detail}</Text>
  </View>
)