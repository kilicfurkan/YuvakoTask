import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default (props) => (
  <View style={styles.imageTagContainer}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
)