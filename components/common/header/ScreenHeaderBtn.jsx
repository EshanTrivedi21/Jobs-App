import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './screenheader.style';

const ScreenHeaderBtn = ({ icon, dimensions, handlePress }) => {
	return (
		<TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
			<Image
				source={icon}
				resizeMode='cover'
				style={styles.btnImg(dimensions)}
			/>
		</TouchableOpacity>
	);
};

export default ScreenHeaderBtn;
