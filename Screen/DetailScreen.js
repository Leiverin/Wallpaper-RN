import {Pressable, StyleSheet, ImageBackground, Text, View, Image, Alert} from 'react-native';
import react from 'react';
import iconLikeWhite from '../assets/heartWhite.png';
import iconComment from '../assets/icon_comment_white.png';
import iconShare from '../assets/icon_share_white.png';
import iconDownload from '../assets/icon_download_white.png';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

const ViewIcon =(props)=>{
     const {onClick, icon} = props;
     return(
          <View style={styles.icon}>
               <Pressable
                    style={({pressed})=> [{
                         backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'transparent',
                    }, styles.icon_style]}
                    onPress={onClick}
               >
                    <Image
                         source={icon}
                    />
                    
               </Pressable>
          </View>
     );
}

const HandleSaveFile= async(uriImg) =>{
     let path = uriImg.split('/');
     const file_name = path[path.length - 1];
     const fileUri = FileSystem.documentDirectory + file_name;

     FileSystem.downloadAsync(uriImg, fileUri)
     .then(({uri})=>{
          Save(uri);
     })
     .catch(err=>{
          Alert.alert("Something went wrong downloading");
     });
}

const Save=(uri)=>{
     const permission = MediaLibrary.requestPermissionsAsync();
     permission.then(permis=>{
          if(permis.status === 'granted'){
               const asset = MediaLibrary.createAssetAsync(uri);
               MediaLibrary.createAlbumAsync("Downloads", asset, false);
               Alert.alert("Success","Image was successfully downloaded!");
          }else{
               Alert.alert('Need permission to download images');
          }
     })
}

const DetailScreen=({route})=>{
     const item = route.params;
     return(
          <ImageBackground
               style={styles.wrapper_bg}
               source={{
                    uri: item.link
               }}
               resizeMode='cover'
          >
               <View style={styles.wapper_body}>
                    <Text style={styles.text_title}>{item.title}</Text>
                    <Text numberOfLines={3} ellipsizeMode='tail' style={styles.text_content}>{item.content}</Text>
                    <View style={styles.icon_wapper}>
                         <ViewIcon
                              icon={iconLikeWhite}
                         />
                         <ViewIcon
                              icon={iconComment}
                         />
                         <ViewIcon
                              icon={iconShare}
                         />
                         <ViewIcon
                              icon={iconDownload}
                              onClick={()=>HandleSaveFile(item.link)}
                         />
                    </View>
               </View>
          </ImageBackground>
     );
}

const styles = StyleSheet.create({
     wrapper_bg:{
          flex: 1,
          justifyContent: 'flex-end',
     },
     wapper_body:{
          height: 200,
          alignSelf: 'stretch',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          padding: 16,
     },
     text_title:{
          color: 'white',
          fontWeight: 'bold',
          marginBottom: 8,
          fontSize: 16
     },
     text_content:{
          fontWeight: 'normal',
          color: 'white',
          fontSize: 12
     },
     icon_wapper:{
          height: 100,
          flex: 1,
          alignSelf: 'stretch',
          flexDirection: 'row',
          marginTop: 8
     },
     icon:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
     },
     icon_style:{
          height: 50,
          width: 50,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'black',
          borderWidth: 2,
          shadowRadius: 3,
          shadowOffset: {width: 0, height: 0},
          shadowColor: '#fff',
          shadowOpacity: 1
     }
})

export default DetailScreen;
