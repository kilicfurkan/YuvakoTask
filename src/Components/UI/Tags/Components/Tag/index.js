import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default (props) => (
  <TouchableOpacity style={styles.tagContainer}>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
)