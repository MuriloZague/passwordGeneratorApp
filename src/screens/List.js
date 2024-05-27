import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, VirtualizedList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../hooks/useStorage";
import { PasswordItem } from "../components/PasswordItem";


export function Passwords(){

    const [listPasswords, setListPasswords] = useState([])

    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
        }

        loadPasswords();
    }, [focused])


    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    const confirmDelete = (item) => {
        Alert.alert(
          "Confirmar Exclusão",
          "Tem certeza de que deseja excluir esta senha?",
          [
            {
              text: "Não",
              
            },
            {
              text: "Sim",
              onPress: () => handleDeletePassword(item),
              
            }
          ],
          { cancelable: true }
        );
      };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1, paddingTop: 14, }}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => <PasswordItem data={item} removePassword={() => confirmDelete(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F3FF',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    header: {
        backgroundColor: '#392DE9',
        paddingTop: 58,
        padding: 14,
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,

    }
})
