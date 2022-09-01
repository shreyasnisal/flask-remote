import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'

const Connect = ({navigation}) => {

	const [ipAddr, setIpAddr] = useState("")
	const [deviceNickname, setDeviceNickname] = useState("")
	const [savedDevices, setSavedDevices] = useState({})

	const getPreviousDevices = useEffect(() => {
		async function loadData() {
			try {
				const devicesStr = await AsyncStorage.getItem("devices")
				if (devicesStr != null) {
					const devices = JSON.parse(devicesStr)
					setSavedDevices(devices)
					for (let device in devices) {
						console.log(device, devices[device])
					}
				}
			}
			catch (err) {
				console.log(err)
			}
		}

		loadData()
	}, [])

	const storeSavedDevices = useEffect(() => {
		AsyncStorage.setItem("devices", JSON.stringify(savedDevices))
	}, [savedDevices])

	function onClickConnect() {
		console.log("Connecting to: " + ipAddr)
		fetch("http://" + ipAddr + "/ready").then(res =>  res.json()).then (json => {
			if (json.message == "ready") {
				console.log("Connected")

				setSavedDevices(current => ({...current, [ipAddr]: deviceNickname !== "" ? deviceNickname : ipAddr}))

				navigation.replace("Remote", {ipAddr: ipAddr})
			}
		}).catch(err => {
			console.log(err)
		})
	}

	return (
		<View style={styles.container}>
			<View style = {styles.row}>
				<TextInput
					style = {styles.textinput}
					autoFocus
					placeholder = "Enter Server IP:Port"
					placeholderTextColor = {'#e3e3e3'}
					onChangeText = {text => setIpAddr(text)}
					value = {ipAddr}
				/>
			</View>

			<View style = {styles.row}>
				<TextInput
					style = {styles.textinput}
					placeholder = "Device Nickname (Optional)"
					placeholderTextColor = {'#e3e3e3'}
					onChangeText = {text => setDeviceNickname(text)}
					value = {deviceNickname}
				/>
				<TouchableOpacity
					style = {styles.primaryButton}
					onPress = {onClickConnect}
				>
					<Text style = {styles.primaryButtonText}>Connect</Text>
				</TouchableOpacity>
			</View>

			<Text style = {styles.heading}>
				Previous Connections
				<View style = {styles.deviceList}>
					{savedDevices && savedDevices.map((device, ip) => {
						return (
							<TouchableOpacity
								style = {styles.prevDevice}
								onPress = {ip => onPressPrevDevice(ip)}
							>
								{device}
							</TouchableOpacity>
						)
					})}
				</View>
			</Text>
		</View>
	)
}

export default Connect