import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import HorizontalProductsList from '../components/HorizontalProductsList';
import ProductResume from '../components/ProductResume';

const product1 = {
    "title": "Maçã",
    "imageSource": require('../assets/img/productsImages/maca.jpg'),
    "price": "R$ 5,00/kg"
}

const product2 = {
    "title": "Laranja",
    "imageSource": require('../assets/img/productsImages/laranja.jpg'),
    "price": "R$ 12,00/kg"
}

const product3 = {
    "title": "Banana",
    "imageSource": require('../assets/img/productsImages/banana.jpg'),
    "price": "R$ 8,00/duzia"
}
const productListAux = [
    product1,
    product2,
    product3
];

const HomeScreen = ()=>{
    const [productSearch, setProductSearch] = useState('');

    return (
        <View>
            <ScrollView>
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
                
                {/*
                <Text>Reproduzindo o valor digitado: {productSearch}</Text>
                */}

                <HorizontalProductsList
                    title = "Promoções"
                    productList = {productListAux}
                />

                <HorizontalProductsList
                    title = "Frutas"
                    productList = {productListAux}
                />
                
                <Text style={styles.textStyle}>
                    McLE é o acrônimo da inicial dos nomes dos fundadores do melhor 
                    e-commerce feito em React-Native: 
                </Text>
                <Text style={styles.textStyle}>
                    Mayu, Caio, Lizandro e Eduardo 
                </Text>
            </ScrollView>
        </View>
    );
}

//Style a ser ajustado
const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 30
    }
})

export default HomeScreen