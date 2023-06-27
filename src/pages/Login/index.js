import React, { useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import MeuInput from "./src/components/MeuInput";
import SuperButton from "../../components/SuperButton";

import { Container, MeuText } from "../../styles/style-geral";

const usuario = {
  email: "emailcerto@correto",
  senha: "123",
};

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = () => {
    if (!email || !senha) {
      Alert.alert(`O e-mail e senha devem ser preenchidos.`);
    } else if (email !== usuario.email || senha !== usuario.senha) {
      Alert.alert(`O e-mail ou a senha estão incorretos.`);
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <Container style={style.boxLogin}>
      <MeuText fontSize={60} style={style.titulo}>
        Login
      </MeuText>

      <MeuInput
        label="E-mail"
        placeHolder="regen@gmail.com"
        comMascara={false}
        setValor={setEmail}
      ></MeuInput>

      <MeuInput
        label="Senha"
        placeHolder="123456"
        comMascara={true}
        setValor={setSenha}
      ></MeuInput>

      <View style={style.boxRecuperarSenha}>
        <Text style={style.recuperarSenha}>Recuperar senha</Text>
      </View>

      <SuperButton value={"Entrar"} acao={logar}></SuperButton>
    </Container>
  );
}

const style = StyleSheet.create({
  boxLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  titulo: {
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 15,
  },

  boxRecuperarSenha: {
    width: 300,
    justifyContent: "flex-end",
    textAlign: "right",
  },

  recuperarSenha: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#009092",
    textAlign: "center",
    color: "#ffffff",
    padding: "10px",
  },
});

export default Login;
