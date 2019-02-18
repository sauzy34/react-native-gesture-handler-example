import React from 'react'
import { View } from 'react-native'
import { StyledText } from '../components/StyledComponents'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home'
  }

  render() {
    return (
      <View>
        <StyledText fontSize="20px">Home</StyledText>
      </View>
    )
  }
}
