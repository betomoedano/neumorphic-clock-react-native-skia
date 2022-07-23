import { View, useWindowDimensions, ScrollView } from "react-native";
import { Canvas, Fill, Text, rect, rrect, Box, BoxShadow, Paint } from "@shopify/react-native-skia";
import AlarmContainer from "./components/Alarm/AlarmContainer";
import Clock from "./components/Clock/Clock";
 
export default function App() {

return (
  <>
  <Clock />
    <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'flex-end', marginBottom: 150}}>
    <AlarmContainer alarm={"07: 30"}/>   
    <AlarmContainer alarm={"09: 40"}/>   
    <AlarmContainer alarm={"22: 00"}/>   
    </ScrollView>
</>
);
}

// <Box box={rrect(rect(width / 2 - 160, 500, 320, 75), 20, 20)} color="#EEF0F5">
// <BoxShadow dx={-5} dy={-5} blur={20} color="#ffffff" />
// <BoxShadow dx={13} dy={14} blur={12} color="#A6B4C870"/>
// </Box>