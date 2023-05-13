import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
	const router = useRouter();

	const [search, setSearch] = useState('');

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					title: 'Home',
					headerTitleAlign: 'center',
					headerLeft: () => (
						<ScreenHeaderBtn
							icon={icons.menu}
							dimensions='60%'
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn
							icon={images.profile}
							dimensions='80%'
						/>
					),
				}}
			/>
			<ScrollView>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome
						search={search}
						setSearch={setSearch}
						handleClick={() => {
							if (search) {
								router.push(`/search/${search}`)
							}
						}}
					/>
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
