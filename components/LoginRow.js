import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { colors } from "../config/constants";

const LoginRow = ({ input, value, onChangeText, secure }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secure}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 18,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 8,
        fontSize: 18,
        fontWeight: '500'
    }
})
export default LoginRow;