import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import * as Progress from 'react-native-progress';


export default function WelcomeScreen ({ navigation }: any) {

  const [btnStyle, setBtnStyle] = React.useState(styles.btn);

  React.useEffect(() => {console.log("ddd", navigation);
  })
  const goToHome = () => {

    console.log("welcome");
    
    setBtnStyle(styles.btnClicked);
    navigation.navigate('Home');

  }
  
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={{width: '100%', aspectRatio: 1.8}} source={require('./../../assets/images/darkbgheader.png')} />
        </View>
        <View style={styles.logo}>
          <Image style={{width: '70%', aspectRatio: 1}} source={require('./../../assets/images/WifiLogo.png')} />
        </View>
        <View style={styles.logo}>
          <Text style={styles.text}>Hello</Text>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <View style={styles.space}>
          <Pressable style={btnStyle} onPress={() => {goToHome()}}>
            <Text style={styles.text}>Lets go</Text>
          </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(24, 24, 24, 0.98)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    flex: 2,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  space: {
    flex: 1.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  
  btn: {
    backgroundColor: 'rgba(84, 81, 67, 0.49)',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: '70%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },

  btnClicked: {
    backgroundColor: '#F4D84F',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: '70%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  }
});