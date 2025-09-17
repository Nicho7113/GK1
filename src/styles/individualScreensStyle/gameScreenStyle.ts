import { semantic } from "@/theme/semantic";
import { StyleSheet } from "react-native";

export const gameScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 0,
        backgroundColor: semantic.color.bg,
	},
});
