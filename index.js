// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';

export default function App() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [currentLetterIndex, setCurrentLetterIndex] = React.useState(0);

    const nextLetter = () => {
        setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read Letters</Text>
            <View style={styles.letterContainer}>
                <Text style={styles.letter}>{letters[currentLetterIndex]}</Text>
            </View>
            <Button title="Next Letter" onPress={nextLetter} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    letterContainer: {
        marginVertical: 20,
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#fff',
        elevation: 4,
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        color: '#333',
    },
});