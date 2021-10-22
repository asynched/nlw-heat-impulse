import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

import Header from '../../components/Header'
import MessageList from '../../components/MessageList'
import SignInBox from '../../components/SignInBox'
import SendMessageForm from '../../components/SendMessageForm'

const Home = () => {
  const isLogged = true
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      {isLogged ? <SendMessageForm /> : <SignInBox />}
    </View>
  )
}

export default Home
