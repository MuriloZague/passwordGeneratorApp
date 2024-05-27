import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

export function PasswordItem({ data, removePassword }) {

    const handleLongPress = async () => {
        await Clipboard.setStringAsync(data);
    };

    const [showValue, setShowValue] = useState(true);

    return (
        <Pressable style={styles.container}>
            <Pressable onLongPress={handleLongPress} style={styles.textContainer}>
                {showValue ? (
                    <Text style={styles.text}>{data}</Text>
                ) : (
                    <View style={styles.skeleton}></View>
                )}
            </Pressable>

            <View style={styles.iconsContainer}>

                <TouchableOpacity onPress={() => setShowValue(!showValue)} style={styles.iconButton}>
                    {showValue ? (
                        <Ionicons size={22} color={'#fff'} name="eye-outline" />
                    ) : (
                        <Ionicons size={22} color={'#fff'} name='eye-off-outline' />
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={removePassword} style={styles.iconButton}>
                    <Ionicons size={22} color={'#fff'} name="trash-outline" />
                </TouchableOpacity>

            </View>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    text: {
        color: '#fff',
    },
    skeleton: {
        width: 165,
        height: 11,
        backgroundColor: '#DADADA',
        borderRadius: 8,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 10,
    },
});
