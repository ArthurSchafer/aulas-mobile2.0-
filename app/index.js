import { useState } from "react";
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 18 }}>Tela Inicial</Text>
      <Link href="/TelaPrinc" asChild>
        <Button title="Ir para a tela de cadastro de treino" />
      </Link>
    </View>
  );
}