import React from 'react'
import { View } from 'react-native'
import SystemButton from '../../Common/SystemButton'
import styles from './styles'

export default () => (
  <View style={styles.contactContainer}>
    <SystemButton icon="ios-call" iconSize={32} title="Phone" />
    <SystemButton icon="ios-albums" iconSize={32} title="Message" />
    <SystemButton icon="ios-mail" iconSize={32} title="E-Mail" />
  </View>
)