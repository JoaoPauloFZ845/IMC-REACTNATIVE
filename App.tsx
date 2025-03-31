import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  useColorScheme,
} from 'react-native';
//Variáveis
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false);

  function CalcularIMC(peso: string, altura: string) {
    return (parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2);
  }

  function Mensagem(imc: string) {
    const imc1 = parseFloat(imc);
    if (imc1 < 18.5) {
      setMensagem('Abaixo do peso');
    } else if (imc1 < 25) {
      setMensagem('Peso normal');
    } else if (imc1 < 30) {
      setMensagem('Sobrepeso');
    } else {
      setMensagem('Obesidade');
    }
  }

  //Código principal 
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Calculadora de IMC</Text>

        <Text style={styles.label}>Digite seu peso (kg):</Text>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Digite sua altura (m):</Text>
        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />

        <View style={styles.botao}>
          <Button
            title="Calcular"
            color="#4CAF50"
            onPress={() => {
              const Resultado = CalcularIMC(peso, altura);
              setResultadoIMC(Resultado);
              Mensagem(Resultado);
              setMostrarResultado(true);
            }}
          />
        </View>
        {mostrarResultado && (
  <>
    <Text style={styles.resultado}>Seu IMC é: {resultadoIMC}</Text>
    <Text style={styles.diagnostico}>Diagnóstico: {mensagem}</Text>
  </>
)}
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { //VIEW1
    flex: 1,
    backgroundColor: '#f2f2f2', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: { //VIEW2
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  botao: {
    marginTop: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  diagnostico: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default App;
