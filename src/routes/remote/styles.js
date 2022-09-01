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
		justifyContent: 'space-between'
	},

	primaryButton: {
		backgroundColor: '#e3e3e3',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 24,
		paddingVertical: 20,
		borderRadius: 4,
		marginHorizontal: 10,
		marginBottom: 20,
	},

	spaceBarButton: {
		height: 50,
	},
})