import { StyleSheet, Text, Pressable } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

// directly passing source = {logo} prop is overriding themedlogo
export default function Index() {
  return (
    <ThemedView style={styles.container}>

      <ThemedLogo style={styles.img} />

      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>Number 1</ThemedText>

      <Spacer height={10} />

      <ThemedText>Reading list</ThemedText>

      <Spacer />

      <Link href="/login" style = {styles.link}>
        <ThemedText>
        Login
        </ThemedText>
      </Link>
      <Link  href="/register" style = {styles.link}>
      <ThemedText>
        Register
        </ThemedText>
      </Link>
       <Link href="/profile" style = {styles.link} >
      <ThemedText>
        Profile
        </ThemedText>
      </Link>

     
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    // Valid RN shadow:
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },
  img: {
    width: 96,
    height: 96,
    // marginVertical: 20, // prefer to use Spacer
  },
  
    link: { 
    marginVertical: 10, 
    borderBottomWidth: 1,
  }
});