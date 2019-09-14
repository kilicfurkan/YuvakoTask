import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Badge from '../Badge'
import styles from './styles'

let buttonStyle = null

export default (props) => {
  switch(props.size) {
    case "large":
      buttonStyle = styles.large
      break;
    case "medium":
      buttonStyle = styles.medium
      break;
    case "small":
      buttonStyle = styles.small
      break;
  }

  return (
    <TouchableOpacity 
      style={[
        styles.buttonContainer, 
        buttonStyle, 
        props.buttonStyle
      ]}
    >
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
      {props.badge !== undefined ?
        <Badge counter={props.badge} type="button" /> :
        null
      }
    </TouchableOpacity>
  )
}