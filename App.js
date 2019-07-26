import React from 'react'
import { NetInfo, Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'
import AppNavigator from './navigation/AppNavigator'
import { ThemeProvider } from 'styled-components'
import Colors from './constants/Colors'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isConnected: true
  }
  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', isConnected => {
      this.setState({ isConnected })
    })
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else if (!this.state.isConnected) {
      return <View style={styles.container}>{alert('Not Internet Connection')}</View>
    } else {
      return (
        <ThemeProvider theme={Colors}>
          <React.Fragment>
            <SafeAreaView style={{ backgroundColor: '#546e7a' }}>
              <View style={styles.container}>
                {Platform.OS === 'ios' ? (
                  <React.Fragment />
                ) : (
                  <StatusBar backgroundColor={'#546e7a'} barStyle="dark-content" />
                )}
              </View>
            </SafeAreaView>
            <AppNavigator />
          </React.Fragment>
        </ThemeProvider>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require('./assets/images/icon.png'), require('./assets/images/icon.png')]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
