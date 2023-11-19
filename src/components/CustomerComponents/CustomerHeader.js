import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomerHeader = (props) => {
  return (
    <View style={{marginLeft:15}}>
        <Text style={{fontWeight:'bold', fontSize:20}}>
        {props.name}
        </Text>
    </View>
  )
}

export default CustomerHeader

const styles = StyleSheet.create({})