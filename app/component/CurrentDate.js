import React, { Component } from 'react';
 import { Button } from 'react-native-elements';
 import {ButtonGroup} from 'react-native-elements';
 import { Home } from './Home'
//import LinearGradient from 'react-native-linear-gradient';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  WebView,
  View
} from 'react-native';


export default class CurrentDate extends Component {
  static navigationOptions = {
    header: null
}

  render() {
    return (
      <View style={styles.container}>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf:'stretch',
    
  },
  

  title: {
    fontSize: 15,
    color: '#000',
    alignSelf: 'center',
    padding: 5,
    paddingLeft:15,
    paddingRight:15,
    marginBottom: 20,
    backgroundColor: '#f9e20c',
    borderRadius: 4,
    marginTop:50
  },
  
  header: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
  },
  textinput: {
    marginRight:10,
    margin:10,
    color: '#000',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    
  },
  btntext: {
    fontSize: 18,
    color: '#000',
    margin:25,
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'stretch',
  },
  sub:{
    marginTop:20, 
    backgroundColor: '#f9e20c',
    color: '#000'
  },
  cnu: {
    
    fontSize: 16,
    padding: 10,
    alignItems:'center',
    
    fontWeight: 'bold',
    backgroundColor: '#02C79A',
    textAlign:'center',
   
    
  },
  njv: {
    
    fontSize: 16,
    alignItems:'center',
    padding: 10,
    
    fontWeight: 'bold',
    backgroundColor: '#F18200',
    textAlign:'center',
   
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  WebViewStyle:
    {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: (Platform.OS) === 'ios' ? 20 : 0
    }

});

    