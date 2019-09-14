import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ClientRequests from './Components/ClientRequests'
import Suggestions from './Components/Suggestions'
import Snoozed from './Components/Snoozed'
import Past from './Components/Past'
import styles from './styles'

export default () => (
  <View style={styles.activitiesContainer}>
    <ScrollView style={styles.scrollViewContainer}>
      <ClientRequests />
      <Suggestions />
      <Snoozed />
      <Past />
    </ScrollView>
  </View>
)