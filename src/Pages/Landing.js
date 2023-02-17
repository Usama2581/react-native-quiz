import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function Landing({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("Question")} style={styles.start}>
                <Text style={styles.text}>Start</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    start: {
        width: '30%',
        height: '7%',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        fontSize: 17,
        color: 'white',
    
    }
  

})