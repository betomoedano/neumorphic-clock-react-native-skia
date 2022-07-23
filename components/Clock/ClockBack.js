import { View, useWindowDimensions } from "react-native";
import { Canvas, Fill, Text, rect, rrect, Box, BoxShadow, Paint } from "@shopify/react-native-skia";
 
export default function ClockBack() {
const { width, height } = useWindowDimensions();
return (
<Canvas style={{ width: width, height: height, zIndex: -1, position: 'absolute' }}>
  <Fill color="#EEF0F5" />
  <Box box={rrect(rect(width / 2 - 100, 70, 200, 200), 100, 100)} color="#E6E9EF">
    <BoxShadow dx={19} dy={25} blur={92} color="#A6B4C845"  />
    <BoxShadow dx={-20} dy={-20} blur={61} color="#ffffff60"   />
    <BoxShadow dx={13} dy={14} blur={12} color="#A6B4C857"  />
  </Box>

  <Box box={rrect(rect(width / 2 - 87.5, 84, 175, 175), 100, 100)} color="#EEF0F5">
    <BoxShadow dx={12} dy={12} blur={30} color="#ffffff20"  inner/>
    <BoxShadow dx={7} dy={7} blur={8} color="#A6B4C890" inner  />
    <BoxShadow dx={10} dy={11} blur={30} color="#A6B4C850"  inner/>
  </Box>

  <Box box={rrect(rect(width / 2 - 2.5, 100, 5, 15), 10, 10)} color="#00000030"/>
  <Box box={rrect(rect(width / 2 - 2.5, 230, 5, 15), 10, 10)} color="#00000030"/>
  <Box box={rrect(rect(width / 2 - 70, 170, 15, 5), 10, 10)} color="#00000030"/>
  <Box box={rrect(rect(width / 2 + 60, 170, 15, 5), 10, 10)} color="#00000030"/>
</Canvas>
);
}