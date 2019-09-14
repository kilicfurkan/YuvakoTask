import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.counter}> ({props.counter})</Text>
  </View>
)