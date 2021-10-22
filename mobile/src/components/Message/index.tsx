import React from 'react'
import { View, Text } from 'react-native'
import { MotiView } from 'moti'
import { styles } from './style'

import UserPhoto from '../UserPhoto'

const Message: React.FC<MessageProps> = ({ data }) => {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={styles.container}
    >
      <Text style={styles.message}>{data.text}</Text>
      <View style={styles.footer}>
        <UserPhoto imageURI={data.user.avatar_url} size="SMALL" />
        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  )
}

export default Message

type MessageProps = {
  data: App.MessageType
}
