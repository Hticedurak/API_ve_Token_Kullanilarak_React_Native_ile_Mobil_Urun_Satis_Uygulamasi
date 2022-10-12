import React, { useEffect, useState } from "react";
import ProfileRow from "../components/ProfileRow";
import { TouchableOpacity, Text, StyleSheet, View, FlatList } from "react-native";
import { colors, userInfo } from "../config/constants";
import { Ionicons } from '@expo/vector-icons'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = ({ navigation }) => {

    const { signOut } = useContext(AuthContext);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users/'+ userInfo.id)
            .then(res => res.json())
            .then(res => res.users)
            .then(res => setUser(res))
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={user}
                    renderItem={({ item }) => (
                        <ProfileRow style={styles.ProfileRow} name={item.username} email={item.email} imageUrl={item.image} onPress={() => {
                            navigation.navigate('ProfileDetails', item);
                        }}>
                        </ProfileRow>
                    )}
                    keyExtractor={(item) => item.id}>
                </FlatList>
            </View>
            <View style={{ flex: 0 }}>
                <TouchableOpacity style={styles.cell} onPress={() => { signOut() }}>
                    <View style={styles.avatar}>
                        <Ionicons name="log-out-outline" size={24} color={'white'}></Ionicons>
                    </View>
                    <Text style={styles.out}>OUT</Text>
                    <Ionicons name="chevron-forward-outline" size={20}></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create
    ({
        ProfileRow: {
            marginTop: 16,
            backgroundColor: colors.white,
        },
        cell: {
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderWidth: 2,
            borderRadius: 6,
            marginLeft: 16,
            marginRight: 16,
            borderColor: colors.primary,
            alignItems: 'center',
            backgroundColor: colors.white,
        },
        out: {
            flex: 1,
            fontSize: 19,
            fontWeight: '500',
            color: colors.primary,
        },
        avatar: {
            width: 32,
            height: 32,
            backgroundColor: colors.secondary,
            borderRadius: 6,
            marginRight: 17,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
export default Profile;