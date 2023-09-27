import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, FlatList, TextInput } from 'react-native';
import { useState } from 'react';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';


const ObdPage = ({ navigation }) => {

  const [isViewVisible, setIsViewVisible] = useState(false);

  const toggleView = () => {
    setIsViewVisible(!isViewVisible);
  };

  const [velocidade, setVelocidade] = useState("");
  const [rpm, setRpm] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [temperatura, setTemperatura] = useState("");


    return(
        <View style={styles.container}>

            <View style={background.yellow_background}>
                <Pressable style={icons.menu} onPress={() => navigation.navigate('HomePage')}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
        
            </View>

            {isViewVisible && (
                      <View style={{width: '90%', height: 140, marginTop: 51, padding: 20, borderRadius: 50, gap:10,backgroundColor: purple, position: 'absolute', top:30, zIndex: 1}}>

                      <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap:10}}>
                        <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap:10}}>
                          <Text style={{fontSize:15, color: white}}>VELOCIDADE:</Text>
                          <TextInput
                            style={{width: 50, height: 20, backgroundColor: 'white', position: 'absolute', left: '45%'}}
                            keyboardType="phone-pad"
                            onChangeText={(value) => setVelocidade(value)}
                            maxLength={3}
                          />
                          <Text style={{color: white}}>{velocidade}Km/h</Text>
                        </View>

                        <View style={{width: '90%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap:10}}>
                          <Text style={{fontSize:15 , color: white}}>RPM:</Text>
                          <TextInput
                            style={{width: 50, height: 20, backgroundColor: 'white', position: 'absolute', left: '45%'}}
                            keyboardType="phone-pad"
                            onChangeText={(value) => setRpm(value)}
                            maxLength={4}
                          />
                          <Text style={{color: white}}>{rpm} RPM</Text>
                        </View>

                        
                  
                      </View>

                      <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap:10}}>
                        <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap:10}}>
                          <Text style={{fontSize:15, color: white}}>GASOLINA:</Text>
                          <TextInput
                            style={{width: 50, height: 20, backgroundColor: 'white', position: 'absolute', left: '45%'}}
                            keyboardType="phone-pad"
                            onChangeText={(value) => setGasolina(value)}
                            maxLength={3}
                          />
                          <Text style={{color: white}}>{gasolina}%</Text>
                        </View>

                        <View style={{width: '90%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap:10}}>
                          <Text style={{fontSize:15 , color: white}}>TEMPERATURA</Text>
                          <TextInput
                            style={{width: 50, height: 20, backgroundColor: 'white', position: 'absolute', left: '45%'}}
                            keyboardType="phone-pad"
                            onChangeText={(value) => setTemperatura(value)}
                            maxLength={4}
                          />
                          <Text style={{color: white}}>{temperatura} ºC</Text>
                        </View>

                        
                  
                      </View>
                    

                  </View>
                    )}

            <View style={background.purple_background}>
              <Text style={{fontSize:25, color: white, fontWeight: 'bold'}}>Sistema Do Carro</Text>
              <Text style={{fontSize:15, color: white, textAlign: 'center', width: 250}}>Tudo que voce precisa saber para melhorar a vida util do seu carro</Text>
              <Pressable style={buttons.model_1} onPress={() => alert('OBD CONECTADO')}>
                <MaterialIcons name="wifi" size={24} color="green" />
                <Text style={{ fontSize: 15, color: grey, textAlign: 'center' }}>OBD CONECTADO</Text>
                <Pressable onPress={toggleView}>
                <AntDesign name="setting" size={24} color="black" />
                </Pressable>
              </Pressable>

            </View>

            <View style={background.widget}>
              <FlatList 
                data={[
                  { key: '1', text: 'Velocimetro', valor: velocidade + ' Km/h', icon: <Ionicons name="speedometer-outline" size={50} color="#631964" /> },
                  { key: '2', text: 'RPM', valor: rpm + ' RPM', icon: <MaterialCommunityIcons name="speedometer" size={50} color="#631964" /> },
                  { key: '3', text: 'Gasolina', valor: gasolina + "%", icon: <FontAwesome5 name="gas-pump" size={50} color="#631964" /> },
                  { key: '4', text: 'Temperatura', valor: temperatura + "ºC", icon: <FontAwesome5 name="temperature-high" size={50} color="#631964" /> },
                  
                ]}
                renderItem={({ item }) => (
                  <Pressable style={box.model_1} onPress={() => alert(item.text)}>
                    <Text >{item.icon}</Text>
                    <Text style={{position: 'absolute', left: 100}}>{item.text}:</Text>
                    <Text>{item.valor}</Text>
                  </Pressable>
                )}
                keyExtractor={(item) => item.key}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // Altura entre os itens
              />

            </View>

            

            <StatusBar style="auto" />
        </View>
    )
}
export default ObdPage;

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
      borderRadius: 25,
      backgroundColor: purple,
    },
    widget: {
      width: '99%',
      height: '58%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      top: 60,
      gap: 20,

      // backgroundColor: 'grey'
    }
  })

// Buttons
const buttons = StyleSheet.create({
  model_1: {
    width: '80%',
    height: 60,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    zIndex: 2,
    
    backgroundColor: white
  }
})

const box = StyleSheet.create({
  model_1: {
    width: 330,
    height: 100,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // gap:50,

    borderColor: 'black',
        borderRadius: 5,
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