import React from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ColorValue,
  ActivityIndicator,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles'

const Button: React.FC<ButtonProps & TouchableOpacityProps> = ({
  title,
  color,
  icon,
  backgroundColor,
  isLoading = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={color} />
      ) : (
        <React.Fragment>
          <AntDesign name={icon} size={24} style={styles.icon} />
          <Text
            style={[
              styles.title,
              {
                color,
              },
            ]}
          >
            {title}
          </Text>
        </React.Fragment>
      )}
    </TouchableOpacity>
  )
}

export default Button

type ButtonProps = {
  title: string
  color: ColorValue
  backgroundColor: ColorValue
  icon?: React.ComponentProps<typeof AntDesign>['name']
  isLoading?: boolean
}
