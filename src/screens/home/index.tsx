import { View } from "react-native"
import { Profile } from "../../components/Profile/Profile";
import {styles} from './styled';

export function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
               <Profile/> 
            </View>
        </View>
    )
}