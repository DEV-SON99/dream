import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; // Importe o Image aqui
import { useRouter } from 'expo-router'; // Importe o hook de navegação

export default function ShopScreen() {
  const router = useRouter(); // Inicialize o router

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LISTA DE CUPCAKES</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('../(stack)/shop')} // Use o router para navegação
      >
        <Image source={require('../assets/images/cupcake.jpg')} style={styles.buttonImage} />  {/* Corrija o caminho da imagem */}
        <Text style={styles.buttonText}>CONSUMIR NA LOJA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff' 
  },
  text: { fontSize: 24, fontWeight: 'bold' },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '65%',
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 50,  // Ajuste o tamanho da imagem conforme necessário
    height: 50, // Ajuste o tamanho da imagem conforme necessário
    marginBottom: 10, // Espaço entre a imagem e o texto
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
});
