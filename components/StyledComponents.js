import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Colors from '../constants/Colors'
import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const StyledText = styled(Text)`
  width: ${props => props.width || 'auto'};
  font-size: ${props => props.fontSize || '16px'};
  color: ${props => props.color || Colors.grey3};
  font-family: ${props =>
    props.fontWeight === 'bold'
      ? 'space-mono'
      : props.fontWeight === 'semiBold'
      ? 'space-mono'
      : props.fontWeight === 'medium'
      ? 'space-mono'
      : 'space-mono'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  letter-spacing: ${props => props.letterSpacing || ' 0.2px'};
  padding: ${props => props.padding || '0px'};
  text-decoration-line: ${props => props.textDecorationLine || 'none'};
  flex: ${props => props.flex || 'none'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
`

const FlexWrapper = styled(View)`
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  margin: ${props => props.viewMargin || '0px'};
  padding: ${props => props.viewPadding || '0px'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  flex-basis: ${props => props.flexBasis || 'auto'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  background: ${props => props.background || 'transparent'};
  border-radius: ${props => props.borderRadius || '0'};
  position: ${props => props.position || 'relative'};
`
const TouchableFlex = styled(TouchableOpacity)`
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  margin: ${props => props.viewMargin || '0px'};
  padding: ${props => props.viewPadding || '0px'};
  width: ${props => props.width || 'auto'};
  flex-basis: ${props => props.flexBasis || 'auto'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  background: ${props => props.background || 'transparent'};
`

const StyledImage = styled(Image)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin: ${props => props.imageMargin || '0px'};
  resize-mode: ${props => props.resizeMode || 'contain'};
  border-radius: ${props => props.borderRadius || '0px'};
`
const BgImage = styled(ImageBackground)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin: ${props => props.imageMargin || '0'};
`
const StyledScrollView = styled(KeyboardAwareScrollView)`
  padding: ${props => props.viewPadding || '20px 16px'};
  background: ${props => props.background || 'transparent'};
  flex: 1;
`
const Arrow = styled(View)`
  width: ${props => props.size || '7px'};
  height: ${props => props.size || '7px'};
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-color: ${props => props.borderColor || Colors.primary};
  transform: ${props => props.rotate || 'rotate(225deg)'};
`

export { StyledText, FlexWrapper, TouchableFlex, StyledImage, BgImage, StyledScrollView, Arrow }
