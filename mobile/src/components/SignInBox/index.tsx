import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../../theme'
import Button from '../Button'

import { styles } from './styles'

const SignInBox = () => {
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon={'github'}
      />
    </View>
  )
}

export default SignInBox
