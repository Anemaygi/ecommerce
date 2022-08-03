import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HorizontalProductsList = ({title})=>{
    return (
        <View>
            <Text> {title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textHeaderStyle: {
        fontSize: 30
    }
});

export default HorizontalProductsList;