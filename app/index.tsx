// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.jpg')} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => router.push('../(stack)/shop')}>
        <Text style={styles.buttonText}>CONSUMIR NA LOJA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('../(stack)/delivery')}>
        <Text style={styles.buttonText}>DELIVERY</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logo: { width: 300, height: 215, marginBottom: 15 },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '65%',
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});
