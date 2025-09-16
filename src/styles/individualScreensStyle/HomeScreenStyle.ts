import { StyleSheet } from "react-native";
import { semantic } from "@/theme/semantic";
import { size, fontSize } from "react-native-responsive-sizes";

export const homeScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: semantic.color.bg,
	},
	scrollContent: {
		paddingHorizontal: size(12),
		paddingBottom: size(48),
	},
	sectionTitle: {
		color: semantic.color.text,
		fontSize: semantic.font.sectionTitle,
		fontWeight: 'bold',
		marginTop: size(18),
	},
});
