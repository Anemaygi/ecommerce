import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import HorizontalProductsList from '../components/HorizontalProductsList';
import ProductResume from '../components/ProductResume';

const product1 = {
    "id": "00001",
    "title": "Maçã",
    "imageSource": require('../assets/img/productsImages/maca.jpg'),
    "qttStock": "7",
    "description": "100g de maçã",
    "price": "R$ 0,90",
    "category": "fruit"
}

const product2 = {
    "id": "00002",
    "title": "Laranja",
    "imageSource": require('../assets/img/productsImages/laranja.jpg'),
    "qttStock": "10",
    "description": "100g de laranja",
    "price": "R$ 1,20",
    "category": "fruit"
}

const product3 = {
    "id": "00003",
    "title": "Banana",
    "imageSource": require('../assets/img/productsImages/banana.jpg'),
    "qttStock": "8",
    "description": "100g de banana",
    "price": "R$ 1,10",
    "category": "fruit"
}
const productListAux = [
    product1,
    product2,
    product3
];

const HomeScreen = ()=>{
    //console.log(props);
    //console.log(props.navigation);
    const [productSearch, setProductSearch] = useState('');

    return (
        <View>
            <SearchBar
                 
                productSearch = {productSearch} 
                onProductSearchChange = {
                    (newProductSearch)=>{
                        setProductSearch(newProductSearch) 
                        //console.log(newProductSearch)
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

            <ScrollView>

                <HorizontalProductsList
                    title = "Promoções"
                    productList = {productListAux}
                    //navigation = {navigation}
                />

                <HorizontalProductsList
                    title = "Frutas"
                    productList = {productListAux}
                    //navigation = {navigation}
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