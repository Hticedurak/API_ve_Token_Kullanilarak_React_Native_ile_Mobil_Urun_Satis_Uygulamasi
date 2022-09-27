import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const EditRow = ({ propertiesName, property }) => {
    return (

        <View style={styles.line}>
            <Text style={styles.propertiesName}>{propertiesName}</Text>
            <Text style={styles.sign}>:</Text>
            <Text style={styles.property}>{property}</Text>
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
    propertiesName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.secondary,
        flex: 2,
        fontStyle: 'italic'
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
        color: colors.beyaz,
    },
})
export default EditRow;