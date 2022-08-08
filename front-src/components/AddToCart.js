import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const AddToCart = ()=>{
    return(
        <View style = {styles.addToCartStyle}>
            <Text style = {styles.textStyle}>Colocar no carrinho</Text>
            <FontAwesome name="shopping-cart" size={35} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    addToCartStyle: {
        marginTop: 12, 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    textStyle:{
        fontSize:20, 
        textAlignVertical: 'center'
    }
})

export default AddToCart;
