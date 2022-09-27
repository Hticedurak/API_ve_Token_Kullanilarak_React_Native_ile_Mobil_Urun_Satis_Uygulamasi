import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { colors } from "../config/constants";

const ProfileRow = ({ name, email, onPress, imageUrl, style }) => {
    return (
        <TouchableOpacity style={[styles.people, style]} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.profileImage}
                    resizeMode='contain'
                    source={{ uri: imageUrl }}
                />
            </View>
            <View style={styles.person}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email} >{email}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={30} ></Ionicons>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    imageContainer: {
        paddingRight: 30
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: colors.siyah
    },
    people: {
        paddingHorizontal: 16,
        paddingVertical: 13,
        borderWidth: 2,
        borderRadius: 6,
        borderColor: colors.primary,
        margin: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    person: {
        flex: 1,
    },
    name: {
        fontSize: 23,
        fontWeight: '700',
        color: colors.secondary
    },
    email: {
        marginRight: 13,
        fontSize: 18,
        color: colors.secondary,
        fontWeight: '500'
    }
})
export default ProfileRow;