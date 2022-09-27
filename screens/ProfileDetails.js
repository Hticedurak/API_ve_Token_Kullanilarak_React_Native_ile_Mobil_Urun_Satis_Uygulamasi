import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileImage from "../components/ProfileImage";
import ProfileDetailsRow from "../components/ProfileDetailsRow"

const ProfileDetails = () => {
    return (
        <View style={styles.container}>
            <ProfileImage imageUrl={'https://dummyjson.com/image/i/products/1/2.jpg'}></ProfileImage>
            <ProfileDetailsRow text={'First Name'} property={'Terry'} />
            <ProfileDetailsRow text={'Last Name'} property={'Terry'} />
            <ProfileDetailsRow text={'Age'} property={'Terry'} />
            <ProfileDetailsRow text={'Gender'} property={'Terry'} />
            <ProfileDetailsRow text={'Email'} property={'Terry'} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 25,
    },
})
export default ProfileDetails;