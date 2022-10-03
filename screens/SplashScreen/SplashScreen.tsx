import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import * as Progress from 'react-native-progress';


export default function SplashScreen({ navigation }: any) {

  const [process, setProcess] = React.useState(0);

  const incrementProcess = () => {
    setTimeout(() => {
      setProcess(x => x+ 0.01)
    }, 15)
    
  }

  React.useEffect(() => {
    
    if(process < 1)
    {
      incrementProcess();
    }
    else {
     
      navigation.navigate('Welcome');
    }
  }, [process])
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
          
          <Image style={{width: '100%', aspectRatio: 1.8}} source={require('./../../assets/images/darkbgheader.png')} />
        </View>
        <View style={styles.logo}>
          <Image style={{width: '70%', aspectRatio: 1}} source={require('./../../assets/images/logo.png')} />
        </View>
        <View style={styles.logo}>
          <View style={{paddingBottom: 25}}>
            <Text style={styles.text}>Caspian Noor</Text>
          </View>
          <Progress.Bar
            progress={process} 
            width={200}
            color={'#F4D84F'}
            borderColor={'rgba(100, 255, 255, 1)'}
          />
        </View>
        <View style={styles.space}></View>
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
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  space: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});