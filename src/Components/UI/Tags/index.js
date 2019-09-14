import React from 'react'
import { View, Text } from 'react-native'
import Tag from './Components/Tag'
import styles from './styles'
import SystemButton from '../../Common/SystemButton'

export default () => (
  <View style={styles.tagsContainer}>
    <View style={styles.tagsArea}>
      <Tag title="#tag 1" />
      <Tag title="#tag 2" />
      <Tag title="#tag 3" />
      <Tag title="#tag 4" />
      <Tag title="#tag 5" />
    </View>
    <View style={styles.buttonArea}>
      <Text>...</Text>
      <SystemButton title="edit tags" titleStyle={styles.button} />
    </View>
  </View>
)