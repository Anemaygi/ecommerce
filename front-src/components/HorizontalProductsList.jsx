import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ProductResume from './ProductResume';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_700Bold, Poppins_700Bold_Italic } from '@expo-google-fonts/poppins';
//import ProductResume from './ProductResume';

//futuro argumento: , productList
const HorizontalProductsList = ({title, productList})=>{
    //console.log(product.title);
    return (
        <View>
            <Text style ={styles.textHeaderStyle}> {title} </Text>
            <FlatList
                horizontal // It's the same to: horizontal = {true}
                showsHorizontalScrollIndicator={false}
                data = {productList}
                keyExtractor={product => product.title}
                renderItem={({ item }) =>{ 
                    return (
                        <View>
                            <ProductResume
                                product = {item}
                                //navigation={navigation}
                            />
                        </View>
                        
                    );
                }}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    textHeaderStyle: {
        fontFamily: 'Poppins_700Bold',
        //fontStyle: 'normal',
        //fontWeight: '700',
        fontSize: 25,
        padding:10,
        marginTop: 10
    }
});

export default HorizontalProductsList;