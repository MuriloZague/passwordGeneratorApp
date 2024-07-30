import Slider from "@react-native-community/slider";
import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native";
import { ModalPassword } from "../components/modal";

let charset = 'abcdef*.,()ghijklmnopqrwxyzAB-$%&CDEFGHI4567JKLMNOPQRSTUVWXstuvYZ123890+!\@#?/'


export default function Home() {

    const [caracteres, setCaracteres] = useState(12);
    const [passwordValue, setPasswordValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    function generatePassword() {

        let password = '';
        for (let i = 0, n = charset.length; i < caracteres; i++){
            password += charset.charAt(Math.floor(Math.random()* n))
        };

        setPasswordValue(password);
        setModalVisible(true);

    };

    return (
        <View style={styles.container}>
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            />
        <Text style={styles.title}>{caracteres.toFixed(0)} caracteres</Text>

    <View style={styles.area}>
        <Slider style={{ height: 35 }}
        minimumValue={6}
        maximumValue={25}
        minimumTrackTintColor="#ff0000"
        maximumTrackTintColor=""
        thumbTintColor="#008577"
        value={caracteres}
        onValueChange={(value) => setCaracteres(value)}
        />
    </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={generatePassword}>

            <Text style={styles.buttonText}>
            Gerar Senha
            </Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType="fade" transparent={true} >
            <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) } />
        </Modal>

    </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: -20,
        marginBottom: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 8,
    },
    button: {
        width: '80%',
        backgroundColor: '#392DE9',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center,'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
});