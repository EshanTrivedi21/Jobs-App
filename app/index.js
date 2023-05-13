import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
	const router = useRouter();
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
							dimensions='100%'
						/>
					),
				}}
			/>
			<ScrollView>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome />
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
