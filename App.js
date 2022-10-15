import { NavigationContainer, StackActions, StackRouter } from '@react-navigation/native';
import { StyleSheet, Text, View, Touchable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-web';

// generar una constante que permite definir las pantallas donde se navegara

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name ="Home" component={HomeScreen} options = {{tittle: 'Inicio'}}/>

      <Stack.Screen name = "profile" component = {ProfileScreen} options = {{tittle: 'Perfil de usuario'}} />

      <Stack.Screen name = "Dashboard" component = {DashBoardScreen} options = {{tittle: 'Tablero principal'}} />

    </Stack.Navigator>
   </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) =>{
  return(
    <View style = {styles.container}>
      <TouchableOpacity style = {{backgroundColor:"green", padding:10, borderRadius:10}}
      onPress={()=>{navigation.navigate('profile',{name:'Pepe perez',rol:2})}}>
      <Text style= {{color:"white",fontSize:20}}>Ir a perfil de usuario</Text>
      </TouchableOpacity>
    </View>
  )
}

const ProfileScreen = ({navigation, route})=>{
  return(
    <View style ={styles.container}>
      <Text>Este es el usuario {route.params.username}, con nombre {route.params.name}</Text>

      <TouchableOpacity style = {{backgroundColor:"red", padding:10, borderRadius:10}}
      onPress={()=>{route.params.rol == 1 ? navigation.navigate('Dashboard',{name:'Pepe perez',username:'pperez'}) :navigate.navigate('Home')}}>
      <Text style= {{color:"white",fontSize:20}}>Ingrese al panel de control</Text>
      </TouchableOpacity>

    </View>
  )
}

const DashBoardScreen = ({navigation, route})=>{
  return(

    <View style ={styles.container}>
      <Text>Esta como administrador del sistema con nombre {route.params.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
