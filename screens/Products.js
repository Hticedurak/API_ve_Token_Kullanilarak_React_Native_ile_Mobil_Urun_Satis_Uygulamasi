import React from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { colors } from "../config/constants";
import { useEffect, useState } from "react";
import ProductRow from "../components/ProductRow";
import SearchBar from "../components/SearchBar";

const Products = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/search?q=phone', config {
            params: {
                q: search
            }
        })
        .then(res => res.json())
        .then(res => res.searchInfo)
        .then(res => setFilterData(res))
        .catch(error=>{console.error(error)});
    }, []);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => res.products)
            .then(res => setProducts(res));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.upside}>
                <SearchBar value={search} onChangeText={setSearch} onSubmit={searchData} />
                <FlatList
                    data={filterData}
                    renderItem={({ item }) => (
                        <ProductRow productName={item.title} productPrice={item.price} imageUrl={item.thumbnail} onPress={() => {
                            navigation.navigate('Details', item);
                        }} />
                    )}
                    keyExtractor={(item) => item.id}>
                </FlatList>

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
    },
})
export default Products;