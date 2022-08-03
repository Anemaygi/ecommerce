import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import HorizontalProductsList from '../components/HorizontalProductsList';

const HomeScreen = ()=>{
    const [productSearch, setProductSearch] = useState('');
    return (
        <View>

            <SearchBar 
                productSearch = {productSearch} 
                onProductSearchChange = {
                    (newProductSearch)=>{
                        setProductSearch(newProductSearch) 
                        console.log(newProductSearch)
                    }
                }
                onProductSearchSubmit ={
                    () => {
                        console.log('produto buscado')
                    }
                }
            />

            <Text>Reproduzindo o valor digitado: {productSearch}</Text>

            <HorizontalProductsList title = "Promoções"/>
            <HorizontalProductsList title = "Departamento #1"/>
            <HorizontalProductsList title = "Departamento #2"/>

            <Text style={styles.textStyle}>
                McLE é o acrônimo da inicial do nome dos fundadores do melhor 
                e-commerce feito em React-Native: 
            </Text>
            <Text style={styles.textStyle}>
                Mayu, Caio, Lizandro e Eduardo 
            </Text>
        </View>
    );
}

//Style a ser ajustado
const styles = StyleSheet.create({
    textStyle:{
        fontSize: 15
    }
})

export default HomeScreen