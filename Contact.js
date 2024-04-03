/*
 * File: Contact.js
 * Author: Borbély Gergő Árpád
 * Copyright: 2024, Borbély Gergő Árpád
 * Group: Szoft II/2/N
 * Date: 2024-04-03
 * Github: https://github.com/Gergo06-py
 * Licenc: GNU GPL
 */

import { StyleSheet, Text, View } from "react-native";

export default function ContactScreen() {
	return (
		<View style={styles.container}>
			<Text>Névjegy</Text>
			<View>
				<Text>Borbély Gergő Árpád</Text>
				<Text>Szoft II/2/N</Text>
				<Text>2024. 04. 03</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
