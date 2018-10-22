import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import styled from 'styled-components'

const MediumText = styled(Text)`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0;
  color: ${props => (props.color ? props.color : '#ababba')};
`
const XsText = styled(Text)`
  font-size: 12px;
  font-weight: normal;
  opacity: 0.5;
  letter-spacing: 1.2px;
  color: #1d1d26;
`
const FlexWrapper = styled(View)`
  flex-direction: ${props => (props.direction ? props.direction : 'column')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  margin: ${props => (props.viewMargin ? props.viewMargin : 0)}px;
  padding: ${props => (props.viewPadding ? props.viewPadding : 0)}px;
  width: ${props => (props.width ? props.width : 'auto')};
  flex-basis: ${props => (props.flexBasis ? props.flexBasis : '100%')};
`
const TouchableFlex = styled(TouchableOpacity)`
  flex-direction: ${props => (props.direction ? props.direction : 'column')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  margin: ${props => (props.viewMargin ? props.viewMargin : 0)}px;
  padding: ${props => (props.viewPadding ? props.viewPadding : 0)}px;
  width: ${props => (props.width ? props.width : 'auto')};
  flex-basis: ${props => (props.flexBasis ? props.flexBasis : '100%')};
`
const StyledImage = styled(Image)`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  margin: ${props => (props.imageMargin ? props.imageMargin : '0px')};
  resize-mode: ${props => (props.resizeMode ? props.resizeMode : 'contain')};
`
const BgImage = styled(ImageBackground)`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  margin: ${props => (props.imageMargin ? props.imageMargin : '0')};
`

export { FlexWrapper, TouchableFlex, StyledImage, BgImage, MediumText, XsText }
