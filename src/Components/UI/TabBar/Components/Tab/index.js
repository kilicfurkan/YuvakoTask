import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Badge from '../../../../Common/Badge'
import styles from './styles'

export default (props) => (
  <TouchableOpacity 
    style={[
      styles.tab, 
      props.active ? styles.activeTab : null
    ]} 
    onPress={props.onPressTab}
  >
    <Text 
      style={[
        styles.title,
        props.active ? styles.activeTitle : styles.passiveTitle
      ]}
    >
      {props.title}
    </Text>
    {props.badge !== undefined ? 
      <Badge counter={props.badge} /> :
      null
    }
  </TouchableOpacity>
)