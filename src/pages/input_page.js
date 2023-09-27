import react from "react";
import { View, Text, TextInput, StyleSheet, Button, Pressable, FlatList, Image } from "react-native";
import { AntDesign, Entypo, SimpleLineIcons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';



const InputPage = ({ navigation }) =>{

    const [name, setName] = useState("");

    const ValueVelocimetro = () => {
        name
      }
  return (

    <View style={background.widget}>
      <View style={background.yellow_background}>
            <Pressable style={icons.menu} onPress={() => navigation.navigate('HomePage')}>
                <AntDesign name="left" size={24} color="black" />
            </Pressable>
    
        </View>


    <FlatList 
      data={[
        { key: '1', name: 'JoaoGabriel', funcao: 'Mobile Developer', img: require('../../assets/imgs/JoaoGabriel.jpg') },
        { key: '2', name: 'RafaelBisi', funcao: 'Faz Tudo', img: require('../../assets/imgs/RafaelBisi.jpg') },
        { key: '3', name: 'AntonioCruz', funcao: 'Back end', img: require('../../assets/imgs/AntonioCruz.jpg') },
        { key: '4', name: 'Lis', funcao: 'Design e Marketing', img: require('../../assets/imgs/Lis.jpg') },
        { key: '5', name: 'AhmadJaafar', funcao: 'Testador do App', img: require('../../assets/imgs/AhmadJaafar.jpg') },
      ]}
      renderItem={({ item }) => (
        <Pressable style={box.model_1} onPress={() => alert(item.funcao)}>
          <Image source={item.img} style={{width: 100, height: 100, borderRadius: 100}}/>
          <View style={{gap:10}}>
              <Text style={{fontSize:20}}>{item.name}:</Text>
              <Text>{item.funcao}</Text>
          </View>
        </Pressable>
      )}
      keyExtractor={(item) => item.key}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // Altura entre os itens
    />

  </View>
    )
}

export default InputPage;

// Cores
const yellow = "#fdcf0f"
const purple = "#631964"
const white = "#f6f6f6"
const grey = "#393939"

// Constantes
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'start',
    },
    input: {
        width: 100,
        height: 50,
        backgroundColor: 'white'
    }
  });

  // Backgrounds
const background = StyleSheet.create({
    yellow_background: {
      width: '100%',
      height: 260,
      flexDirection: 'row',
      backgroundColor: yellow,
    },
    purple_background: {
      width: '90%',
      height: 230,
      top: 80,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
  
      borderColor: 'black',
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
              width: 0,
              height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4, // Isso é para dispositivos Android
          backgroundColor: 'white', // Cor de fundo
      backgroundColor: purple,
    },
    widget: {
      width: '100%',
      flexDirection: 'column',
      top: 80,
      gap: 20
    }
  })
  
  // Buttons
  const buttons = StyleSheet.create({
    model_1: {
      width: '80%',
      height: 60,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 20,
      backgroundColor: white
    }
  })
  
  const box = StyleSheet.create({
    model_1: {
      width: '100%',
      height: 100,
      padding: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
  
      borderColor: 'black',
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
              width: 0,
              height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4, // Isso é para dispositivos Android
          backgroundColor: 'white', // Cor de fundo
    },
    model_2: {
      width: '40%',
      height: 120,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
  
      borderColor: 'black',
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
              width: 0,
              height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 4, // Isso é para dispositivos Android
          backgroundColor: 'white', // Cor de fundo
    }
  })
  
  const icons = StyleSheet.create({
    menu: {
      width: 25,
      height: 25,
      position: 'absolute',
      top: 45,
      left: 20,
  
    },
    questioncircleo: {
      width: 25,
      height: 25,
      position: 'absolute',
      top: 45,
      right: 60,
  
    },
    bell: {
      width: 25,
      height: 25,
      position: 'absolute',
      top: 45,
      right: 20,
    },
    car: {
      widget: 10,
      height: 80,
  
    },
    dashboard: {
      widget: 80,
      height: 80,
    }
  })