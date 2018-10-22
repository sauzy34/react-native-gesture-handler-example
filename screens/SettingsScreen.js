import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '../components'

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header headerTitle="Settings" leftIcon={'arrowBack'} onPressLeft={() => navigation.goBack()} />
  })

  render() {
    return (
      <View>
        <Text>LinksScreen</Text>
      </View>
    )
  }
}
