import { StyleSheet } from 'react-native';

export const rateGamesStyles = StyleSheet.create({
	backdrop: {
		flex: 1,
		backgroundColor: 'rgba(23,31,43,0.32)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	popup: {
		backgroundColor: '#232a3d',
		padding: 24,
		borderRadius: 12,
		alignItems: 'center',
		width: 300,
	},
	title: {
		color: '#b3c7e6',
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 16,
	},
	input: {
		backgroundColor: '#181818',
		color: '#fff',
		borderRadius: 8,
		padding: 8,
		width: 60,
		textAlign: 'center',
		fontSize: 18,
		marginVertical: 12,
	},
	commentInput: {
		backgroundColor: '#181818',
		color: '#fff',
		borderRadius: 8,
		padding: 8,
		width: '100%',
		minHeight: 60,
		fontSize: 16,
		marginBottom: 12,
	},
	rateButton: {
		backgroundColor: '#FFD600',
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 32,
		marginTop: 8,
	},
	rateButtonText: {
		color: '#232a3d',
		fontWeight: '700',
		fontSize: 16,
	},
	close: {
		color: '#b3c7e6',
		marginTop: 12,
	},
});
