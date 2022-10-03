import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Image, Dimensions, Button, ScrollView } from 'react-native';
import Header from '../components/MenuHeader';


const wd = Dimensions.get("screen").width;

type menuItems = {
    tittle: string,
    (func: void) : void 
         
}

export default function DevicesScreen({ navigation }: any) {

    const multiSelect = () => {}
    const selectAll = () => {}
    const goToCreate = () => navigation.navigate('Create')
    const [isSelected, setIsSelected] = React.useState(true);
    const [data, setData] = React.useState([
        {id: 0, isSelected: false, color: 25},
        {id: 0, isSelected: false, color: 25},
        {id: 0, isSelected: false, color: 25},
        {id: 0, isSelected: false, color: 25},
        {id: 0, isSelected: true, color: 25}]);
    return (
        <View style={{flex: 1, backgroundColor: '#F4D84F'}}>
            <Header menuItems={[{tittle: 'multi select', f : multiSelect}, {tittle: 'select all', f : selectAll}]} backgroundColor={'#F4D84F'} hasBack ={true} hasMenu={true} textColor='white' key={1} navigation={navigation} />
            <View style={{flex: 5}}>
                <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>

                    {data.map((item, index) => {return <View key={index} style={[styles.item, item.isSelected === true ? styles.selected : null]}>
                        <Text style={{position: 'absolute', top: 1, left: 10, color: '#9F9F9F', fontSize: 20, fontWeight: '800'}}>{item.id}</Text>
                        <View style={{flex: 1, flexWrap: 'wrap'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}><Text style={{fontSize: 35}}><Image source={require('./../../assets/images/sun.png')}></Image></Text></View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}><Text style={{color: '#ffffff', fontSize: 20, fontWeight: '800'}}>{item.color}</Text></View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}><Text style={{color: '#5F5C5C', fontSize: 20, fontWeight: '800'}}>yellow</Text></View>
                        </View>
                        {item.isSelected === true ? <Image style={{position: 'absolute', bottom: 0, right: 0}} source={require('./../../assets/images/check.png')}></Image> : null}
                    </View>})}
                    
                    <View style={styles.itemForCreate}>
                        <Pressable onPress={goToCreate}><Image source={require('./../../assets/images/plusCreate.png')}></Image></Pressable>
                    </View>
                </ScrollView>
                
            </View>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.1)', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>{isSelected === true ? <Pressable onPress={() => {}}><Image source={require('./../../assets/images/powerLittle.png')} /></Pressable> : <Pressable onPress={() => {}}><Image source={require('./../../assets/images/plus.png')} /></Pressable> }</View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>{isSelected === true ? <Pressable onPress={() => {}}><Text style={{fontSize: 20, fontWeight: '800'}}><Text>{data.filter(item => item.isSelected == true).length} </Text><Text>selected</Text></Text></Pressable> : <Pressable onPress={() => {}}><Image source={require('./../../assets/images/powerLittle.png')} /></Pressable>}</View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>{isSelected === true ? <Pressable onPress={() => {}}><Image source={require('./../../assets/images/bin.png')} /></Pressable> : <Image source={require('./../../assets/images/userBold.png')}/>}</View>
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center', // if you want to fill rows left to right
      backgroundColor: '#F4D84F',
      justifyContent: 'center'
   
    },

    item: {
      width: wd / 3, // is 50% of container width
      backgroundColor: '#343434',
      height: wd / 3,
      margin: 10,
      borderRadius: 10,
      
    },

    selected: {
        borderWidth: 5,
        borderColor: '#276DED'
    },

    itemForCreate: {
        width: wd / 3, // is 50% of container width
        height: wd / 3,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
  })