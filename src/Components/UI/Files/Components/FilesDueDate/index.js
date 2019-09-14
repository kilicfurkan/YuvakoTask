import React from 'react'
import { View, Text } from 'react-native'
import File from '../File'
import styles from './styles'

export default (props) => (
  <View style={styles.filesDueDateContainer}>
    <Text style={styles.title}>{props.dateName}</Text>
    {props.files.map((file, index) => (
      <File documentTitle={file.documentTitle} documentImage={file.documentImage} key={index} />
    ))}
  </View>
)