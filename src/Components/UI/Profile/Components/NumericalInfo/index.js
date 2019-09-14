import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default (props) => (
  <View style={styles.numericalInfoContainer}>
    <Text style={styles.value}>{props.value}</Text>
    <Text style={styles.title}>{props.title}</Text>
  </View>
)