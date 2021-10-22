import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import LogoImage from '../../assets/logo.svg'
import UserPhoto from '../UserPhoto'

const Header = () => {
  return (
    <View style={styles.container}>
      <LogoImage />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageURI="https://github.com/Nxrth-x.png" />
      </View>
    </View>
  )
}

export default Header
