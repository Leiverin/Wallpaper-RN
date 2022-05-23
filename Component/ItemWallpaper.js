import { StyleSheet, View, Pressable, Image} from 'react-native';

const ItemWallpaper=(props)=>{
     const {item, onClick} = props;
     return(
          <Pressable
               onPress={onClick}
               style={({pressed})=>[{
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'transparent',
          }, styles.containerItem ]}>
               <View style={styles.containerView}>
                    <Image
                         style={styles.itemImage}
                         source={{
                              uri: item.link,
                         }}
                    />
               </View>
          </Pressable>
     );
}

const styles = StyleSheet.create({
     containerView: {
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: 8,
     },
     itemImage: {
          height: 300,
          width: 300,
          resizeMode: 'cover',
          borderRadius: 16
     },
     containerItem:{
          flex: 1,
          shadowOpacity: 0.3,
          shadowRadius: 5,
          shadowOffset: {width: 0, height: 0},
          shadowColor: '#fff',
          marginVertical: 8,
          marginHorizontal: 8,
          borderRadius: 16,
          paddingVertical: 8,
          paddingHorizontal: 6
     }
});

export default ItemWallpaper;
