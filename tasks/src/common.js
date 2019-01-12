import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ?
    'https://localhost:3000' : 'https://192.168.31.113:3000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

export { server, showError }
