import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ProductResume from './ProductResume';
//import ProductResume from './ProductResume';

//futuro argumento: , productList
const HorizontalProductsList = ({title, productList})=>{
    //console.log(product.title);
    return (
        <View>
            <Text style ={styles.textHeaderStyle}> {title} </Text>
            
            <FlatList
                horizontal // It's the same to: horizontal = {true}
                data = {productList}
                keyExtractor={product => product.title}
                renderItem={({ item }) =>{ 
                    return (
                        <View>
                            <ProductResume
                                product = {item}
                                //title = {item.title}
                                //price = {item.price}
                                //imageSource = {item.imageSource}
                                //productList = {productList}
                            />
                        </View>
                        
                    );
                }}
            />
            


            {/*

            <ProductResume 
                title = {product.title}
                price = {product.price}
                imageSource = {product.imageSource}
            />
            
            
            <ProductResume
                title = "maca"
                price = "R$5,00/kg"
                image = '../assets/img/productsImages/maca.jpg'
                //campo para quantidade
                //botão para colocar no carrinho
            />

            */}
            
            {/*
            <FlatList
                horizontal //horizontal={true}
                //data = {productList}
                //keyExtractor={(product)=> product.id}


            />
            */}

        </View>
    );
}

const styles = StyleSheet.create({
    textHeaderStyle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18
    }
});

export default HorizontalProductsList;