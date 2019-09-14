import React from 'react'
import { View } from 'react-native'
import SectionTitle from '../SectionTitle'
import Section from '../Section'

export default () => (
  <View>
    <SectionTitle title="Snoozed" counter={1} />
    <Section
      user="Can Erenberk"
      detail="Can liked this property! Would you like to propose a showing?”"
      date="Snoozed: Yesterday 12:24 pm"
    />
  </View>
)