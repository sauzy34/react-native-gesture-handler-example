import React, { Component } from 'react'
import styled from 'styled-components'
import { TouchableOpacity, View, Text } from 'react-native'
import { FlexWrapper, Icon } from '../components'

const HeaderView = styled(View)`
  height: 48;
  background-color: #fff;
  z-index: 9;
  padding: 0px 16px 0 16px;
  elevation: 1;
  shadow-offset: 0px 10px;
  shadow-radius: 40;
  shadow-opacity: 0.05;
  shadow-color: #000000;
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const HeaderTitle = styled(Text)`
  font-size: 16px;
  color: #000;
  text-align: center;
`
class Header extends Component {
  render() {
    const { leftIcon, rightIcon, onPressLeft, onPressRight, headerTitle, ...props } = this.props
    return (
      <HeaderView {...props}>
        <FlexWrapper flexBasis={'10%'} direction="row" justifyContent="flex-start" alignItems="center">
          {leftIcon && (
            <TouchableOpacity onPress={() => (onPressLeft ? onPressLeft() : null)}>
              <Icon name={leftIcon} fill={'#000'} width={24} height={24} />
            </TouchableOpacity>
          )}
        </FlexWrapper>
        <FlexWrapper flexBasis={'80%'} alignItems="center">
          <HeaderTitle>{headerTitle} </HeaderTitle>
        </FlexWrapper>
        <FlexWrapper flexBasis={'10%'} justifyContent="center" alignItems="flex-end">
          {rightIcon && (
            <TouchableOpacity onPress={() => (onPressRight ? onPressRight() : null)}>
              <Icon name={rightIcon} fill={'#000'} width={24} height={24} />
            </TouchableOpacity>
          )}
        </FlexWrapper>
      </HeaderView>
    )
  }
}

export default Header
