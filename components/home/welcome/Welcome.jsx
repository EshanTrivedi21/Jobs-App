import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { SIZES, icons } from '../../../constants';

const jobTypes = ['Full Time', 'Part Time', 'Internship'];

const Welcome = () => {
	const router = useRouter();

	const [value, setValue] = useState('');
	const [activeJobType, setActiveJobType] = useState(jobTypes[0]);

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Eshan</Text>
				<Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value={value}
						placeholder='What are you looking for?'
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
				</View>
				<TouchableOpacity
					style={styles.searchBtn}
					onPress={() => {}}
				>
					<Image
						source={icons.search}
						resizeMode='contain'
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
							}}
						>
							<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
				/>
			</View>
		</View>
	);
};

export default Welcome;
