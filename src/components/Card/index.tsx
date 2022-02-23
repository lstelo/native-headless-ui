import React from 'react'
import { View } from 'react-native'
import { tw } from "../../lib/tailwind"

export default function Card({ children , style={}}) {
    return (
        <View style={[tw`w-full h-auto bg-white border border-gray-300 shadow dark:border-gray-900 dark:bg-black`, style]}>
            {children}
        </View>
    )
}
