import React from 'react'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles'
import { COLORS } from '../../theme'

import avatarImage from '../../assets/avatar.png'
const avatarDefault = Image.resolveAssetSource(avatarImage).uri

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 44,
  },
}

const UserPhoto: React.FC<UserPhotoProps> = ({ imageURI, size = 'NORMAL' }) => {
  const { containerSize, avatarSize } = SIZES[size]

  return (
    <LinearGradient
      start={{
        x: 0,
        y: 0.8,
      }}
      end={{
        x: 0.9,
        y: 1,
      }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
      colors={[COLORS.PINK, COLORS.YELLOW]}
    >
      <Image
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
        source={{ uri: imageURI || avatarDefault }}
      />
    </LinearGradient>
  )
}

export default UserPhoto

type UserPhotoProps = {
  imageURI: string
  size?: 'SMALL' | 'NORMAL'
}
