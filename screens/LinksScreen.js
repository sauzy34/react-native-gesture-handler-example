import React from 'react'
import { View } from 'react-native'
import { StyledText } from '../components'
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Links'
  }

  render() {
    return (
      <View>
        <StyledText fontSize="20px">Links</StyledText>
      </View>
    )
  }
}
