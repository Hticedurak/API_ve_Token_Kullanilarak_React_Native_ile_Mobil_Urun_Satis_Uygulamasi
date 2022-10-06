import React, { useState, useMemo, useEffect } from "react";
import Products from "./screens/Products";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native'
import Profile from "./screens/Profile";
import { Ionicons } from '@expo/vector-icons'
import { colors } from "./config/constants";
import Login from "./screens/Login";
import ProductsDetails from "./screens/ProductsDetails";
import Edit from "./screens/Edit";
import ProfileDetails from "./screens/ProfileDetails";
import AddProduct from "./screens/AddProduct";
import { AuthContext } from "./context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ProductsStack = createNativeStackNavigator()
const ProductsScreen = () => {
  return (
    <ProductsStack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.primary }, headerTintColor: colors.white, headerTitleStyle: { fontWeight: '500', color: colors.white } }}>
      <ProductsStack.Screen name="Products" component={Products} options={{ title: "List" }} />
      <ProductsStack.Screen name="Details" component={ProductsDetails} options={{ title: "Details" }} />
      <ProductsStack.Screen name="Edit" component={Edit} options={{ title: "Edit" }} />
      <ProductsStack.Screen name="AddProduct" component={AddProduct} options={{ title: "New Product" }} />
    </ProductsStack.Navigator>
  )
}

const ProfileStack = createNativeStackNavigator()
const ProfileScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.primary }, headerTintColor: colors.white, headerTitleStyle: { fontWeight: '500', color: colors.white } }}>
      <ProfileStack.Screen name="Profil" component={Profile} options={{ title: "Profile" }} />
      <ProfileStack.Screen name="ProfileDetails" component={ProfileDetails} options={{ title: "Profile Details" }} />

    </ProfileStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator()
const HomeScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'List') {
            iconName = focused ? 'list' : 'list-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: colors.primary },
        tabBarActiveTintColor: colors.white,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.secondary,
      })}
    >
      <Tabs.Screen name="List" component={ProductsScreen}></Tabs.Screen>
      <Tabs.Screen name="Profile" component={ProfileScreen}></Tabs.Screen>
    </Tabs.Navigator>
  )
}

const LoginStack = createNativeStackNavigator()
const AuthScreen = () => {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  )
}

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState();

  const authContext = useMemo(() => ({

    signIn: (username, password) => {
      setIsLoading(true);

      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'atuny0',
          password: '9uQFF1Lh'
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.message == null) {
            setUserToken(res);
            AsyncStorage.setItem('userToken', JSON.stringify(res));
          }
          else {
            setUserToken(userToken);
          }
          setIsLoading(false);
          console.log(res);
        })
        .catch(e => {
          alert(e.message);
        })
    },

    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
      try {
        AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
    },
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
      let userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
        setUserToken(userToken);
      }
      catch(e){
        console.log(e);
      }
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        {userToken !== null ? (<HomeScreen />) : <AuthScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
export default App;