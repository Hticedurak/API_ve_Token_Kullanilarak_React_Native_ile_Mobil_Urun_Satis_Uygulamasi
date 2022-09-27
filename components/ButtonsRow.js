import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";

const ButtonsRow = ({ buttonName, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.buttonName}>{buttonName}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        margin: 35,
        borderRadius: 6,
    },
    buttonName: {
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold',
        color: colors.white,
        fontStyle: 'italic'
    },
})
export default ButtonsRow;