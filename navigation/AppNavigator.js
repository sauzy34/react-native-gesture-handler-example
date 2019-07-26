import React from 'react'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { FlexWrapper, Icon } from '../components'
import { HomeScreen, LinksScreen, SettingsScreen } from '../screens'
import Colors from '../constants/Colors'

const tabStyle = {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: Colors.primary || '#00B7AF',
      height: 40,
      color: '#fff',
      elevation: 0
    },
    headerTitleStyle: {
      fontSize: 17
    }
  },
  headerMode: 'float',
  headerLayoutPreset: 'center',
  headerBackTitleVisible: false
}
const TabIcon = props => (
  <FlexWrapper justifyContent="center" alignItems="center" pointerEvents="none">
    <Icon fill={props.focused && Colors.secondary} name={props.icon || 'review'} width={28} height={28} />
  </FlexWrapper>
)
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  { ...tabStyle }
)

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  { ...tabStyle }
)

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  { ...tabStyle }
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
          return <TabIcon icon="home" focused={focused} />
        } else if (routeName === 'SettingsStack') {
          return <TabIcon icon="search" focused={focused} />
        } else if (routeName === 'LinksStack') {
          return <TabIcon icon="account" focused={focused} />
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
