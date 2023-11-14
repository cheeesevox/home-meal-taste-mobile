import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CustomerHeader from "../../components/CustomerComponents/CustomerHeader";
import SearchFilter from "../../components/CustomerComponents/searchfilter";

const CustomerList = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
			{/* render header */}
			<CustomerHeader/>

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"enter your favorte food"} />

			{/* Categories filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
				{/* Categories list */}
				
			</View>

			{/* List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
				{/*  list */}

				
			</View>
		</SafeAreaView>
	);
};

export default CustomerList;

const styles = StyleSheet.create({});
