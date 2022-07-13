import {View, Image, Text} from 'react-native';
import {styles} from './styles';
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon/Button';
import { useNavigation } from '@react-navigation/native';


export function SignIn(){
    const navigation:any = useNavigation();

    return(
        <View style={styles.container}>

            <Image 
                source={IllustrationImg} 
                style={styles.image}
                resizeMode='stretch'
            />
           
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title='Entrar com Discord' 
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}