import { Bebas_Neue } from "next/font/google";
import { Patrick_Hand } from "next/font/google";

export const bebas_neue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    fallback: ["sans"]
})

export const patrick_hand = Patrick_Hand({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    fallback: ["sans"]
})