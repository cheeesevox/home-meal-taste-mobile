import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, } from "react-native";
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons'
import { useRef } from "react";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
	// collect data
	const[phone, setPhone] = useState("");
	const[password, setPassword] = useState("");


	// //create toast message ref 
	// const [toastType, setToastType] = useState('success')
	// const toastRef =useRef(null);

	// const handleShowToast = () =>{
	// 	if(toastRef.current){
	// 		toastRef.current.show();
	// 	};
	// }
	
	// get set
	const onChagePhone = (value) =>{
		// phone="0782364722"
		setPhone(value)
	}
	const onChagePassword = (value) =>{
		setPassword(value)
		// password="123123"
	}

	//button login
	const onClickLogin = () =>{
		
		if(phone.length == 0 || password.length == 0){
            navigation.navigate("Home")
			return console.log("Please enter login infomation");
		}
		// else{
		// 	setToastType('success');
		// 	handleShowToast()
		// 	navigation.navigate("FoodList")
		// }
		// console.log('Click login', {
		// 	phone,
		// 	password, 
		// })
		axios({
			url :'https://homemealtaste.azurewebsites.net/api/User/login',
			method: 'POST',
			data:{
				phone : phone,
				password : password,
			},
		}).then((result) => {
			console.log(result.data);
			console.log("Handle Login")
		}).catch((err) => {
			setErrorMessage(err.respone.data.er);
			setShowModal(true);
		});
	};

	return (
		<View style={{}}>
			<View style={{justifyContent:"center", alignItems:"center"}}>
				
				{/* <ToastMessage
				type={toastType}
				text='Login successfuly'
				description='Login succes'
				ref={toastRef}
				/> */}

			</View>
			<View style={{justifyContent:"center", alignItems:"center"}}>
				<Image
					// source={require("../../assets/images/loginimage.png")}r
					style={{ marginTop: 100, justifyContent:"center", alignItems:"center" }}
				/>
				<Text
					style={{
						marginTop:20,
						fontSize: 30,
						fontWeight: "bold",
						justifyContent:"center",
						alignItems:"center",
						color: "#3c444c",
					}}
				>
					Home Meal Taste
				</Text>
					<Text
					style={{
						fontSize: 25,
						fontWeight: "bold",
						color: 'red',
					}}
				>
					Welcome Back!
					</Text>
					
				</View>
				<View style={{paddingTop:30}}>
					<View style={{paddingLeft:10,marginHorizontal:40, flexDirection:'row', borderColor:'grey', borderWidth:1, borderRadius:10, marginBottom:10}}>
						<View style={{justifyContent:"center", alignItems:"center",}}>
							<Ionicons name="call-outline" size={20}>
							</Ionicons>
						</View>
						
						<View>
							<View style={{ padding:20}}>
								<TextInput placeholder="Your Phone Numbers" 
								value={phone}
								width={280}
								 onChangeText={onChagePhone}></TextInput>
							</View>
						</View>
					</View>

					<View style={{paddingLeft:10,marginHorizontal:40, flexDirection:'row', borderColor:'grey', borderWidth:1, borderRadius:10,}}>
						<View style={{justifyContent:"center", alignItems:"center",}}>
							<Ionicons name="lock-closed-outline" size={20}>
							</Ionicons>
						</View>
							<View style={{padding:20}}
							>
								<TextInput placeholder="Your Password"
								 value={password}
								 secureTextEntry={true}
								width={280}
								onChangeText={onChagePassword}>
								</TextInput>
							</View>

					</View >
				</View>
					<View style={{justifyContent:"center", alignItems:"center"}}>
					<TouchableOpacity
				// onPress={() => navigation.navigate("FoodList")}
				onPress={onClickLogin}
				type=''
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					marginTop:60,
					justifyContent:"center",
					paddingVertical: 18,
					width: "60%",
					alignItems: "center",
					
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700",}}>
					Login
				</Text>
			</TouchableOpacity>
			</View>
			<View style={{justifyContent:"center",alignItems:"center"}}>
				<Text style={{marginTop:50}}>
					If You Don't Have An Account ?
				</Text>
				<View>
						<TouchableOpacity 
						onPress={() => navigation.navigate("Regiter")}
						style={{ borderWidth:10,borderColor:'white',borderRadius:10,marginTop:20 ,color:'white',justifyContent:"center",alignItems:"center"}}>
							<Text style={{color:'black',fontWeight:'500',}}>Regiter Account</Text>
						</TouchableOpacity>
					</View>
			</View>
			<View style={{justifyContent:"center",alignItems:"center"}}>
				<Text style={{marginTop:50}}>
					If You Don't Remeber Your Account or Password ?
				</Text>
				<View>
						<TouchableOpacity 
						onPress={() => navigation.navigate("ForgotPassword")}
						style={{ borderWidth:10,borderColor:'white',borderRadius:10,marginTop:20 ,color:'white',justifyContent:"center",alignItems:"center"}}>
							<Text style={{color:'black',fontWeight:'500',}}>Forgot Password</Text>
						</TouchableOpacity>
					</View>
			</View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});
