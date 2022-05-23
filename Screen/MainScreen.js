import { SafeAreaView, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import react, { useEffect, useState } from 'react';
import ItemWallpaper from '../Component/ItemWallpaper';

const GetDataAPI=(setData)=>{
     const url = 'https://wallpaperweb.herokuapp.com/api-management/get-data';
     fetch(url)
     .then(res=>res.json())
     .then(res=>{
          setData(res);
     })
     .catch(err=>{
          console.log(err);
     });
}

const _renderItem=(item, navigation)=>{
     return(
          <ItemWallpaper
               item={item}
               onClick={()=>{
                    navigation.navigate("DetailScreen", item);
               }}
          />
     );
}

const MainScreen=({navigation})=>{
     const [data, setData] = useState(0);
     useEffect(() => {
          GetDataAPI(setData);
     }, []);
     return(
          <View style={styles.container}>
               <FlatList
                    style={styles.listStyle}
                    data={data}
                    renderItem={({item})=>_renderItem(item, navigation)}
                    keyExtractor={(item)=>item._id}
                    numColumns={2}
               />
          </View>
     );
}

const styles = StyleSheet.create({
     container:{
          flex: 1,
          justifyContent: 'center',
     },
     listStyle:{
          flex: 1,
     }
})

export default MainScreen;
