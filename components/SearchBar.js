import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const SearchBar = ({ value, onChangeText, onSubmit }) => {

    return (
        <View>
            <TextInput style={styles.input}
                placeholder='Search'
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
                placeholderTextColor={colors.white}
            />
        </View>
    )
}
export default SearchBar;

const styles = StyleSheet.create({
 input: {
        color: colors.white,
        marginVertical: 4,
        paddingHorizontal: 15
    },
})