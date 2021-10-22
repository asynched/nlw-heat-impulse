import React from 'react'
import { ScrollView } from 'react-native'
import Message from '../Message'
import { styles } from './styles'

const MessageList = () => {
  const message: App.MessageType = {
    id: '1',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quos cupiditate quae et voluptas mollitia illo odit officiis libero eius.',
    user: {
      avatar_url: 'https://github.com/Nxrth-x.png',
      name: 'Nxrth-x',
    },
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  )
}

export default MessageList
