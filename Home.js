/*
 * File: Home.js
 * Author: Borbély Gergő Árpád
 * Copyright: 2024, Borbély Gergő Árpád
 * Group: Szoft II/2/N
 * Date: 2024-04-03
 * Github: https://github.com/Gergo06-py
 * Licenc: GNU GPL
 */

import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
	const url = "http://localhost:3000/hangszerek";
	const [instruments, setInstruments] = useState([]);

	function getData() {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setInstruments(data))
			.catch((error) => console.error(error));
	}

	return (
		<View style={styles.container}>
			<Text>Főoldal</Text>
			<Pressable onPress={getData}>
				<Text>Hangszerek lekérése</Text>
			</Pressable>
			<View style={styles.flex}>
				<Text style={styles.flexText}>Id</Text>
				<Text style={styles.flexText}>Név</Text>
				<Text style={styles.flexText}>Típus</Text>
				<Text style={styles.flexText}>Márka</Text>
				<Text style={styles.flexText}>Év</Text>
			</View>
			<FlatList
				style={styles.list}
				data={instruments}
				renderItem={({ item }) => (
					<View style={styles.listFlex}>
						<Text style={styles.flexText}>{item["Id"]}</Text>
						<Text style={styles.flexText}>{item["Név"]}</Text>
						<Text style={styles.flexText}>{item["Típus"]}</Text>
						<Text style={styles.flexText}>{item["Márka"]}</Text>
						<Text style={styles.flexText}>{item["Év"]}</Text>
					</View>
				)}
			/>
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
	flex: {
		flexDirection: "row",
		width: "80vw",
	},
	flexText: {
		width: "100%",
		textAlign: "center",
	},
	listFlex: {
		flexDirection: "row",
		border: "2px solid gray",
	},
	list: {
		width: "80vw",
	},
});
