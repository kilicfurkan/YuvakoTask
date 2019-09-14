import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import SystemButton from '../../Common/SystemButton'
import FilesDueDate from './Components/FilesDueDate'
import styles from './styles'

export default () => (
  <View style={styles.filesContainer}>
    <SystemButton title="Add File" buttonStyle={styles.button} />
    <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      {dates.map((date, index) => (
        <FilesDueDate {...date} key={index} />
      ))}
    </ScrollView>
  </View>
)

const dates = [
  {
    'dateName': 'Dec. 31th - Friday',
    'files': [
      {
        'documentTitle': 'Yer gösterme belgesi - Ev id : 215',
        'documentImage': 'document'
      }
    ]
  },
  {
    'dateName': 'Dec. 28th - Wednesday',
    'files': [
      {
        'documentTitle': 'Kimlik belgesi',
        'documentImage': 'tc'
      },
      {
        'documentTitle': 'Yer gösterme belgesi - Ev id : 215',
        'documentImage': 'document'
      }
    ]
  }
]