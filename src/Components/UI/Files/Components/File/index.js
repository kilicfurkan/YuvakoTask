import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import SystemButton from '../../../../Common/SystemButton'

export default (props) => (
  <View style={styles.fileContainer}>
    <Image 
      style={styles.image}
      source={props.documentImage === 'tc' ? 
        require('../../../../../../assets/images/tc.png') :
        require('../../../../../../assets/images/document.jpg')} 
    />
    <Text style={styles.title}>{props.documentTitle}</Text>
    <SystemButton title="delete" buttonStyle={styles.button} />
  </View>
)