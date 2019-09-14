import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default (props) => (
  <View 
    style={[
      styles.badgeContainer,
      props.type === "button" ? styles.buttonBadge : null,
      props.style
    ]}
  >
    <Text style={styles.counter}>{props.counter}</Text>
  </View>
)