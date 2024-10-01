import { StyleSheet } from "react-native";

export 
const style = StyleSheet.create({
  
    container: {
        width: '88%',
        height: '72%',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1.7,
        borderRadius: 17,
        padding: 20,
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
        marginTop: 17,
        textAlign: 'center',
        fontSize: 17,
    },
    
    btn: {
        alignSelf:'center',
        alignItems: 'center',
        width: '70%',
        height:47,
        backgroundColor: 'white',
        borderRadius: 22,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 22,
    },
    ntConta: {
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'heavy',
        alignItems: 'center',
        marginTop: 20,
        textAlign: 'center',
    },
})