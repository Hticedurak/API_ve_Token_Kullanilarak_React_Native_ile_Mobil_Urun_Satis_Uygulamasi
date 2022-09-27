import React from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { colors } from "../config/constants";

const ProductsHeader = ({ header, price, imageUrl }) => {
    return (
        <View style={styles.headerContainer}>
            <Image style={styles.detailImage} resizeMode='stretch' source={{ uri: imageUrl }} />
            <View>
                <Text style={styles.header}>{header}</Text>
                <View style={styles.seperator}></View>
                <Text style={styles.price}>{price}$</Text>
            </View>
        </View>
    )
}
Alert.alert(
    "Warning",
    "You are about to delete this product. Are you sure?",
    [{
        text: "Yes",
        onPress: () => console.log("OK Deleted"),
        style: "yes"
    },
    { text: "No", onPress: () => console.log("No Deleted") }]
);

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 25,
        paddingVertical: 29,
        alignItems: 'center',
        flexDirection: 'row',
    },
    detailImage: {
        width: 90,
        height: 90,
        borderRadius: 4,
        marginRight: 30,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 27,
        fontStyle: 'italic',
        color: colors.secondary,
        textAlign: 'center',
    },
    seperator: {
        height: 2,
        backgroundColor: colors.primary,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 80,
    },
})
export default ProductsHeader;