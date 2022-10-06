import { Alert } from "react-native";

export const twoButtonAlert = () =>
Alert.alert(
    "Warning",
    "You are about to delete this product. Are you sure?",
    [
        { text: "Yes", onPress: ( ) => console.log("OK Deleted")},
        { text: "No", onPress: () => console.log("No Deleted") }
    ]
);