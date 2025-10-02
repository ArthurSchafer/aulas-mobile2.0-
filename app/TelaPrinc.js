import { View, Text, Button, StyleSheet, FlatList, TextInput } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { db, initDb } from "../data/db";

initDb();

function getTarefas(){
  return db.getAllSync('SELECT * FROM tarefas');
}

function insertTarefa(nome){
  db.runSync('INSERT INTO tarefas (nome) VALUES (?)', [nome]);
}

function deleteTarefa(id) {
  db.runSync('DELETE FROM tarefas WHERE id = ?', [id]);
}

export default function sqlite() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);

    const [texto1, setTexto1] = useState("");
  const [tarefas1, setTarefas1] = useState([]);

    const [texto2, setTexto2] = useState("");
  const [tarefas2, setTarefas2] = useState([]);

  function salvarTarefa() {
    const nome = texto.trim();
    if (!nome) return;
    insertTarefa(nome);
    setTexto("");
  }

  function carregarTarefas() {
    setTarefas(getTarefas());
  }

  function excluirTarefa(id) {
    deleteTarefa(id);
    carregarTarefas();
  }

    function salvarTarefa1() {
    const nome = texto.trim();
    if (!nome) return;
    insertTarefa1(nome);
    setTexto("");
  }

  function carregarTarefas1() {
    setTarefas1(getTarefas1());
  }

  function excluirTarefa(id) {
    deleteTarefa(id);
    carregarTarefas();
  }
    function salvarTarefa2() {
    const nome = texto.trim();
    if (!nome) return;
    insertTarefa2(nome);
    setTexto("");
  }

  function carregarTarefas2() {
    setTarefa2s(getTarefas2());
  }

  function excluirTarefa(id) {
    deleteTarefa(id);
    carregarTarefas();
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Tarefas</Text>

      <View style={estilos.linhaEntrada}>
        <TextInput
          value={texto}
          onChangeText={setTexto}
          placeholder="Atividade"
          style={estilos.campoTexto}
        />
      </View>
            <View style={estilos.linhaEntrada}>
        <TextInput
          value={texto1}
          onChangeText={setTexto1}
          placeholder="Duração"
          style={estilos.campoTexto}
        />
      </View>
            <View style={estilos.linhaEntrada}>
        <TextInput
          value={texto2}
          onChangeText={setTexto2}
          placeholder="Categoria"
          style={estilos.campoTexto}
        />
      </View>
       <Button title="Salvar" onPress={salvarTarefa | salvarTarefa1 | salvarTarefa2} />
       <View>
        <TextInput
                  
        />
       </View>
      <Button title="Carregar tarefas" onPress={carregarTarefas} />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={estilos.itemLinha}>
            <Text style={estilos.textoItem}>- {item.nome}</Text>
            <Button title="x" color="#ff0000ff" onPress={() => excluirTarefa(item.id)} />
          </View>
        )}
      />

      <View style={estilos.rodape}>
        <Button title="Voltar" onPress={() => router.back()} />
        <Button title="Início" onPress={() => router.replace("/")} />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 
  },
  titulo: { 
    fontSize: 18, 
    fontWeight: "600", 
    marginBottom: 8 
  },
  linhaEntrada: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 8, 
    gap: 8 
  },
  campoTexto: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  textoItem: { 
    fontSize: 16, 
    paddingVertical: 6 
  },
  itemLinha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  rodape: { 
    flexDirection: "row", 
    gap: 8, 
    marginTop: 8 
  },
});

