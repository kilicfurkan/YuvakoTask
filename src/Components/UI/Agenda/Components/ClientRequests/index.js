import React from 'react'
import { View } from 'react-native'
import SectionTitle from '../SectionTitle'
import Section from '../Section'

export default () => (
  <View>
    <SectionTitle title="Client Request" counter={1} />
    <Section
      user="Can Erenberk"
      detail="Can requested a showing."
      date="Yesterday 12:24 pm"
      client="Furkan Kilic"
      bid="Up to €250.000 | Essex, Kesington or Oxfordshire"
      badge
    />
  </View>
)