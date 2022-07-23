
import { View, useWindowDimensions } from "react-native";
import { Canvas, rect, rrect, Box, BoxShadow,  } from "@shopify/react-native-skia";
 
export default function AlarmBack() {
const { width, height } = useWindowDimensions();
return (
    <View style={{position: 'absolute'}}>
        <Canvas style={{ width: width, height: 100 }}>
            <Box box={rrect(rect(width / 2 - 160, 0, 320, 75), 20, 20)} color="#EEF0F5">
            <BoxShadow dx={-5} dy={-5} blur={20} color="#ffffff" />
            <BoxShadow dx={13} dy={14} blur={12} color="#A6B4C870"/>
            </Box>
        </Canvas>
    </View>
);
}