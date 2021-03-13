import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, StyleSheet, Dimensions, Platform, View } from 'react-native'
import {AntDesign, MaterialCommunityIcons, Feather} from '@expo/vector-icons'

import HomeScreen from './src/screens/Home';
import TransactionsScreen from './src/screens/Transactions';
import InitialScreen from './src/screens/Initial';
import DetailsScreen from './src/screens/Details';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs (){
  return(
    <Tab.Navigator
        initialRouteName="Initial"
        
        tabBarOptions={{
            style:{
                backgroundColor: "#fff",
                paddingBottom:0,
                borderTopColor: '#f1f1f1',
                borderTopWidth:1
            },
            activeTintColor:'#EC008C',
            inactiveTintColor:'#000',
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({size, focused}) =>{
                  return(
                    <AntDesign
                      name="home"
                      size={size}
                      color={focused ? '#EC008C' : '#000'}
                    />
                  )
                },
                title:'Início',
              }}
            />
            <Tab.Screen 
            name="Search" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({size, focused}) =>{
                  return(
                    <Feather
                      name="shopping-bag"
                      size={size}
                      color={focused ? '#EC008C' : '#000'}
                    />
                  )
                },
                title:'Compras',
              }}
            />
            <Tab.Screen 
            name="new" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({size, focused}) =>{
                  return(
                    <MaterialCommunityIcons
                      name="barcode-scan"
                      size={size}
                      color={focused ? '#EC008C' : '#000'}
                    />
                  )
                },
                title:'Pagar',
              }}
            />

            <Tab.Screen 
            name="Downloads" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({size, focused}) =>{
                  return(
                    <MaterialCommunityIcons
                      name="content-copy"
                      size={size}
                      color={focused ? '#EC008C' : '#000'}
                    />
                  )
                },
                title:'Cartões',
              }}
            />

            <Tab.Screen 
            name="More" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({size, focused}) =>{
                  return(
                    <MaterialCommunityIcons
                      name="receipt"
                      size={size}
                      color={focused ? '#EC008C' : '#000'}
                    />
                  )
                },
                title:'Carnês',
              }}
            />
        </Tab.Navigator>
  )
}



const styles = StyleSheet.create({
  statusbar:{
      zIndex:1,
      position:"absolute",
      top:0,
      left:0,
      width:Dimensions.get("window").width,
      height:20,
      backgroundColor:"#fff",
  }
})
export default function App(){
  return (
    <>
    <StatusBar style={"light"} background="#000"/>
    {
      Platform.OS === 'ios'
        ? <View style={styles.statusbar} />
        : <View style={styles.statusbar} />
    }
   <NavigationContainer>
    <Stack.Navigator >
     
      <Stack.Screen 
      name="Initial" 
      component={InitialScreen}
      options={{
        title:'banQi',
        headerBackTitleVisible:false,
        
      }}/>
      <Stack.Screen 
      name="Home" 
      component={Tabs}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name="Transactions" 
      component={TransactionsScreen}
      options={{
        title:'Suas transações',
        headerBackTitleVisible:false
      }}/>
      <Stack.Screen 
      name="Details" 
      component={DetailsScreen}
      options={{
        title:'Detalhes da transação',
        headerBackTitleVisible:false,
        
      }}/>
    </Stack.Navigator>
   </NavigationContainer>
   </>
  )

}