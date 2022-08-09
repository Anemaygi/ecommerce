import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NumericInput from 'react-native-numeric-input';

const AmountItemInput =({product})=>{
    return(
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
            onChange={console.log('Valor alterado')} //Ajustar onChange e fazer lógica se necessário
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
    }
})

export default AmountItemInput;