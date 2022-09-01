import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const Remote = ({ navigation, route }) => {

	const ipAddr = route.params.ipAddr

	function leftArrowClick() {
		fetch("http://" + ipAddr + "/left").then(res => res.json()).then(json => {
			console.log(json)
		}).catch(err => {
			console.log(err)
		})
	}

	function rightArrowClick() {
		fetch("http://" + ipAddr + "/right").then(res => res.json()).then(json => {
			console.log(json)
		}).catch(err => {
			console.log(err)
		})
	}

	function spaceBarClick() {
		fetch("http://" + ipAddr + "/space").then(res => res.json()).then(json => {
			console.log(json)
		}).catch(err => {
			console.log(err)
		})
	}

	function closeClick() {
		fetch("http://" + ipAddr + "/close").then(res => res.json()).then(json => {
			console.log(json)
		}).catch(err => {
			console.log(err)
		})
	}

	function sleepClick() {
		fetch("http://" + ipAddr + "/sleep").then(res => res.json()).then(json => {
			console.log(json)
		}).catch(err => {
			console.log(err)
		})
	}

	return (
		<View style={styles.container}>
			<View style = {styles.row}>
				<TouchableOpacity
					style = {styles.primaryButton}
					onPress = {leftArrowClick}
				>
					<Icon name = "arrow-left" size={24} color = {"#000"} />
				</TouchableOpacity>
				<TouchableOpacity
					style = {styles.primaryButton}
					onPress = {rightArrowClick}
				>
					<Icon name = "arrow-right" size={24} color = {"#000"} />
				</TouchableOpacity>
				<TouchableOpacity
					style = {styles.primaryButton}
					onPress = {closeClick}
				>
					<Icon name = "close" size={24} color = {"#000"} />
				</TouchableOpacity>
				<TouchableOpacity
					style = {styles.primaryButton}
					onPress = {sleepClick}
				>
					<Icon name = "lock" size={24} color = {"#000"} />
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				onPress = {spaceBarClick}
				style = {[styles.primaryButton, styles.spaceBarButton]}
			/>
		</View>
	)
}

export default Remote