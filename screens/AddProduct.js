import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../config/constants";
import ButtonsRow from "../components/ButtonsRow";
import AddProductRow from "../components/AddProductRow";

const AddProduct = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View>
                    <AddProductRow propertyName={'Title'}></AddProductRow>
                    <AddProductRow propertyName={'Price'} ></AddProductRow>
                    <AddProductRow propertyName={'Rating'}></AddProductRow>
                    <AddProductRow propertyName={'Brand'} ></AddProductRow>
                    <AddProductRow propertyName={'Category'} ></AddProductRow>
                    <AddProductRow propertyName={'Stock'} ></AddProductRow>
                    <AddProductRow propertyName={'Discount'}></AddProductRow>
                    <AddProductRow propertyName={'Logo'}></AddProductRow>
                    <AddProductRow propertyName={'Description'}></AddProductRow>

                    <View style={styles.buttonContainer}>
                        <ButtonsRow buttonName={'Cancel'} onPress={() => {
                            navigation.navigate('Products');
                        }}></ButtonsRow>
                        <ButtonsRow buttonName={'Add'} onPress={() => {
                            navigation.navigate('Products');
                        }}></ButtonsRow>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    seperator: {
        borderColor: colors.primary,
        height: 2,
        backgroundColor: colors.primary
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default AddProduct;