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
      <Property detail="{Status} | For {Selling Type} | {Property Type}" />
      <Property detail="Heating: {Heating Option}" />
      {!expand ? 
        <SystemButton title="Show More Details" onPressButton={() => setExpand(!expand)} /> :
        null
      }
      {expand ?
        <View>
          <SystemButton title="Edit Property Details" />
          <PropertyDetail />
          <Property detail="In Sıte: Yes | No" />
          <Property detail="Furnished: Yes | No" />
          <Property detail="Loan Status: Yes | No" />
          <Property detail="Min Carpet Area: {MinCarpetArea}" />
          <Property detail="View Side: {Selection1}, {Selection2}..." />
          <Property detail="Max Maintenance Fee: {XYZ} {Currency}" />
          <Property detail="Swap Status: Yes | No" />
          <Property detail="Indoor Features: [Selected Feature Name]" />
          <Property detail="Outdoor Features: [Selected Feature Name]" />
          <SystemButton title="Show Less Details" onPressButton={() => setExpand(!expand)} />
        </View> :
        null
      }
    </View>
  )
}