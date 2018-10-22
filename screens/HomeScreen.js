import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../components'

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header headerTitle="Home" leftIcon={'arrowBack'} onPressLeft={() => navigation.goBack()} />
  })

  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}
