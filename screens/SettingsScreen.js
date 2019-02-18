import React from 'react'
import { View } from 'react-native'
import { StyledText } from '../components'
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Settings'
  }

  render() {
    return (
      <View>
        <StyledText fontSize="20px">Settings</StyledText>
      </View>
    )
  }
}
