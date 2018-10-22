import React from 'react'
import { G, Path, Polygon, Polyline, Circle, LinearGradient, Rect } from 'react-native-svg'

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

export default {
  search: {
    svg: (
      <G>
        <Circle id="Oval" cx="6.8" cy="6.8" r="6" />
        <Path d="M11.8,11.8 L15.2,15.2" id="Shape" stroke-linecap="round" />
      </G>
    )
  },
  rightArrow: {
    svg: (
      <G>
        <Path stroke-width="2" stroke-miterlimit="10" d="M8.5,5l7,7l-7,7" />
      </G>
    )
  },
  arrowBack: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </G>
    )
  }
}
