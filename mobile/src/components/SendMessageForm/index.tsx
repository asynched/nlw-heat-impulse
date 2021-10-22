import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import { styles } from './styles'
import { COLORS } from '../../theme'

import Button from '../Button'

const SendMessageForm = () => {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  const handleSendMessage = () => {
    setSendingMessage((previous) => !previous)
  }

  useEffect(() => {
    if (sendingMessage) {
      setTimeout(() => {
        setSendingMessage(false)
      }, 1000)
    }
  }, [sendingMessage])

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        style={styles.input}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />
      <Button
        title="ENVIAR MENSAGEM"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
        onPress={handleSendMessage}
        isLoading={sendingMessage}
      />
    </View>
  )
}

export default SendMessageForm
