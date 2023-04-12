import { StatusBar } from 'expo-status-bar';
import {react, useState} from 'react'
import { StyleSheet, Text, View , TextInput, TouchableOpacity,keyboardType, Alert} from 'react-native';

export default function App() {

  const [result , setResult] = useState(0)
  const [value_one,setValue_one] = useState(0);
  const [value_two,setValue_two] = useState(0);

  function count(){

    let n1 = value_one
    let n2 = value_two

    var total = (n1/n2);
    var arredondado = parseFloat(total.toFixed(2));
    
    if(total < 0.7){
      setResult(`${arredondado} a Recomendação é encher com álcool`)
    }else{
      setResult(`${arredondado} a Recomendação é encher com gasolina`)
    }
    
  }
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Calculo de Gasto Gasolina e Álcool</Text>
      <Text style={styles.responseI}>{result}</Text>

      <TextInput
        placeholder= 'Valor álcool' 
        value={value_one}
        keyboardType="numeric"
        onChangeText={e =>setValue_one(e)}
        style={styles.input}
      ></TextInput>
    
      <TextInput
        placeholder= 'Valor da gasolina' 
        value={value_two}
        keyboardType="numeric"
        onChangeText={e =>setValue_two(e)}
        style={styles.input}
      ></TextInput>

      <TouchableOpacity 
      onPress={count}><Text 
      style={styles.entrar}
      keyboardType="numeric"
      >Calculo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  input:{
      width:"85%",
      height:35,
      fontSize:15,
      borderColor:"black",
      borderWidth:1,
      borderRadius:5,
      margin: 5,
  },
  text:{
    marginBottom:'50%',
    backgroundColor: 'blue',
    color: 'white',
    textAlign : 'center',
    height: 70,
    width:300,
    fontSize : 25,
    borderRadius:9
  } ,

  responseI:{
    marginBottom: 10,
    backgroundColor: 'black',
    color: 'white',
    textAlign : 'center',
    height: 70,
    width:300,
    fontSize : 25,
  },
  entrar:{
      backgroundColor : "#5271ff",
      fontSize : 25,
      width : 150,
      height : 40,
      textAlign : 'center',
      borderRadius : 30,
      color : 'white',
      marginTop : 50,
  },
});
