import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Tab from './Components/Tab'
import styles from './styles'

export default (props) => {
  const [tab, setTab] = useState("Agenda")
  
  handleTabChange = (tab) => {
    setTab(tab)
    props.onSelectTab(tab)
  }

  return (
    <View style={styles.tabBarContainer}>
      <Tab
        title="Agenda"
        onPressTab={() => handleTabChange("Agenda")}
        active={tab === "Agenda"}
        badge={9}
      />
      <Tab
        title="Activities"
        onPressTab={() => handleTabChange("Activities")}
        active={tab === "Activities"}
        badge={2}
      />
      <Tab
        title="Files"
        onPressTab={() => handleTabChange("Files")}
        active={tab === "Files"}
      />
    </View>
  )
}