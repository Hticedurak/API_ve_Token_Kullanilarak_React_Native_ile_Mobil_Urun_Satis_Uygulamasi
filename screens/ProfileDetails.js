import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileImage from "../components/ProfileImage";
import ProfileDetailsRow from "../components/ProfileDetailsRow"
import { useEffect } from "react";

const ProfileDetails = ({ route }) => {
    const { id } = route.params;

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(res => res.users);
    }, [])

    return (
        <View style={styles.container}>
            <ProfileImage imageUrl={route.params.image}></ProfileImage>
            <ProfileDetailsRow text={'First Name'} property={route.params.firstName} />
            <ProfileDetailsRow text={'Last Name'} property={route.params.lastName} />
            <ProfileDetailsRow text={'Age'} property={route.params.age} />
            <ProfileDetailsRow text={'Gender'} property={route.params.gender} />
            <ProfileDetailsRow text={'Email'} property={route.params.email} />
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