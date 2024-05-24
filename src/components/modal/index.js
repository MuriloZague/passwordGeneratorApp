import { View, StyleSheet, Text, TouchableOpacity, Pressable, Alert } from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage'


export function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();

 async function handleCopyPassword(){
    await Clipboard.setStringAsync(password);
    await saveItem("@pass", password)

    handleClose();
 }

 return (

   <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>Senha Gerada!</Text>

                <Pressable onLongPress={handleCopyPassword} style={styles.password}>
                    <Text style={styles.passwordText}>
                        {password}
                    </Text>
                </Pressable>

            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.buttonBack, styles.button]} onPress={handleClose}>
                    <Text style={styles.buttonTextBack}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonSave, styles.button]} onPress={handleCopyPassword}>
                    <Text style={styles.buttonTextSave}>Salvar Senha</Text>
                </TouchableOpacity>
            </View>
        </View>
   </View>

  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: '#fff',
        width: '90%',
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 14,
        paddingBottom: 14,
    },
    password: {
        width: '90%',
        backgroundColor: '#000',
        borderRadius: 8,
    },
    passwordText: {
        color: '#fff',
        textAlign: 'center',
        padding: 12,
    },
    buttons: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between'
    },
    buttonBack: {
    },
    buttonTextBack: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        paddingHorizontal: 14,
    },
    buttonSave: {
        backgroundColor: '#392DE9',
        borderRadius: 6,
    },
    buttonTextSave: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        paddingHorizontal: 14,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 14,
    },
})