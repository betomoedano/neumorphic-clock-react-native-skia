import { View, Image } from "react-native";
import ClockBack from "./ClockBack";

export default function Clock() {
    return (
        <View>
            <ClockBack />
            <Image source={require('../../assets/1.png')} 
                style={{ width: 92, height: 85, position: 'absolute', top: 120, left: 155 }}
                 />
        </View>
    )
}