import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

export default (props) => (
  <TouchableOpacity 
    style={[styles.systemButtonContainer, props.buttonStyle]}
    onPress={props.onPressButton}
  >
    {props.icon !== "" ?
      <Ionicons name={props.icon} size={props.iconSize} style={styles.icon} /> :
      null
    }
    <Text style={[styles.text, props.titleStyle]}>{props.title}</Text>
  </TouchableOpacity>
)