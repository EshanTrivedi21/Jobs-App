import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: SIZES.medium,
		backgroundColor: '#FFF',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		...SHADOWS.large,
	},
	likeBtn: {
		width: 40,
		height: 40,
		borderWidth: 1,
		borderColor: '#F37453',
		borderRadius: SIZES.medium,
		justifyContent: 'center',
		alignItems: 'center',
	},
	likeBtnImage: {
		width: '40%',
		height: '40%',
		tintColor: '#F37453',
	},
	applyBtn: {
		flex: 1,
		backgroundColor: '#FE7654',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: SIZES.medium,
		borderRadius: SIZES.medium,
	},
	applyBtnText: {
		fontSize: SIZES.medium,
		color: COLORS.white,
		fontFamily: FONT.bold,
	},
});

export default styles;
