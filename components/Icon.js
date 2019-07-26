import React from 'react'
import { View } from 'react-native'
import Svg, { Path, G } from 'react-native-svg'
import Colors from '../constants/Colors'

const Icon = ({ name, fill, width, bottomColor, height, viewBox, ...otherProps }) => {
  const graphics = {
    home: {
      width: 24,
      height: 20,
      viewBox: '0 0 24 20',
      content: <Path fill={fill || Colors.primary} d="M9.6 19.55v-6.9h4.8v6.9h6v-9.2H24L12 0 0 10.35h3.6v9.2z" />
    },
    search: {
      width: 23,
      height: 23,
      viewBox: '0 0 23 23',
      content: (
        <Path
          fill={fill || Colors.primary}
          fillOpacity="1"
          fillRule="evenodd"
          d="M8.794 14.848a6.056 6.056 0 1 1 6.055-6.055 6.048 6.048 0 0 1-6.04 6.055h-.015zm8.074 0h-1.063l-.377-.363a8.771 8.771 0 0 0-.943-12.368 8.77 8.77 0 0 0-12.369.942 8.771 8.771 0 0 0 12.369 12.368l.364.377v1.063l5.72 5.72a1.42 1.42 0 0 0 2.003 0 1.421 1.421 0 0 0 0-2.006l-5.704-5.733z"
        />
      )
    },

    account: {
      width: 23,
      height: 23,
      viewBox: '0 0 23 23',
      content: (
        <G
          fill="none"
          fillRule="evenodd"
          stroke={fill || Colors.primary}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2">
          <Path
            fill="#FFF"
            d="M13.987 5.412a4.327 4.327 0 0 1-4.33 4.326 4.327 4.327 0 1 1 0-8.652 4.327 4.327 0 0 1 4.33 4.326z"
          />
          <Path
            fill={fill || Colors.primary}
            d="M18.316 21.274H1c0-3.981 3.23-7.21 7.215-7.21H11.1a7.212 7.212 0 0 1 7.215 7.21z"
          />
        </G>
      )
    }
  }

  return (
    <View pointerEvents="none">
      <Svg
        width={width || graphics[name].width}
        height={height || graphics[name].height}
        viewBox={viewBox || graphics[name].viewBox}
        x={0}
        y={0}
        {...otherProps}>
        {graphics[name].content}
      </Svg>
    </View>
  )
}

export default Icon
