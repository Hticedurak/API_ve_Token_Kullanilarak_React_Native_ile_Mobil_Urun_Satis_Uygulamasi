import React from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import ProductsDetailsRow from "../components/ProductsDetailsRow";
import { useEffect } from "react";
import ButtonsRow from "../components/ButtonsRow";
import ProductsHeader from "../components/ProductsHeader"
import { twoButtonAlert } from "../config/twoButtonAlert";

const ProductsDetails = ({ navigation, route }) => {
    const { id } = route.params;

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => res.products)
            .then(res => console.log(res));
    }, []);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <ProductsHeader header={route.params.title} price={route.params.price} imageUrl={route.params.thumbnail}></ProductsHeader>
                <ProductsDetailsRow propertiesName={'Brand'} property={route.params.brand}></ProductsDetailsRow>
                <ProductsDetailsRow propertiesName={'Category'} property={route.params.category}></ProductsDetailsRow>
                <ProductsDetailsRow propertiesName={'Stock'} property={route.params.stock}></ProductsDetailsRow>
                <ProductsDetailsRow propertiesName={'Discount'} property={route.params.discountPercentage}></ProductsDetailsRow>
                <ProductsDetailsRow propertiesName={'Description'} property={route.params.description} ></ProductsDetailsRow>

                <View style={styles.buttonContainer}>
                    <ButtonsRow buttonName={'Delete'} onPress={() => { twoButtonAlert() }}></ButtonsRow>
                    <ButtonsRow buttonName={'Edit'} onPress={() => {
                        navigation.navigate('Edit', route.params);
                    }}></ButtonsRow>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default ProductsDetails;