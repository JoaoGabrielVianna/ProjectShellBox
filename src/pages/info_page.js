import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, FlatList, Image } from 'react-native';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

const InfoPage = ({ navigation }) => {


    return(
        <View style={styles.container}>
            <View style={background.yellow_background}>
                <Pressable style={icons.menu} onPress={() => navigation.navigate('HomePage')}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
        
            </View>

            <View style={background.purple_background}>
              <Text style={{fontSize:25, color: white, fontWeight: 'bold'}}>Informações do Grupo</Text>
              <Text style={{fontSize:15, color: white, textAlign: 'center', width: 250}}>Tudo que voce precisa saber sobre o nosso grupo</Text>
              

            </View>

            <View style={background.widget}>
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

            

            <StatusBar style="auto" />
        </View>
    )
}
export default InfoPage;

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

    
    backgroundColor: white
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