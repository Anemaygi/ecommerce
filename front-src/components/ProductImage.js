import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

const ProductImage = ({product, navigation})=>{
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('ProductPage', {product})}>
            <Image 
                style = {styles.imageStyle}
                source = {product.imageSource}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    },
    imageStyle:{
        height:200,
        resizeMode: 'contain'
    },
})

export default withNavigation(ProductImage);