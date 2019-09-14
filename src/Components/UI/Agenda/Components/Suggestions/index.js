import React from 'react'
import { View } from 'react-native'
import SectionTitle from '../SectionTitle'
import Section from '../Section'

export default () => (
  <View>
    <SectionTitle title="Suggestions" counter={2} />
    <Section
      user="Can Erenberk"
      detail="There are potential new matches for this property if missing information is complete. Wou...."
      date="Yesterday 12:24 pm"
      badge
    />
    <Section
      user="Can Erenberk"
      detail="Can liked this property! Would you like to propose a showing?”"
      date="Yesterday 12:24 pm"
      clientImage
      client="Furkan Kilic"
      bid="Up to €250.000 | Essex, Kesington or Oxfordshire"
    />
  </View>
)