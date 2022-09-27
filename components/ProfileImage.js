import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const ProfileImage = ({ imageUrl }) => {
    return (
        <View style={styles.imageContainer}>
            <Image
                style={styles.profileImage}
                resizeMode='contain'
                source={{ uri: imageUrl }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: colors.siyah
    }
})
export default ProfileImage;