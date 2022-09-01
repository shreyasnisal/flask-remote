import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connect from '../routes/connect/Connect'
import Remote from '../routes/remote/Remote'

const Stack = createNativeStackNavigator();

function Navigator() {
	
	return (
		<NavigationContainer>
      		<Stack.Navigator
				screenOptions={{
					headerStyle: {
					  backgroundColor: '#3d3d3d',
					},
					headerTintColor: '#fff',
				  }}
			>
        		<Stack.Screen name = "Connect" component = {Connect} />
				<Stack.Screen name = "Remote" component = {Remote} />
      		</Stack.Navigator>
    	</NavigationContainer>
	)
}

export default Navigator