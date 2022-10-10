import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { colors } from "../config/constants";

const ProductRow = ({ productName, productPrice, onPress, imageUrl }) => {
    return (
        <TouchableOpacity style={styles.categori} onPress={onPress}>
            <View style={styles.product}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={{ uri: imageUrl }}
                    />
                </View>
                <View style={styles.column}>
                    <View style={styles.productNameRow}>
                        <Text style={styles.productName}>{productName}</Text>
                    </View>
                    <Text style={styles.productPrice}>{productPrice}$</Text>
                </View>
            </View>
            <View style={styles.icon}>
                <Ionicons name="chevron-forward-outline" size={20} ></Ionicons>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    categori: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 15,
        margin: 15,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.secondary,
    },
    product: {
        flexDirection: 'row',
        flex: 1,
    },
    imageContainer: {
        paddingRight: 3
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 15
    },
    column: {
        flexDirection: 'column',
        margin: 6,
    },
    productNameRow: {


    },
    productName: {
        fontSize: 20,
        marginBottom: 6,
        fontWeight: 'bold',
        color: colors.primary,
        paddingStart: 10,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    productPrice: {
        paddingStart: 10,
        paddingEnd: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {

    }
})
export default ProductRow;