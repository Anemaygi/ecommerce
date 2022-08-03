import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({productSearch, onProductSearchChange, onProductSearchSubmit})=>{
    return (
        <View style={styles.backgroundStyle}>
            <TextInput 
                style = {styles.inputStyle}
                placeholder='Digite o produto desejado'
                value = {productSearch}
                //O código da linha abaixo é igual ao código da linha subsequente
                //onChangeText={newProductSearch=>onProductSearchChange(newProductSearch)}
                onChangeText={onProductSearchChange}
                autoCapitalize = "none"
                //autoCorrect = {false} //Obs: a autocorreção me parece uma boa opção para produto
                //O código da linha abaixo é igual ao código da linha subsequente
                onEndEditing={onProductSearchSubmit}
                //onEndEditing={onProductSearchSubmit}
            />

            {/*O icone ainda nao funciona com um clique*/}
            <Feather name = "search" style = {styles.iconStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#F0EEEE', //cinza clarinho #F0EEEE
        height: 50,                  //altura da caixa cinza
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        //borderWidth: 1,
        //borderColor: 'black'
    },
    inputStyle: {
        //borderColor: 'black',
        //borderWidth: 1,
        flex: 1,
        fontSize: 18
        //marginHorizontal: 5
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 5
    },
    textStyle: {
        fontSize: 30
    }
});

export default SearchBar;
