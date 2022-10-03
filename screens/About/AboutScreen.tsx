import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Image, Dimensions, Button } from 'react-native';
import { ALERT_TYPE, Root, Toast } from 'react-native-alert-notification';
import Header from '../components/MenuHeader';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";


export default function AboutScreen({ navigation }: any) {

  
  return (
    <Root>
      
    <View style={styles.container}>
        <Header menuItems={null} backgroundColor={'#F4D84F'} hasBack ={true} hasMenu={false} textColor='white' key={1} navigation={navigation} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F4D84F', marginTop: 50}}>
          <Image style={{width: Dimensions.get('screen').width / 2 , height : Dimensions.get('screen').width / 2}} source={require('./../../assets/images/logo.png')} />
        </View>
        <View style={styles.logo}>
          <View>
            
            <Text style={styles.text}>www.caspianlight.com</Text>
          </View>
          <Button
            title={'toast notification'}
            onPress={() =>
              Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Success',
                textBody: 'Congrats! this is toast notification success',
              })
            }
          />
          <Button
            onPress={() => {
              /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
              showMessage({
                message: "Simple message",
                type: "success",
              });
            }}
            title="Request Details"
            color="#841584"
          />
        </View>
        <View style={styles.space}></View>
    </View>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4D84F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },

  space: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  text: {
    color: '#699BF7',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});