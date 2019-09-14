import React from 'react'
import { View } from 'react-native'
import SectionTitle from '../SectionTitle'
import Section from '../Section'

export default () => (
  <View>
    <SectionTitle title="Past" counter={2} />
    <Section
      user="Can Erenberk"
      detail="Can liked this property! Would you like to propose a showing?"
      date="12/12/2019"
      clientImage
      client="Furkan Kilic"
      bid="Up to €250.000 | Essex, Kesington or Oxfordshire"
      past
    />
    <Section
      user="Can Erenberk"
      detail="Can requested a showing."
      date="12/12/2019"
      client="Furkan Kilic"
      bid="Up to €250.000 | Essex, Kesington or Oxfordshire"
      past
    />
  </View>
)