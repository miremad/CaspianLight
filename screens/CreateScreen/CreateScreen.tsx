import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Image, Slider } from 'react-native';
import Header from '../components/MenuHeader';

export default function CreateScreen({ navigation }: any) {

    const createAction = () => {}

    return (
    <View style={styles.container}>
        <Header menuItems={null} backgroundColor={'#F4D84F'} hasBack ={true} hasMenu={false} textColor='white' key={1} navigation={navigation} />
        <View style={{flex: 5, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <View style={styles.createBox}>
                <View style={styles.idBox}>
                    <Text style={{color: 'white', flex: 1}}>Lamp: </Text><View style={{flex: 4}}><View style={{width: 30, height: 30,  borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.46)'}}><Text style={{fontSize: 15, fontWeight: '700'}}>1</Text></View></View>
                </View>
                <View style={styles.controllBox}>
                    <View style={{flex: 4, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={styles.powerBtnImg} source={require('./../../assets/images/PowerCreate.png')} />
                    </View>
                    <View style={{flex: 2, width: '100%'}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                            <View style={styles.sliderBox}>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}><Text><Text style={{color: '#999999', fontWeight: '800'}}>Color: </Text><Text style={{color: '#000000', fontWeight: '800'}}>0% </Text></Text></View>
                                    <Slider
                                        style={{flex: 3.5}}
                                        minimumValue={0}
                                        maximumValue={1}
                                        minimumTrackTintColor="#494949"
                                        maximumTrackTintColor="#979797"
                                        thumbTintColor="#494949"
                                        value={.5}
                                        onValueChange={value => {}}
                                    />
                                    <View style={{flex:1, justifyContent: 'center'}}><Text style={{color: '#000000', fontWeight: '800'}}> 100%</Text></View>
                            </View>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                            <View style={styles.sliderBox}>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}><Text><Text style={{color: '#999999', fontWeight: '800'}}>Power: </Text><Text style={{color: '#000000', fontWeight: '800'}}>0% </Text></Text></View>
                                        <Slider
                                            style={{flex: 3.5}}
                                            minimumValue={0}
                                            maximumValue={1}
                                            minimumTrackTintColor="#494949"
                                            maximumTrackTintColor="#979797"
                                            thumbTintColor="#494949"
                                            value={.5}
                                            onValueChange={value => {}}
                                        />
                                        <View style={{flex:1}}><Text style={{color: '#000000', fontWeight: '800'}}> 100%</Text></View>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <View style={styles.createBtnBox}>
                    <Pressable style={styles.createBtn} onPress={createAction}>
                        <Text style={styles.btnText}><Text>+ </Text><Text>Create</Text></Text>
                    </Pressable>
                </View>
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.1)', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Pressable onPress={() => {}}><Image source={require('./../../assets/images/plus.png')} /></Pressable></View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Pressable onPress={() => {}}><Image source={require('./../../assets/images/powerLittle.png')} /></Pressable></View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Pressable onPress={() => {}}><Image source={require('./../../assets/images/user.png')} /></Pressable></View>
            
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      alignItems: 'center', // if you want to fill rows left to right
      backgroundColor: '#F4D84F',
      justifyContent: 'center'
   
    },

    createBox: {

        flex: 1,
        borderRadius:15,
        backgroundColor: '#2C2C2C',
        width: '85%',
        height: '90%'
    },
    
    idBox: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    controllBox: {
        flex: 4,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.11)',
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    createBtnBox: {
        flex: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    createBtn: {
        width: '40%',
        height: '50%',
        borderColor: '#F4D84F',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },

    powerBtnImg: {
        width: '40%',
        aspectRatio: 1
    },

    sliderBox: {
        width: '85%',
        height: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.64)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
        
    }



})