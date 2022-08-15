import { View } from "react-native"
import { Profile } from "../../components/Profile/Profile";
import { ButtonAdd } from "../../components/ButtonAdd/ButtonAdd";
import {styles} from './styled';
import { CategorySelect } from "../../components/CategorySelect/CategorySelect";
import { useState } from "react";

export function Home() {
    const [category, setCategory] = useState('')

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
               <Profile/> 
               <ButtonAdd/>
            </View>
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>
        </View>
    )
}