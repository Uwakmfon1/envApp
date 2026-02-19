import { Stack, Tabs } from "expo-router";
import "../../global.css";
import {Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'#ffd33d',
        headerStyle: {
          backgroundColor:'#25292e',
        },
      }}
    >      
      <Tabs.Screen 
        name="index" 
        options={{ 
          headerTitle:"Index", 
          tabBarIcon:({focused,color})=> (<Ionicons name={focused ? "home-sharp" : "home-outline"} size={30} color={color} />)
        }} />
        
      <Tabs.Screen 
        name="about" 
        options={{ 
          headerTitle:"About", 
          tabBarIcon:({focused,color})=>(<Ionicons name={focused ? "information-circle-sharp":"information-circle-outline"} size={30} color={color} />),
        }} />
    </Tabs>
  );
}
