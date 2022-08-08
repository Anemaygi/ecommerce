import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AddToCart from '../components/AddToCart';
import AmountItemInput from '../components/AmountItemInput';
import ProductImage from '../components/ProductImage';

const ProductScreen = ({navigation})=>{
    const product = navigation.getParam('product');
    return(
        <View>
            <Image 
                source = {product.imageSource}
            />

            <Text>{product.title} </Text>
            <Text>{product.description} </Text>
            <Text>{product.price} </Text>
            <AmountItemInput/>
            <AddToCart/>
        </View>
    )
}

const styles = StyleSheet.create({
    styleText:{
        fontSize: 30
    } 
})

export default ProductScreen;