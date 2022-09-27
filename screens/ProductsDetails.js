import React from "react";
import { View, StyleSheet, Alert,ScrollView } from "react-native";
import ProductsDetailsRow from "../components/ProductsDetailsRow";
import { useEffect } from "react";
import ButtonsRow from "../components/ButtonsRow";
import ProductsHeader from "../components/ProductsHeader"

const ProductsDetails = ({ navigation, route }) => {
    const {id}= route.params;

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
                        <ProductsDetailsRow propertiesName={'Description'} property={route.params.description}></ProductsDetailsRow>

                        <View style={styles.buttonContainer}>
                            <ButtonsRow buttonName={'Delete'} onPress={twoButtonAlert}></ButtonsRow>
                            <ButtonsRow buttonName={'Edit'} onPress={() => {
                                navigation.navigate('Edit', route.params);
                            }}></ButtonsRow>
                        </View>
                    </View>
        </ScrollView>
    )
}
const twoButtonAlert = () =>
    Alert.alert(
        "Warning",
        "You are about to delete this product. Are you sure?",
        [
            {
                text: "Yes",
                onPress: ( ) => console.log("OK Deleted"),
                style: "yes"
            },
            { text: "No", onPress: () => console.log("No Deleted") }
        ]
    );
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default ProductsDetails;