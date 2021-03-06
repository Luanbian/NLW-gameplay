import {styles} from './BackgroundStyled';
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode | any
}

export function Background({children}: Props){
    const { secondary80, secondary100 } = theme.colors;
    return(
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >   
            {children}
        </LinearGradient>
    )
}