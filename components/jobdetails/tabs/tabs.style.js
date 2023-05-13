import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.xLarge,
		marginBottom: SIZES.small / 2,
	},
	btn: (name, activeTab) => ({
		paddingVertical: 8,
		paddingHorizontal: SIZES.medium,
		borderRadius: SIZES.medium,
		marginLeft: 0,
		...SHADOWS.medium,
		shadowColor: COLORS.white,
		borderWidth: 1,
		borderColor: activeTab === name ? COLORS.secondary : COLORS.gray2,
	}),
	btnText: (name, activeTab) => ({
		fontFamily: 'DMMedium',
		fontSize: SIZES.small,
		color: activeTab === name ? COLORS.secondary : COLORS.gray2,
	}),
});

export default styles;
