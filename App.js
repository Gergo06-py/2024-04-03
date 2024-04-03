/*
 * File: App.js
 * Author: Borbély Gergő Árpád
 * Copyright: 2024, Borbély Gergő Árpád
 * Group: Szoft II/2/N
 * Date: 2024-04-03
 * Github: https://github.com/Gergo06-py
 * Licenc: GNU GPL
 */

import ContactScreen from "./Contact";
import HomeScreen from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Főoldal" component={HomeScreen} />
				<Tab.Screen name="Névjegy" component={ContactScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
