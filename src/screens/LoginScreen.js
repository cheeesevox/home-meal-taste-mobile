import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View style={styles.conponent}>
        <View style={styles.logom}>
            <View style={styles.Homemeal}>
                {/* header */}
                <View>
                    
                    <Text style={styles.textdecor}>Home Meal Taste</Text>
                </View>
                {/* body */}
                <View>
                    <Text>Body</Text>
                </View>
                {/* Footer */}
                <View>
                    <Text>Footer</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    conponent:{
        flex:1,
        backgroundColor:'green'
    },
    logom:{
        margin:10,
        flex:1,
        backgroundColor:'white',
        borderRadius:10
    },
    textdecor:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    },
    Homemeal:{
        flex:1,
        marginVertical:30,
        justifyContent:'center'
    }
})