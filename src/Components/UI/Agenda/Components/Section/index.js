import React from 'react'
import { View, Text, Image } from 'react-native'
import Badge from '../../../../Common/Badge'
import Button from '../../../../Common/Button'
import OutlineButton from '../../../../Common/OutlineButton'
import styles from './styles'

export default (props) => (
  <View style={styles.sectionContainer}>
    <Image source={require('../../../../../../assets/images/pp.png')} style={styles.image} />
    <View style={styles.detailsContainer}>
      <View style={styles.userAndDateContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.user}>{props.user}</Text>
          {props.badge ? <Badge /> : null}
        </View>
        {!props.past ? <Text style={styles.date}>{props.date}</Text> : null}
      </View>
      <Text style={styles.detail}>{props.detail}</Text>
      {props.clientImage ? <Image source={require('../../../../../../assets/images/pp.png')} style={styles.detailImage} /> : null}
      {props.client ? <Text style={styles.client}>{props.client}</Text> : null}
      {props.bid ? <Text style={styles.bid}>{props.bid}</Text> : null}
      <View style={[styles.buttonContainer, props.past ? styles.pastButtonContainer : null]}>
        <Button 
          size="small" 
          title="Take Action" 
          buttonStyle={props.past ? styles.disableButtonContainer : null} 
          />
        <OutlineButton 
          size="small" 
          title="Take Action" 
          buttonStyle={props.past ? styles.disableOutlineButtonContainer : null} 
          titleStyle={props.past ? styles.disableOutlineButtonTitle : null} 
        />
        {props.past ? <Text style={styles.date}>{props.date}</Text> : null}
      </View>
    </View>
  </View>
)