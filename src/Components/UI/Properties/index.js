import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Property from './Components/Property'
import PropertyDetail from './Components/PropertyDetail'
import SystemButton from '../../Common/SystemButton'
import styles from './styles'

export default () => {
  const [expand, setExpand] = useState(false)

  return (
    <View style={styles.propertiesContainer}>
      <View style={styles.titleArea}>
        <View style={styles.iconAndTitle}>
          <Ionicons name="ios-home" size={24} style={styles.icon} />
          <Text style={styles.title}>
            Property of Jeremy Walsh
          </Text>
        </View>
        <Text style={styles.price}>€165.000</Text>
      </View>
      <Property />
      <Property />
      {!expand ? 
        <SystemButton title="Show More Details" onPressButton={() => setExpand(!expand)} /> :
        null
      }
      {expand ?
        <View>
          <SystemButton title="Edit Property Details" />
          <PropertyDetail />
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
          <SystemButton title="Show Less Details" onPressButton={() => setExpand(!expand)} />
        </View> :
        null
      }
    </View>
  )
}