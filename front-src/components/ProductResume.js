/*ProductResume é utilizado para mostrar uma caixa com um único produto, contendo os seguintes itens:
- imagem;
- Nome do produto;
- Quantidade;
- Botão de comprar.
*/

import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

//
const ProductResume = ({product})=>{
    return (
        <View>
            {/*image*/}
            <Image 
                source={product.imageSource}
            />
            {/*title*/}
            <Text> {product.title} </Text> 
            
            
            {/*price*/}
            <Text> {product.price} </Text>
            <Text>Quantidade: </Text>
            <Text>Colocar no carrinho</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontsize: 20
    }

});

export default ProductResume;
