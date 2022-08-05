/*ProductResume é utilizado para mostrar uma caixa com um único produto, contendo os seguintes itens:
- imagem;
- Nome do produto;
- Quantidade;
- Botão de comprar.
*/

import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import {FontAwesome} from '@expo/vector-icons';

//
const ProductResume = ({product})=>{
    return (
        <View style = {styles.viewStyle}>
            {/*image*/}
            <Image 
                style = {styles.imageStyle}
                source={product.imageSource}
            />
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                {/*title*/}
                <Text style = {{fontSize: 20, alignSelf:'flex-end'}}>{product.title}</Text>
                <Text>Quantidade: </Text>
            </View>

            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                {/*price*/}
                <Text>{product.price}</Text>
                <NumericInput 
                    type='plus-minus' 
                    minValue={0}
                    totalWidth={100} 
                    totalHeight={40} 
                    iconSize={5}
                    rounded
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='green' 
                    leftButtonBackgroundColor='gray'
                />
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Colocar no carrinho</Text>
                <FontAwesome name="shopping-cart" size={35} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: '#F0EEEE',
        borderRadius: 10,
        padding:5,
        height:350
    },
    imageStyle:{
        height:200,
        resizeMode: 'contain'
    },
    titleStyle: {
        fontsize: 20
    }

});

export default ProductResume;
