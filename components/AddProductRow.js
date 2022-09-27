import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const AddProductRow = ({ propertyName, property }) => {
    return (
        <View style={styles.line}>
            <Text style={styles.propertyName}>{propertyName}</Text>
            <Text style={styles.sign}>:</Text>
            <TextInput placeholder="Bilgileri yazınız." style={styles.property}>{property}</TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center'
    },
    propertyName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.secondary,
        flex: 2,
        fontStyle: 'italic',
    },
    sign: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    property: {
        backgroundColor: colors.primary,
        fontSize: 20,
        borderRadius: 6,
        flex: 3,
        marginLeft: 25,
        padding: 10,
        color: colors.white,
    },
})
export default AddProductRow;