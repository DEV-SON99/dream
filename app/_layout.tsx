// app/_layout.tsx
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/home.jpg')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#000' : '#888',
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/pedidos.jpg')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#000' : '#888',
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profiles"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/perfil.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#000' : '#888',
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addfunds"
        options={{
          tabBarLabel: 'Adicionar Saldo',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/adicionar_saldo.jpg')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#000' : '#888',
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
