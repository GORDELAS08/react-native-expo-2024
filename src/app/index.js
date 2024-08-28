import { Button,StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../hooks/Auth";

export default function App() {
  const { signIn, signOut } = useAuth();
  return (
    <View style={styles.container}>
        <Text style={styles.title}>aplicativo pronto para usar</Text>
        <Button title="signIn User" onPress={()=>signIn({ Email:"user@gmail.com", password:"User123!"})}/>
        <Button title="signIn Super" onPress={()=>signIn({ Email:"super@gmail.com", password:"Super123!"})}/>
        <Button title="signIn Adm" onPress={()=>signIn({ Email:"adm@gmail.com", password:"Adm123!"})}/>
        <Button title="signOut" onPress={()=>signOut()}/>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "regular",
  },
});
