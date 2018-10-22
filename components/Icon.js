import React, { Component } from 'react'
import SvgIcon from 'react-native-svg-icon'
import svgs from '../assets/svgs'

class Icon extends Component {
  render() {
    const { ...props } = this.props
    return <SvgIcon {...props} viewBox={this.props.viewBox ? this.props.viewBox : '0 0 24 24'} svgs={svgs} />
  }
}

export default Icon
