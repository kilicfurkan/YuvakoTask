import React from 'react'
import { ScrollView, SafeAreaView, StatusBar } from 'react-native'

import Header from '../../Components/UI/Header'
import Contact from '../../Components/UI/Contact'
import Timer from '../../Components/UI/Timer'
import Profile from '../../Components/UI/Profile'
import Properties from '../../Components/UI/Properties'
import TabBar from '../../Components/UI/TabBar'
import Agenda from '../../Components/UI/Agenda'
import Activities from '../../Components/UI/Activities'
import Files from '../../Components/UI/Files'
import Tags from '../../Components/UI/Tags'
import Carousel from '../../Components/UI/Carousel'

import styles from './styles'

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "Agenda"
    }
  }

  renderSelectedTab = () => {
    switch (this.state.selectedTab) {
      case "Agenda":
        return <Agenda />
      case "Activities":
        return <Activities />
      case "Files":
        return <Files />

    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Contact />
        <ScrollView style={styles.scrollViewContainer}>
          <Timer />
          <Profile />
          <Properties />
          <Tags />
          <Carousel />
          <TabBar onSelectTab={selectedTab => this.setState({ selectedTab })} />
          {this.renderSelectedTab()}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default MainScreen