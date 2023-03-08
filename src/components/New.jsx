import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native"
import React, { Component } from 'react'


const New = ({ info: { publishedAt, title, author, urlToImage, url, description } }) => {
    browseNews = () => {
        console.log('katy 1')
        console.log(`${url}`)
        this.props.navigation.navigate(
            'Browser',
            { url: `${url}` }
        )
    }
    newsdetail = () => {
        console.log(`${url}`)
        Linking.openURL(`${url}`)
    }
    return (
        <View style={styles.container} >
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: urlToImage != null ? urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }}
            >
            </Image>
            <Text style={styles.text}>
                <Text style={styles.capitalLetter}>{title[0]}</Text>
                <Text numberOfLines={3} style={styles.textShadow}>{title.substring(1, 900)}{'\n'}</Text>
                <Text numberOfLines={3} style={styles.text}>{description}</Text>
            </Text>
            <TouchableOpacity onPress={newsdetail} >
                <Text style={styles.viewMore}>View more...</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center"
    },
    image: {
        width: 350,
        height: 300,
        backgroundColor: "black"
    },
    text: {
        fontSize: 18,
        color: '#000000'
    },

    capitalLetter: {
        fontWeight: "bold",
        color: 'red',
        fontSize: 30,
        textAlign: 'left'
    },
    textShadow: {
        fontWeight: "bold",
        textShadowColor: 'red',
        textShadowOffset: { width: 4, height: 4 },
        textShadowRadius: 10,
        fontSize: 18,
    },
    viewMore: {
        fontSize: 18,
        textAlign: 'right',
        flex: 1,
        color: 'blue'
    },
    detail: {
        marginTop: 28,
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default New
