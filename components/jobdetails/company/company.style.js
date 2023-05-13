import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		marginVertical: SIZES.xLarge,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoBox: {
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		borderRadius: SIZES.large,
	},
	logoImage: {
		width: '80%',
		height: '80%',
	},
	jobTitleBox: {
		marginTop: SIZES.xLarge,
	},
	jobTitle: {
		fontSize: SIZES.large,
		color: COLORS.primary,
		fontFamily: FONT.bold,
		textAlign: 'center',
	},
	companyInfoBox: {
		marginTop: SIZES.xLarge / 2,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	companyName: {
		fontSize: SIZES.medium - 2,
		color: COLORS.primary,
		textTransform: 'capitalize',
		fontFamily: FONT.medium,
	},
	locationBox: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	locationImage: {
		width: 14,
		height: 14,
		tintColor: COLORS.gray,
	},
	locationName: {
		fontSize: SIZES.medium - 2,
		color: COLORS.gray,
		fontFamily: FONT.regular,
		marginLeft: 2,
	},
});

export default styles;
