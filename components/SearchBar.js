import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const SearchBar = ({ value, onChangeText, onSubmit }) => {

    return (
        <View style={styles.searchContainer}>
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
    searchContainer: {
        flex: 1,
        borderRadius: 11,
        marginRight: 20,
        marginVertical: 15,
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
    },
    input: {
        color: colors.white,
        marginVertical: 4,
        paddingHorizontal: 15
    },
})