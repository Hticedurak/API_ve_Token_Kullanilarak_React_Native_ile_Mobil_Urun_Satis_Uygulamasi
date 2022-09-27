import React from "react";
import ProfileRow from "../components/ProfileRow";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { colors } from "../config/constants";
import { Ionicons } from '@expo/vector-icons'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = ({ navigation }) => {

    const { signOut } = useContext(AuthContext);

    return (
        <View>
            <ProfileRow name={'kisiadi'} email={'mailadresi'} style={styles.ProfileRow} onPress={() => {
                navigation.navigate('ProfileDetails');
            }}>
            </ProfileRow>

            <TouchableOpacity style={styles.cell} onPress={() => { signOut() }}>
                <View style={styles.avatar}>
                    <Ionicons name="log-out-outline" size={24} color={'white'}></Ionicons>
                </View>
                <Text style={styles.out}>OUT</Text>
                <Ionicons name="chevron-forward-outline" size={20}></Ionicons>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create
    ({
        ProfileRow: {
            marginTop: 16,
            backgroundColor: colors.beyaz,
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
            backgroundColor: colors.beyaz,
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