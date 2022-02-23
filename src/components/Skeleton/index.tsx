import React from 'react'
import { tw } from "../../lib/tailwind";
import { LinearGradient } from 'expo-linear-gradient';

export default function Skeleton({ width = 100, height = 10, variant="rectangular", style={} }) {

    let variantStyle;
    switch (variant) {
        case "circular":
            variantStyle = "rounded-full"
            break;
        case "rectangular":
            variantStyle = "rounded-lg"
            break;
        default:
            variantStyle = "rounded-sm"
    }
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={["transparent", "rgb(243, 244, 246)", "transparent"]}
            style={[tw`bg-gray-200 rounded-full ${variantStyle}`, { width, height }, style]}
        >
        </LinearGradient>
    )
}
