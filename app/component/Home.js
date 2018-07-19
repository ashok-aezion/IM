import React, { Component, PureComponent } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { CardViewWithImage } from 'react-native-simple-card-view'
// import CardView from 'react-native-cardview'
//import LinearGradient from 'react-native-linear-gradient';
import {
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    WebView,
    View,
    ScrollView
} from 'react-native';



export default class Home extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }
    render() {
        return (
            <ScrollView>
            <View style={styles.swipercontainer}>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    index={2}
                    showPagination
                >
                    <Image style={[styles.child]} source={require('../../html/assets/img/banner.png')} />
                    <Image style={[styles.child]} source={require('../../html/assets/img/banner.png')} />
                    <Image style={[styles.child]} source={require('../../html/assets/img/banner.png')} />
                </SwiperFlatList>

                <Text style={styles.textdesign}>Update</Text>


                <View style={styles.card}>
                    <View style={styles.imgcard}>
                        <Image style={styles.img} source={require('../../html/assets/img/avadar.jpg')} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 10 }}>
                        <Text style={styles.textdesign}>UserName</Text>
                        <Text style={{ paddingLeft: 10, fontSize: 12 }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Text>
                        <View style={{flex: 1, flexDirection: 'row',padding:10 }}>
                     <Image source={require('../../html/assets/img/like.png')}/>
                     <Text style={styles.socialalin}>Like</Text>

                        <Image style={styles.imgalin} source={require('../../html/assets/img/comment.png')}/>
                     <Text style={styles.socialalin}>Comment</Text>

                        <Image style={styles.imgalin} source={require('../../html/assets/img/share.png')}/>
                     <Text style={styles.socialalin}>Share</Text>

                         <Image style={styles.imgalin} source={require('../../html/assets/img/follow.png')}/>
                     <Text style={styles.socialalin}>Follower</Text>
                     
                    </View>              
                   
                    </View>     

                </View>

                 <View style={styles.card}>
                    <View style={styles.imgcard}>
                        <Image style={styles.img} source={require('../../html/assets/img/avadar.jpg')} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 10 }}>
                        <Text style={styles.textdesign}>UserName</Text>
                        <Text style={{ paddingLeft: 10, fontSize: 12 }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Text>
                        <View style={{ flexDirection: 'row', padding: 20,paddingLeft:10 }}>
                     <Image style={styles.imgalin} source={require('../../html/assets/img/like.png')}/>
                     <Text style={styles.socialalin}>Like</Text>

                        <Image style={styles.imgalin}  source={require('../../html/assets/img/comment.png')}/>
                     <Text style={styles.socialalin}>Comment</Text>

                        <Image style={styles.imgalin} source={require('../../html/assets/img/share.png')}/>
                     <Text style={styles.socialalin}>Share</Text>

                         <Image style={styles.imgalin} source={require('../../html/assets/img/follow.png')}/>
                     <Text style={styles.socialalin}>Follower</Text>
                     
                    </View>              
                   
                    </View>     

                </View>
               
            </View>
            </ScrollView>

        );
    }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',

    },
    imgalin:{marginLeft:6},
    socialalin:{
        paddingLeft:5,
        fontSize:12
    },
    textdesign: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        paddingLeft: 10,

    },
    swipercontainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    child: {
        height: height * 0.5,
        width,
        justifyContent: 'center',
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center',
    },

  
    header: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 20,
    },

    card: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        margin: 10,
        borderRadius: 6,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 100, height: 50 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 3,

    },
    img: {
        borderRadius: 100,
        width: 65,
        height: 65,
    },
    imgcard: {
        backgroundColor: '#f5f5f5',

        borderColor: '#ddd',
        top: 18,
        shadowColor: '#000',
        shadowOffset: { width: 100, height: 50 },
        shadowOpacity: 1,
        shadowRadius: 1,
        borderRadius: 100,
        width: 65,
        height: 65,
        elevation: 4,
    }

});

