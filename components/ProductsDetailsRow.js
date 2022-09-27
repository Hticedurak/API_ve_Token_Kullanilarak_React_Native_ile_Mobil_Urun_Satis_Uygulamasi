import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const ProductsDetailsRow = ({ propertiesName, property }) => {
    return (
        <View style={styles.container}>
            <View style={styles.lineContainer}>
                <Text style={styles.propertiesName}> {propertiesName}</Text>
                <Text style={styles.sign}> :</Text>
                <Text style={styles.property}> {property}</Text>
            </View>
        </View>)
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    lineContainer: {
        flexDirection: 'row',
    },
    propertiesName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 9,
        color: colors.primary,
        flex: 1,
        fontStyle: 'italic'
    },
    sign: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    property: {
        fontSize: 20,
        color: colors.gri,
        flex: 2,
        marginLeft: 6
    },
})
export default ProductsDetailsRow;