import {StyleSheet} from 'react-native'

export default StyleSheet.create({
	container: {
		backgroundColor: '#000',
		flex: 1,
		paddingTop: 20,
		paddingHorizontal: 10,
	},

	row: {
		flexDirection: 'row',
	},

	textinput: {
		borderWidth: 1,
		borderColor: '#3d3d3d',
		borderRadius: 4,
		paddingHorizontal: 10,
		backgroundColor: '#3d3d3d',
		// flex: 1,
		width: '80%',
		height: 40,
		marginBottom: 20,
	},

	primaryButton: {
		backgroundColor: '#e3e3e3',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		borderRadius: 4,
		marginHorizontal: 10,
		height: 40,
	},

	primaryButtonText: {
		color: '#000',
	},

	heading: {
		fontSize: 18,
		color: '#e3e3e3',
		marginVertical: 20,
	}
})