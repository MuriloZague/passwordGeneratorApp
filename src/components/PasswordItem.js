import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard';

export function PasswordItem({ data, removePassword }) {

  const handleLongPress = async () => {
    await Clipboard.setStringAsync(data);
    
  };

    return(
        <Pressable style={styles.container}>
            <Pressable onLongPress={handleLongPress}>
                <Text style={styles.text}>{data}</Text>
            </Pressable>
            <TouchableOpacity onPress={removePassword}>
                <Ionicons size={20} color={'#fff'} name="trash-outline"/>
            </TouchableOpacity>
        </Pressable>
    )
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
    text: {
        color: '#fff',
    },
})