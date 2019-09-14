import React from 'react'
import { View, Text } from 'react-native'
import PropertDetailItem from '../PropertDetailItem'
import styles from './styles'

export default () => (
  <View style={styles.propertyDetailContainer}>
    <View style={{ flexDirection: 'row' }}>
      <PropertDetailItem />
      <PropertDetailItem />
    </View>
    <View style={{ flexDirection: 'row' }}>
      <PropertDetailItem />
      <PropertDetailItem />
    </View>
  </View>
)