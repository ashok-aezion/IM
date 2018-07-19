import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements';
import TabBar from 'react-native-nav-tabbar';
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



export default class Mainmenu extends Component {
  render() {
    return (

      <ImageBackground
        style={{
          width: '100%',
          height: '100%'
        }}
        source={require('../../html/assets/img/splash.png')}>


        <TabBar>
          <TabBar.Item
            icon={require('../../html/assets/img/home.png')}

            title="Home"
          >
            <View >
              <Text style={{ fontSize: 18 }}>Home</Text>
            </View>
          </TabBar.Item>
          <TabBar.Item>
            <View >
              <Text style={{ fontSize: 18 }}>Friends</Text>
            </View>
          </TabBar.Item>
          <TabBar.Item
            icon={require('../../html/assets/img/menu.png')}

            title="Menu"
          >
            <View style={styles.flexstylecolumn} >
              <View style={styles.flexstylerow} >
                <TouchableOpacity>
                  <View style={styles.menuview}>
                    <Image style={styles.img} source={require('../../html/assets/img/easy-prayer.png')} />
                    </View>
                  <Text style={styles.menutext}>Easy-prayer</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.menuview}>
                    <Image style={styles.img} source={require('../../html/assets/img/my-mosque.png')} />
                  </View>
                  <Text style={styles.menutext}>My Mosque</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.menuview}>
                    <Image style={styles.img} source={require('../../html/assets/img/quran.png')} />
                  </View>
                  <Text style={styles.menutext}>Quran</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.menuview}>
                    <Image style={styles.img} source={require('../../html/assets/img/donation.png')} />
                  </View>
                  <Text style={styles.menutext}>Donation</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.flexstylerow} >

                <TouchableOpacity>
                  <View style={styles.menuview}>
                    <Image style={styles.img} source={require('../../html/assets/img/social-hub.png')} />
                  </View>
                  <Text style={styles.menutext}>Social-Hub</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.menuview}>
                    <Image style={styles.img} source={require('../../html/assets/img/e-cart.png')} />
                  </View>
                  <Text style={styles.menutext}>E-Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.menuview}>
                    <Image style={styles.img} source={require('../../html/assets/img/halal-places.png')} />
                  </View>
                  <Text style={styles.menutext}>Halal-places</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.menuview}>
                    <Image style={styles.img} source={require('../../html/assets/img/user-profile.png')} />
                  </View>
                  <Text style={styles.menutext}>User-Profile</Text>
                </TouchableOpacity>
              </View>
            </View>

          </TabBar.Item>

        </TabBar>

      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },

  flexstylerow: {

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginBottom: 25

  },

  flexstylecolumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',

  },

  menuview:{
    width: 80,
    height: 80, 
    backgroundColor: '#02C79A', 
    marginRight: 5 
  },

  menutext:{
    color: '#fff', 
    fontSize: 14 ,
    textAlign:'center'
  },

  img: {
    margin: 15,
    marginTop: 15,
  },

  title: {
    fontSize: 15,
    color: '#000',
    alignSelf: 'center',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
    backgroundColor: '#f9e20c',
    borderRadius: 4,
    marginTop: 50
  },

  header: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
  },
  textinput: {
    marginRight: 10,
    margin: 10,
    color: '#000',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,

  },
  btntext: {
    fontSize: 18,
    color: '#000',
    margin: 25,
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'stretch',
  },
  infotext: {
    fontSize: 16,
    color: '#000',
    margin: 25,
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'stretch',
  },
  sub: {
    marginTop: 20,
    backgroundColor: '#f9e20c',
    color: '#000'
  },
  cnu: {

    fontSize: 16,
    padding: 10,
    alignItems: 'center',

    fontWeight: 'bold',
    backgroundColor: '#02C79A',
    textAlign: 'center',


  },
  njv: {

    fontSize: 16,
    alignItems: 'center',
    padding: 10,

    fontWeight: 'bold',
    backgroundColor: '#F18200',
    textAlign: 'center',

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

