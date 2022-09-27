import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const ProfileDetailsRow = ({ text, property }) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.property}> {property}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.secondary,
        marginBottom: 4
    },
    textContainer: {
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 18
    },
    property: {
        color: colors.primary,
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        fontWeight: 'bold'
    }
})
export default ProfileDetailsRow;