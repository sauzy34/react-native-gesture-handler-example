import React from 'react'
import { FlexWrapper } from '../components'
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { Icon } from '../components'
import { HomeScreen, LinksScreen, SettingsScreen } from '../screens'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

const LinksStack = createStackNavigator({
  Links: LinksScreen
})

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})

const TabNavigation = createBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        if (routeName === 'HomeStack') {
          return (
            <FlexWrapper justifyContent="center" alignItems="center">
              <Icon
                fill={focused ? '#ff4e21' : '#5c6979'}
                name={'arrowBack'}
                width={24}
                height={24}
                viewBox="0 0 24 24"
              />
            </FlexWrapper>
          )
        } else if (routeName === 'LinksStack') {
          return (
            <FlexWrapper justifyContent="center" alignItems="center">
              <Icon
                fill={focused ? '#ff4e21' : '#5c6979'}
                name={'arrowBack'}
                width={24}
                height={24}
                viewBox="0 0 24 24"
              />
            </FlexWrapper>
          )
        } else if (routeName === 'SettingsStack') {
          return (
            <FlexWrapper justifyContent="center" alignItems="center">
              <Icon
                fill={focused ? '#ff4e21' : '#5c6979'}
                name={'arrowBack'}
                width={24}
                height={24}
                viewBox="0 0 24 24"
              />
            </FlexWrapper>
          )
        }
      }
    }),
    tabBarOptions: {
      showLabel: false
    },
    initialRouteName: 'HomeStack'
  }
)
export default createSwitchNavigator(
  {
    App: TabNavigation
  },
  {
    initialRouteName: 'App'
  }
)
