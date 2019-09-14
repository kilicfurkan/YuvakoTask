import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

export default () => (
  <View style={styles.headerContainer}>
    <View style={styles.leftArea}>
      <Ionicons name="ios-arrow-back" size={32} />
    </View>
    <View style={styles.rightArea}>
      <Ionicons name="ios-share" size={32} />
      <Ionicons name="ios-add" size={32} />
      <Ionicons name="ios-more" size={32} />
    </View>
  </View>
)