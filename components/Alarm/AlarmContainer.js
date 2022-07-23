import { useState } from 'react';
import { Switch, View, Text } from "react-native";
import AlarmBack from "./AlarmBack";

export default function AlarmContainer({ alarm }) {
    const [alarmOn, setAlarmOn] = useState(false);
    return (
        <View style={{marginBottom: 70}}>
            <AlarmBack />
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', marginTop: 15}}>
                <Text style={{fontSize: 32, fontWeight: '500', color: 'gray'}}>{alarm}</Text>
                <Switch value={alarmOn} onValueChange={() => setAlarmOn(!alarmOn)} />
            </View>
        </View>
    )
}