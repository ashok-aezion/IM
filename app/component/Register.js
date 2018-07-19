import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

export default class Register extends Component {
    render() {
      return (
        <ImageBackground
        style={{
          width: '100%',
         height: '100%'          
        }}
        source={require('../../html/assets/img/splash.png')}>
        <ScrollView>
        <View style={styles.container}>          
            <TextInput style={styles.textinput} placeholder="Official Register Name" underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textinput} placeholder="Address" />
            <TextInput style={styles.textinput} placeholder="Postal Code" />
            <TextInput style={styles.textinput} placeholder="Country" />
            <TextInput style={styles.textinput} placeholder="Phone" />
            <TextInput style={styles.textinput} placeholder="Email" />
            <TextInput style={styles.textinput} placeholder="Contact Person" />
            <TextInput style={styles.textinput} placeholder="User Name" />
            <TextInput style={styles.textinput} placeholder="Password"  secureTextEntry={true} />
            <Text style={styles.opt}>(Optional)</Text>
            <TextInput style={styles.textinput} placeholder="Alternate email" />
            <TextInput style={styles.textinput} placeholder="Alternate contact person" />
            <TextInput style={styles.textinput} placeholder="Website URL" />
            <Button buttonStyle={styles.sub} title="Proceed"  />
        </View>
        </ScrollView>
        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      alignSelf:'stretch'
    },
    header: {
      fontSize: 24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#199187',
      borderBottomWidth: 1
    },
    opt:{
      fontSize: 18,
      color: '#000',
      margin:15,
    },
    sub:{
      marginTop:20,
      backgroundColor: '#f9e20c',
      color: '#000'
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
    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,    
    },
    logintext:{
        color: '#fff',
        fontSize: 24,
        fontWeight:'bold'
    },
    btntext:{
        color: '#fff',
        fontSize: 20,
        fontWeight:'bold'
    }
  });