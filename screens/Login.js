import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";
import LoginRow from "../components/LoginRow";
import { Ionicons } from '@expo/vector-icons';
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [submit, setSubmit] = useState(false);
    const onPress = () => { setSubmit(!submit) };

    const { signIn } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.loginTitle}>USER LOGIN</Text>
            <View style={styles.wrapper}>
                <LoginRow
                    input={"Username"}
                    value={username}
                    onChangeText={setUsername}
                    secure={false}>
                </LoginRow>
                <LoginRow
                    input={"Password"}
                    value={password}
                    onChangeText={setPassword}
                    secure={true}>
                </LoginRow>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.icon} onPress={() => onPress()}>
                        {submit ? <Ionicons name="checkmark" size={18} color={'white'}></Ionicons>
                            : null}
                    </TouchableOpacity>
                    <Text style={styles.remember}>Remember Me</Text>
                </View>
                <Button title="LOGIN" color={colors.secondary} onPress={() => { signIn(username, password); }} ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginTitle: {
        fontSize: 25,
        fontWeight: '800',
        fontStyle: 'italic',
        color: colors.secondary,
        marginBottom: 25
    },
    wrapper: {
        width: '80%'
    },
    box: {
        flexDirection: 'row',
        marginVertical: 20
    },
    icon: {
        height: 20,
        width: 20,
        marginRight: 10,
        backgroundColor: colors.primary,
        borderRadius: 6
    },
    remember: {
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'italic',
    }
})
export default Login;