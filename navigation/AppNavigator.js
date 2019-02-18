import React from 'react'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { FlexWrapper, Icon } from '../components'
import { HomeScreen, LinksScreen, SettingsScreen } from '../screens'
import Colors from '../constants/Colors'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: Colors.primary || '#00B7AF',
        height: 40,
        color: '#fff',
        elevation: 0
      },
      headerTitleStyle: {
        // fontFamily: 'nato-sans-regular'
      }
    },
    // headerMode: 'float',
    headerLayoutPreset: 'center'
    // headerBackTitleVisible: true
  }
)

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: Colors.primary || '#00B7AF',
        height: 40,
        color: '#fff'
      },
      headerTitleStyle: {
        // fontFamily: 'nato-sans-regular'
      }
    },
    // headerMode: 'float',
    headerLayoutPreset: 'center'
    // headerBackTitleVisible: true
  }
)

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: Colors.primary || '#00B7AF',
        height: 40,
        color: '#fff'
      },
      headerTitleStyle: {
        // fontFamily: 'nato-sans-regular'
      }
    },
    // headerMode: 'float',
    headerLayoutPreset: 'center'
    // headerBackTitleVisible: true
  }
)

const TabNavigation = createBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        if (routeName === 'HomeStack') {
          return (
            <FlexWrapper justifyContent="center" alignItems="center">
              <Icon
                fill={focused ? Colors.primary : Colors.secondary}
                name={'home'}
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
                fill={focused ? Colors.primary : Colors.secondary}
                name={'search'}
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
                fill={focused ? Colors.primary : Colors.secondary}
                name={'account'}
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
      showLabel: false,
      activeTintColor: '#000',
      style: {
        backgroundColor: '#fff',
        height: 55,
        paddingTop: 5
      }
    },
    initialRouteName: 'HomeStack'
  }
)

const AppContainer = createAppContainer(TabNavigation)
export default AppContainer
