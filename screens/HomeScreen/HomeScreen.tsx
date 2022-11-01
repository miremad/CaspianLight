import * as React from 'react';
import { View, Image, StyleSheet, Pressable, Text, Dimensions, Button, Slider } from 'react-native';
import Header from '../components/MenuHeader';
import FlashMessage, { showMessage, MessageType } from "react-native-flash-message";
import dgram from 'react-native-udp'
import {NetworkInfo} from 'react-native-network-info';

const wd = Dimensions.get('screen').width;
const ht = Dimensions.get('screen').height;
const socket = dgram.createSocket({type: 'udp4', debug: true, reusePort: undefined});
socket.bind(5555);

export default function HomeScreen({ navigation }: any) {

  const [backgroundColor, setBackgroundColor] = React.useState('#F4D84F');
  const [power, setPower] = React.useState(true);
  const [pValue, setPValue] = React.useState(50);
  const [CValue, setCValue] = React.useState(50);
  const [isWifiOk, setIsWifiOk] = React.useState<boolean | undefined>(undefined);
  const port = 12345;
  const ip = "172.16.16.204";

  const togglePower = () => {
    setPower(x => !x)
    socket.send('R1on', undefined, undefined, port, ip, function(err) {
      if (err) console.log("error", err);
    })
  }

  const showAlert = (type: MessageType) => {
    if(type === 'success')
      showMessage({message: "wifi is connected",type: "success"});
    else if(type === 'danger')
      showMessage({message: "check your device's wifi",type: "danger"});
  }

  function iskWifiOk(): void {
    
    NetworkInfo.getSSID().then(ssid => {
      console.log("ssid : ", ssid);
      
      if(ssid == "AndroidWifi")
      {
        setIsWifiOk(true)
      }
      else {
        setIsWifiOk(false)
      }
    })
    
  }
  
  const goToCreateScreem = () => {navigation.navigate('Create')}
  const goToDevicesScreem = () => {navigation.navigate('Devices')}
  const goToAbout = () => {navigation.navigate('About');}
  const reset = () => {}

  React.useEffect(() => {
   
    iskWifiOk()
  })

  React.useEffect(() => {
    if(isWifiOk === true)
    {
      showAlert('success');
    }
    else if(isWifiOk === false)
    {
      showAlert('danger')
    }
  }, [isWifiOk])

  React.useEffect(() => {
    if(power === true)
    {
      setBackgroundColor('#F4D84F')
    }
    else
    {
      setBackgroundColor('#1D1D1D')
    }
  }, [power])

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlashMessage position="top" /> 
      <Header menuItems={[{tittle: 'reset', f: reset}, {tittle: 'about', f: goToAbout}]} backgroundColor={backgroundColor} hasBack ={false} hasMenu={true} textColor='white' key={1} navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColor, alignSelf: 'stretch' }}>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.lampImage} source={require('./../../assets/images/lamp.png')}></Image>
        </View>
        <View style={{flex: 2 }}>
          
          {power === true ? <Pressable onPress={togglePower}>
                              <Image 
                                style={{width: 150, height: 150, resizeMode: 'center'}} 
                                source={require('./../../assets/images/lightPower.png')}
                                ></Image>
                              </Pressable> : 
                              <Pressable onPress={togglePower}>
                              <Image 
                                style={{width: 150, height: 150, resizeMode: 'center'}} 
                                source={require('./../../assets/images/darkPower.png')}
                                ></Image>
                              </Pressable>
                              }
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {power === true ? 
          <>
            <View style={{ flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.43)', borderRadius: 10, padding: 5, flex: 1, margin: 10}}>
              <View style={{flex: 1, justifyContent: 'center'}}><Text><Text style={{color: '#999999', fontWeight: '800'}}>Color: </Text><Text style={{color: '#000000', fontWeight: '800'}}>0% </Text></Text></View>
              <Slider
                style={{flex: 3}}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#494949"
                maximumTrackTintColor="#979797"
                thumbTintColor="#494949"
                value={CValue}
                onSlidingComplete={value => {setCValue(Number(value.toString().split('.')[0]))}}
              />
                  <View style={{flex:1, justifyContent: 'center'}}><Text style={{color: '#000000', fontWeight: '800'}}> {CValue + "%"}</Text></View>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.43)', borderRadius: 10, padding: 5, flex: 1, margin: 10}}>
              <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}><Text><Text style={{color: '#999999', fontWeight: '800'}}>Power: </Text><Text style={{color: '#000000', fontWeight: '800'}}>0% </Text></Text></View>
              <Slider
                style={{flex: 3}}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#494949"
                maximumTrackTintColor="#979797"
                thumbTintColor="#494949"
                value={pValue}
                onSlidingComplete={value => setPValue(Number(value.toString().split('.')[0]))}
                
              />
                  <View style={{flex:1, justifyContent: 'center'}}><Text style={{color: '#000000', fontWeight: '800'}}> {pValue + "%"}</Text></View>
            </View>
          </>
          : <></>}
          
        </View>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.1)', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Pressable onPress={goToCreateScreem}><Image source={require('./../../assets/images/plus.png')} /></Pressable></View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Pressable onPress={togglePower}><Image source={require('./../../assets/images/powerLittle.png')} /></Pressable></View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Pressable onPress={goToDevicesScreem}><Image source={require('./../../assets/images/user.png')} /></Pressable></View>
            
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lampImage: {
    width:  '50%',
    height: 8 * wd / 10,
    resizeMode: 'stretch',
    position: 'absolute',
    top: ht / -5,
  }

})