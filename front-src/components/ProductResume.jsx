/*ProductResume é utilizado para mostrar uma caixa com um único produto, contendo os seguintes itens:
- imagem;
- Nome do produto;
- Quantidade;
- Botão de comprar.
*/

import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import NumericInput from 'react-native-numeric-input';
import {FontAwesome} from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import AddToCart from './AddToCart';
import AmountItemInput from './AmountItemInput';
import ProductImage from './ProductImage';
//
const ProductResume = ({product})=>{
    return (
        <View style = {styles.viewStyle}>
            {/*image*/}
            <ProductImage
                product = {product}
            />
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                {/*title (Não está bom, está misturando título com quantidade...*/}
                <Text style = {{fontSize: 20}}>{product.title}</Text>
                <Text style = {{fontSize: 17, textAlignVertical: 'bottom'}}>Quantidade: </Text>
            </View>

            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                {/*price*/}
                <Text style={{fontSize:20, textAlignVertical: 'bottom'}}>{product.price}</Text>
                <AmountItemInput product = {product}/>
            </View>
            <AddToCart/>
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

export default withNavigation(ProductResume);