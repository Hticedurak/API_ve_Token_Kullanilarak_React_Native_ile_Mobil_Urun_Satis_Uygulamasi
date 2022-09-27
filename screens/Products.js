import React from "react";
import { View, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { colors } from "../config/constants";
import { useEffect, useState } from "react";
import ProductRow from "../components/ProductRow";

const Products = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const Arama = () => {

    }
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => res.products)
            .then(res => setProducts(res));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.upside}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.search} placeholder='Search' placeholderTextColor={colors.white} paddingHorizontal={15}></TextInput>
                </View>
                <TouchableOpacity style={styles.addIcon} onPress={() => {
                    navigation.navigate('AddProduct');
                }}>
                    <Ionicons name='add' size={24} color={colors.white}  ></Ionicons>
                </TouchableOpacity>
            </View>
            <View >
                <FlatList style={styles.list}
                    data={products}
                    renderItem={({ item }) => (
                        <ProductRow productName={item.title} productPrice={item.price} imageUrl={item.thumbnail} onPress={() => {
                            navigation.navigate('Details', item);
                        }} />
                    )}
                    keyExtractor={(item) => item.id}>
                </FlatList>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upside: {
        paddingHorizontal: 20,
        paddingTop: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchContainer: {
        flex: 1,
        borderRadius: 11,
        marginRight: 20,
        marginVertical: 15,
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
    },
    search: {
        color: colors.white,
        marginVertical: 4
    },
    addIcon: {
        width: 56,
        height: 56,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
    },
    list: {
        marginBottom: 90
    }
})
export default Products;