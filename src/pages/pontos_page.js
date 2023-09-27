import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import { useState } from 'react';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const PontosPage = ({ navigation }) => {

  const [isViewVisible, setIsViewVisible] = useState(false);

  const toggleView = () => {
    setIsViewVisible(!isViewVisible);
  };

  const [value, setPonto] = useState("");

    return(
        <View style={styles.container}>
            <View style={background.yellow_background}>
                <Pressable style={icons.menu} onPress={() => navigation.navigate('HomePage')}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
        
                <Text style={{fontSize:25, color: grey, fontWeight: 'bold'}}>RESGATE DE PONTOS</Text>
            </View>

            <View style={background.white_background}>
              <Text style={{fontSize:15, fontWeight: 'bold', color: grey, paddingTop: 20}}>VOCÊ POSSUI</Text>
              <Text style={{fontSize: 80, fontWeight: 'bold', color: grey, marginTop: -20, marginBottom: -20}}>{value !== '' ? value : '0'}</Text>
              <Text style={{fontSize: 20, color: grey}}>PONTOS</Text>
              <Text style={{fontSize: 10, fontWeight: 'bold', color: grey, letterSpacing: 2,}}>ESCOLHA MILHAS OU DESCONTOS:</Text>

              <View style={{width: "80%", flexDirection: 'row', justifyContent: 'space-between'}}>
                <Pressable style={{width: 90, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0', }} onPress={() => alert("MILHAS")}><Text >MILHAS</Text></Pressable>
                <Pressable style={{width: 90, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0', }} onPress={() => alert("DESCONTO")}><Text >DESCONTO</Text></Pressable>
                
              </View>

              
              <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 7}}>SUA SOLICITAÇÃO CONSUMIRÁ PONTOS</Text>
              <Pressable style={buttons.model_1} onPress={() => alert('GERANDO O RESGATE...')}>
                <Text style={{ fontSize: 20,fontWeight: 'bold', color: grey, textAlign: 'center', letterSpacing: 2 }}>GERAR RESGATE</Text>
              </Pressable>
              </View>

            </View>


            <View style={background.widget}>
              <View style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
                <Text>SAIBA COMO FUNCIONA</Text>
                <Pressable onPress={toggleView}><AntDesign name="down" size={24} color="black" /></Pressable>
              </View>

              {isViewVisible && (
                      <View style={{width: '50%', height: 50, marginTop: 51, borderRadius: 50, gap:10,position: 'absolute', backgroundColor: purple, justifyContent:"center"}}>

                      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap:10}}>
                      <Text style={{color: white}}>{value} PONTOS:</Text>
                        <TextInput
                              style={{width: 50, height: 20, backgroundColor: 'white'}}
                              keyboardType="phone-pad"
                              onChangeText={(value) => setPonto(value)}
                              maxLength={4}
                            />
                            

                        
                  
                      </View>

                  </View>
                    )}

              <View style={{width: '60%', height: 50, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: yellow}}>
                <Text style={{fontSize: 6, fontWeight: 'bold', textAlign: 'center'}}>OS PONTOS ACUMULADOS ATÉ O DIA 31/01/2023 EXPIRAM EM 01/04/2023. OS PONTOS ACUMULADOS A PARTIR DE 01/02/2023 TÊM VALIDADE DE 6 MESES.</Text>
              </View>
            </View>

            

            <StatusBar style="auto" />
        </View>
    )
}
export default PontosPage;

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
  });

  const background = StyleSheet.create({
    yellow_background: {
      width: '100%',
      height: 350,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 50,
      backgroundColor: yellow,
    },
    white_background: {
      width: '85%',
      height: 350,
      top: 100,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'space-around',
      // gap: 20,

      borderColor: 'black',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 4, // Isso é para dispositivos Android
        backgroundColor: 'white', // Cor de fundo
      backgroundColor: 'white',
    },
    widget: {
      width: '99%',
      height: '45%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      
      top: 110,
      gap: 20,

      // backgroundColor: 'grey'
    }
  })

// Buttons
const buttons = StyleSheet.create({
  model_1: {
    width: '80%',
    height: 60,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,

    
    backgroundColor: '#e0e0e0'
  }
})

const box = StyleSheet.create({
  model_1: {
    width: 330,
    height: 100,
    padding: 20,
    paddingLeft: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap:20,

    borderColor: 'black',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
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
        borderRadius: 5,
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
      widget: 80,
      height: 80,
  
    },
    dashboard: {
      widget: 80,
      height: 80,
    }
  })