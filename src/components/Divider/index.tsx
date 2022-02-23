import React from 'react'
import { View } from 'react-native'
import { tw } from "../../lib/tailwind";

export default function Divider({style={}}) {
    return (
        <View style={[tw`flex-row border-t border-gray-400 dark:border-gray-900`, style]}></View>
    )
}
