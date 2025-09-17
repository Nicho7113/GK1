import { StyleSheet } from "react-native";
import { semantic } from "@/theme/semantic";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { size } from "react-native-responsive-sizes";
import { fontSize } from "react-native-responsive-sizes";
export const commentSectionStyles = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: hp(2),
		paddingHorizontal: wp(4),
		alignItems: 'flex-start',
	},
	title: {
		fontSize: semantic.font.sectionTitle,
		fontWeight: '700',
		color: '#b3c7e6',
		marginBottom: hp(1),
	},
	commentBox: {
		backgroundColor: '#232a3d',
		borderRadius: wp(2),
		padding: wp(3),
		marginBottom: hp(1.5),
		width: '100%',
		shadowColor: '#000',
		shadowOpacity: 0.08,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 2,
		minHeight: hp(8),
		maxHeight: hp(8),
		overflow: 'hidden',
		justifyContent: 'center',
	},
	user: {
		fontWeight: '600',
		color: '#6a8bbf',
		marginBottom: hp(0.5),
		fontSize: 13,
	},
	comment: {
		color: '#e0e4ea',
		fontSize: fontSize(10),
		lineHeight: size(25),
	},
});
