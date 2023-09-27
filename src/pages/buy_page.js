import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, FlatList, Image } from 'react-native';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const BuyPage = ({ navigation }) => {


    return(
        <View style={styles.container}>
            <View style={background.yellow_background}>
                <Pressable style={icons.menu} onPress={() => navigation.navigate('HomePage')}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>

                <Text style={{fontSize:25, color: grey, fontWeight: 'bold'}}>PAGUE PELO APP</Text>
        
            </View>

            <View style={background.purple_background}>
              <Image source={require('../../assets/icon.png')} style={{width:60, height: 60}}/>
              <Text style={{fontSize:7, color: white, fontWeight: 'bold'}}>CÓDIGO DE PAGAMENTO</Text>
              <Text style={{fontSize:10, color: yellow, fontWeight: 'bold'}}>123 321</Text>
              <Text style={{fontSize:15, color: white, fontWeight: 'bold'}}>DIGITE O CÓDIGO DE PAGAMENTO</Text>
              <TextInput style={{width: '70%', height: 50, backgroundColor: white, fontSize: 50, color: yellow, fontWeight: 'bold', textAlign: 'center'}}
              keyboardType="phone-pad"
              maxLength={6}/>
              
              

            </View>

            <View style={background.widget}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <FontAwesome5 name="money-bill-wave" size={24} color="green" />
                <Text>DINHEIRO</Text>
                <AntDesign name="down" size={24} color="black" />
              </View>
            </View>

            

            <StatusBar style="auto" />
        </View>
    )
}
export default BuyPage;

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
      justifyContent: 'center',
      paddingTop: 50,
      backgroundColor: yellow,
    },
    purple_background: {
      width: '90%',
      height: 230,
      top: 100,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      borderRadius: 25,
      backgroundColor: purple,
    },
    widget: {
      width: '99%',
      height: '58%',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      
      top: 100,
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