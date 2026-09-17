import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { login } from '../src/services/usuarios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);


  async function fazerlogin(emailParam, passwordParam) {
    setCarregando(true);

    try {
      const usuario = await login(emailParam, passwordParam);

      setMensagem(`Login realizado com Sucesso, ${usuario.nome}!`);
      setSucesso(true);
      navigation.navigate('App');
    } catch (erro) {
      setMensagem(erro.message);
      setSucesso(false);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/image/Keep.jpg')}
        style={styles.logo}
      />

      <Text style={styles.txt_logo}>KeepStock</Text>

      <Text style={styles.subtitle}>
        Bem Vindo
      </Text>

      <TextInput
        placeholder="Usuario"
        placeholderTextColor="#202327"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#202327"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.subtitle}>
        Já possui conta?
      </Text>

      <TouchableOpacity>
        <Text style={styles.subtitle} onPress={() => navigation.navigate('Cadastro')}>
          Cadastrar-se
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => fazerlogin(email, password)}
        disabled={carregando}
      >
        <Text style={styles.buttonText}>
          {carregando ? 'Entrando...' : 'Entrar'}
        </Text>
      </TouchableOpacity>


      {mensagem !== '' && (
        <Text style={[
          styles.mensagem,{ color: sucesso ? '#2e7d32' : '#d32f2f' }]}>{mensagem}
        </Text>

      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 25,
  },

  txt_logo: {
    color: '#006e5a',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    color: '#559b89',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },

  input: {
    backgroundColor: '#ccd3d2',
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 15,
    color: '#000',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#00977b',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  logo: {
    marginLeft: 90,
    width: 470,
    height: 150,
    alignSelf: 'center',
  }
});


