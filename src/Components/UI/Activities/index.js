import React from 'react'
import { View, Text } from 'react-native'
import SystemButton from '../../Common/SystemButton'
import ActivitiesSVG from '../../../../assets/svg/ActivitiesSVG'
import styles from './styles'

export default () => (
  <View style={styles.activitiesContainer}>
    <ActivitiesSVG />
    <Text style={styles.title}>Add Activities</Text>
    <Text style={styles.explanation}>
      Add your clients activities here and Aidy will keep track of all. You will no longer miss a single client task or forget an activity.
    </Text>
    <View>
      <SystemButton buttonStyle={styles.button} title="Add Task" />
      <SystemButton buttonStyle={styles.button} title="Add Showing" />
      <SystemButton buttonStyle={[styles.button, styles.lastButton]} title="Add Offer" />
    </View>
  </View>
)