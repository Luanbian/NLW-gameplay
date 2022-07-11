import { Text, View } from "react-native";
import { Avatar } from "../Avatar/Avatar";
import {styles} from './ProfileStyled';

export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/LuanBian.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        OLá,
                    </Text>
                    <Text style={styles.username}>
                        Luan
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}