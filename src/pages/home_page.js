import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View} from 'react-native';
import { AntDesign, Entypo, SimpleLineIcons, EvilIcons, MaterialIcons } from '@expo/vector-icons';

const HomePage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={background.yellow_background}>
        <Pressable style={icons.menu} onPress={() => alert('Em construção...')}>
          <Entypo name="menu" size={25} color="black"  />
        </Pressable>
        
        <Pressable style={icons.questioncircleo} onPress={() => navigation.navigate('InfoPage') }>
          <AntDesign name="questioncircleo" size={25} color="black" />
        </Pressable>
        
        <Pressable style={icons.bell} onPress={() => navigation.navigate('AlertPage')}>
          <SimpleLineIcons name="bell" size={24} color="black" />
        </Pressable>
        
      </View>

      <View style={background.purple_background}>
        <Text style={{fontSize:25, color: white, fontWeight: 'bold'}}>Pague e ganhe</Text>
        <Text style={{fontSize:15, color: white, textAlign: 'center', width: 200}}>Acumule pontos que valem descontos ou milhas Smiles</Text>
        <Pressable style={buttons.model_1} onPress={() => navigation.navigate('BuyPage')}>
          <MaterialIcons name="attach-money" size={24} color="green" />
            <Text style={{ fontSize: 15, color: grey, textAlign: 'center' }}>Digite para pagar</Text>
        </Pressable>

      </View>

      <View style={background.widget}>
        <Text style={{fontSize:25, color: grey, fontWeight: 'bold'}}>RESGATE DE PONTOS</Text>
        <Pressable style={box.model_1} onPress={() => navigation.navigate('PontosPage')}>
          <View>
            <View style={{flexDirection: 'row', gap:20}}>
              <SimpleLineIcons name="trophy" size={24} color="#631964" />
              <Text style={{fontSize:20, color: purple, fontWeight: 'bold', textAlign: 'center'}}>100 PONTOS</Text>
            </View>
            
            <Text>Pague pelo app e junte pontos</Text>
          </View>

          <AntDesign name="right" size={24} color="black" />
          
        </Pressable>

        <View style={{flexDirection: 'row', justifyContent:'center', gap:25}}>
          <Pressable style={box.model_2} onPress={() => navigation.navigate('ObdPage')}>
            <View style={{alignItems: 'center', gap:1}}>
              <EvilIcons name="gear" size={80} color="#631964" style={{height:70}}/>
              <Text style={{fontSize: 20, color: grey}}>OBD</Text>
            </View>
          </Pressable>

          <Pressable style={box.model_2} onPress={() => navigation.navigate('PlanoPage')}>
            <View style={{alignItems: 'center', gap:10}}>
            <MaterialIcons name="storefront" size={60} color="#631964" />
              <Text style={{fontSize: 20, color: grey}}>PLANO</Text>
            </View>
          </Pressable>
        </View>
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}
export default HomePage;

// Cores
const yellow = "#fdcf0f"
const purple = "#631964"
const white = "#f6f6f6"
const grey = "#393939"

// Constantes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'start',
  },
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
    width: '90%',
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