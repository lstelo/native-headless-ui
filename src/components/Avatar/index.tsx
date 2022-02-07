import React from 'react'
import { View, Text, Image } from 'react-native'
import { tw } from "~/lib/tailwind"

export default function Avatar({ source, children, style = {} }) {
    if (source) {
        return (<Image source={source} style={[tw`w-10 h-10 rounded-full`, style]} />)
    } else {
        return (
            <View style={[tw`items-center justify-center w-10 h-10 align-middle rounded-full`, style]}>
                <Text style={tw`text-xl font-bold text-white`}>{children}</Text>
            </View>
        )
    }
}
