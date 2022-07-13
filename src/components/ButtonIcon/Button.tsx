import { Text, Image, View} from "react-native";
import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png';
import { styles } from "./ButtonStyled";

type Props = RectButtonProperties & {
    title: string;
}

export function ButtonIcon({title, ...rest}:Props | any){
    return(
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}