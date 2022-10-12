import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 15,
        paddingVertical: 29,
        alignItems: 'center',
        flexDirection: 'row',
        marginEnd:19
    },
    detailImage: {
        width: 90,
        height: 90,
        borderRadius: 4,
        marginRight: 20,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 21,
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