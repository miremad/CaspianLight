import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions, Image } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


type menuItems = {
    tittle: string,
    f : Function 
         
}

type prop = {
    menuItems: Array<menuItems> | null,
    hasMenu: boolean,
    hasBack: boolean,
    backgroundColor: string,
    navigation: any,
    textColor: string

}
export default function Header( props: prop) {

    React.useEffect(() => {
        console.log(props);
        
    })

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);
  
    const showMenu = () => setVisible(true);
    const goBack = () => {
        props.navigation.goBack();
    }

    const goToAbout = () => {
        console.log("About");
        
        props.navigation.navigate('About');
    }

    return (
        <View style={{ flexDirection: 'row', width: '100%', height: Dimensions.get('window').height / 12, backgroundColor: props.backgroundColor }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    props.hasBack ? <Pressable onPress={goBack}>
                                        <Text style={{color: props.textColor}}><Image source={require('./../../assets/images/back.png')}></Image></Text>
                                    </Pressable> : <></>
                }
                
            </View>
        
            <View style={{flex: 2}}></View>

            <View style={{flex: 1, alignItems: 'center'}}>
                {
                    props.hasMenu ? <Menu
                                        visible={visible}
                                        anchor={<Pressable onPress={showMenu}><Image  style={{height: 4, width: 15, resizeMode: 'stretch', marginTop: 35}} source={require('./../../assets/images/menu.png')}></Image></Pressable>}
                                        onRequestClose={hideMenu}
                                    >
                                        {props.menuItems?.map((item, index) => 
                                            <MenuItem key={index} onPress={() => {item.f()}}>{item.tittle}</MenuItem> 
                                        )}
                                        
                                    </Menu> : <></>
                }   
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
      backgroundColor: '#ecf0f1',
    },

    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '900'
    }
  });
  