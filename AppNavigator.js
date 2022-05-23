import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet} from 'react-native';
import MainScreen from './Screen/MainScreen';
import DetailScreen from './Screen/DetailScreen';
import backIcon from './assets/back.png';

const Stack = createNativeStackNavigator();

const AppNavigator=()=>{
     return(
          <SafeAreaView style={{flex: 1}}>
               <NavigationContainer>
                    <Stack.Navigator initialRouteName="MainScreen">

                         <Stack.Screen name="MainScreen" component={MainScreen} options={{
                              title: "Main Screen",
                              headerStyle: styles.headerStyle,
                              contentStyle: styles.contentStyle,
                              headerTitleStyle: {color: 'white'},
                              headerTitleAlign: 'center',
                         }}/>
                         <Stack.Screen name="DetailScreen" component={DetailScreen} options={{
                              title: "Detail Screen",
                              headerStyle: styles.headerStyle,
                              contentStyle: styles.contentStyle,
                              headerTitleStyle: {color: 'white'},
                              headerTitleAlign: 'center',
                              // headerBackImageSource: backIcon,
                         }}/>
                         
                    </Stack.Navigator>
               </NavigationContainer>
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     headerStyle:{
          backgroundColor: '#1c1c1c',
          shadowColor: 'white',
          shadowOpacity: 0.4,
          shadowRadius: 5,
          shadowOffset: {width: 0, height: 0},
          color: 'white',
     },
     contentStyle:{
          backgroundColor: '#272727',
          borderTopColor: '#2323',
          borderWidth: 2
     }
})

export default AppNavigator;
