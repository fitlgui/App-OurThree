import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  
    container: {
        width: '88%',
        height: '88%',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1.7,
        borderRadius: 17,
        padding: 20
    },

    text: {
        fontSize: 19,
    },

    input: {
        height: 54,
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 17, 
        cursor: 'auto', 
        marginTop: 14,
        textAlign: 'center',
        fontSize: 17
    },
    
    btn: {
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center',
        width: '70%',
        height:47,
        backgroundColor: 'white',
        borderRadius: 22,
        marginTop: 22
    }
})