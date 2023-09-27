import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, FlatList, Image } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const PlanoPage = ({ navigation }) => {


    return(
        <View style={styles.container}>
            <View style={background.background}>
                <Pressable style={icons.menu} onPress={() => navigation.navigate('HomePage')}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
        
                <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: -10}}>PLANOS</Text>

                <View style={{width:'90%', height: 200, backgroundColor: purple, zIndex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{width: '80%',color: white, textAlign: 'center', fontSize: 17}}>
                  Plano Veículo Premium - Carro:

                  Preço Mensal: R$ 69,99

                  Vantagens:
                  * Trocas de óleo
                  * Relatórios de Manutenção Detalhados
                  * direito a lavagens mensais
                  * Suporte Técnico 24/7
                  </Text>
                </View>
                <View style={{width:'90%', height: 200, backgroundColor: purple, zIndex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{width: '80%',color: white, textAlign: 'center', fontSize: 17}}>
                  Plano Frota Pro - Ônibus:

                  Preço Mensal: R$ 149,99

                  Vantagens:

                  * Suporte Técnico 24/7
                  * Relatórios de Manutenção Detalhados
                  * Relatórios de Desempenho
                  * direito a lavagens mensais

                    </Text>
                </View>
                <View style={{width:'90%', height: 200, backgroundColor: purple, zIndex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{width: '80%',color: white, textAlign: 'center', fontSize: 17}}>
                  Plano Moto Segura - Moto:

                  Preço Mensal: R$ 39,99

                  Vantagens:

                  * Trocas de óleo
                  * Alertas de Velocidade 
                  * Suporte Técnico Especializado
                  * direito a lavagens mensais
                    </Text>
                </View>
            </View>

            

            <StatusBar style="auto" />
            
        </View>
    )
}
export default PlanoPage;

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
    background: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      paddingTop: 80,
      gap: 40,
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