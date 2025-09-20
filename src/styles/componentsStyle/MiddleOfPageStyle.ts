import { StyleSheet } from "react-native";
import { semantic } from "@/theme/semantic";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const middleOfPageStyles = StyleSheet.create({
	infoWrapper: {
		width: '100%',
		marginTop: hp(1.2),
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	infoText: {
		color: '#8fa1c7',
		fontSize: 13,
		fontWeight: '400',
		marginBottom: 2,
	},
	middleSection: {
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		width: '100%',
		marginTop: hp(10),
		paddingLeft: wp(2),
		paddingRight: wp(2),
	},
	rateButtonWrapper: {
		alignSelf: 'flex-end',
		marginBottom: hp(2),
	},
	descriptionWrapper: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginTop: hp(2),
	},
	description: {
		color: '#e0e4ea',
		fontSize: 16,
		fontWeight: '400',
		lineHeight: 22,
	},
	rateButton: {
		backgroundColor: '#FFD600', 
		borderWidth: 1,
		borderColor: '#ffe066',
		paddingVertical: hp(1.2),
		paddingHorizontal: wp(8),
		borderRadius: wp(3),
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#FFD600',
		shadowOpacity: 0.18,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		elevation: 4,
	},
	rateButtonText: {
		color: '#232a3d',
		fontWeight: '700',
		fontSize: semantic.font.body,
		letterSpacing: 0.5,
	},
});
