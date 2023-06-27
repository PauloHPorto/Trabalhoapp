import React from "react";
import { Text, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";

import { Container } from "../../styles/style-geral";
import {
  ContainerPrincipal,
  FlatListProdutos,
  ItemProduto,
  TouchProduto,
  MinhaImagem,
} from "./styles";

export default function Home({ route }) {
  const [produtos, setProdutos] = useState([]);

  const [selecionado, setSelecionado] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <TouchProduto
        selecionado={item.id === selecionado}
        onPress={() => setSelecionado(item.id)}
      >
        <ItemProduto selecionado={item.id === selecionado}>
          {item.nome}
        </ItemProduto>
      </TouchProduto>
    );
  };

  return (
    <ContainerPrincipal>
      <MinhaImagem
        onPress
        source={require("../../assets/male.jpg")}
      ></MinhaImagem>

      <FlatListProdutos
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatListProdutos>
    </ContainerPrincipal>
  );
}
