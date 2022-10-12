export const colors = {
    primary: '#2e8b57',
    white: '#ffffff',
    black: '#000000',
    secondary:'#0e4c92',
    grey: '#647c73',
}

import { Alert } from "react-native";

export const twoButtonAlert = () => {
    Alert.alert(
        "Warning",
        "You are about to delete this product. Are you sure?",
        [
            { text: "Yes", onPress: () => console.log("OK Deleted") },
            { text: "No", onPress: () => console.log("No Deleted") }
        ]
    )
}

export const id = {

}


