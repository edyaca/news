import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
 
const New = ({ info: { publishedAt, title, author, urlToImage, description } }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>'cara'</Text>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{author}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 150,
        height: 250,
        backgroundColor: "black"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black"
    }
})

export default New
