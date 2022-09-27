import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../config/constants";
import EditRow from "../components/EditRow";
import ButtonsRow from "../components/ButtonsRow";
import { useEffect, } from "react";

const Edit = ({ navigation, route }) => {
    const { id } = route.params;

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => res.products)
            .then(res => console.log(res));
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.header}>Edit #{route.params.id}</Text>
                        <View style={styles.seperator}></View>
                    </View>
                </View>
                <View>
                    <EditRow propertiesName={'Titl'} property={route.params.title}></EditRow>
                    <EditRow propertiesName={'Price'} property={route.params.price}></EditRow>
                    <EditRow propertiesName={'Rating'} property={route.params.rating}></EditRow>
                    <EditRow propertiesName={'Brand'} property={route.params.brand}></EditRow>
                    <EditRow propertiesName={'Category'} property={route.params.category}></EditRow>
                    <EditRow propertiesName={'Stock'} property={route.params.stock}></EditRow>
                    <EditRow propertiesName={'Discount'} property={route.params.discountPercentage}></EditRow>
                    <EditRow propertiesName={'Logo'} property={route.params.thumbnail}></EditRow>
                    <EditRow propertiesName={'Description'} property={route.params.description}></EditRow>

                    <View style={styles.buttonContainer}>
                        <ButtonsRow buttonName={'Cancel'} onPress={() => {
                            navigation.navigate('Details', route.params);
                        }}></ButtonsRow>
                        <ButtonsRow buttonName={'Save'} onPress={() => {
                            navigation.navigate('Details', route.params);
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
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    header: {
        fontSize: 35,
        color: colors.secondary,
        fontWeight: 'bold',
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
export default Edit;