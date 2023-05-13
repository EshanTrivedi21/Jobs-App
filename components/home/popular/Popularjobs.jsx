import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { SIZES, COLORS } from '../../../constants';

import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popular Jobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>View All</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardsContainer}>
				{loading ? (
					<ActivityIndicator
						size='large'
						color={COLORS.primary}
					/>
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<FlatList
						data={[1, 2, 3, 4]}
						renderItem={({ item }) => <PopularJobCard item={item} />}
						keyExtractor={(item) => item?.job_id}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						horizontal
					/>
				)}
			</View>
		</View>
	);
};

export default Popularjobs;
