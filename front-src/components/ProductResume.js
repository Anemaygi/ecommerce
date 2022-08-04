/*ProductResume é utilizado para mostrar uma caixa com um único produto, contendo os seguintes itens:
- imagem;
- Nome do produto;
- Quantidade;
- Botão de comprar.
*/

import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

//
const ProductResume = ({title, price, imageSource})=>{
    return (
        <View>
            {/*title*/}
            <Text>Product Resume {title} </Text> 
            {/*image*/}
            <Image 
                source={imageSource}
            />
            
            {/*price*/}
            <Text> {price} </Text>
            <Text>Quantidade: </Text>
            <Text>Colocar no carrinho</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontsize: 15
    }

});

export default ProductResume;
