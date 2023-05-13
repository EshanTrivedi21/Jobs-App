import React, { useState } from 'react';
import { Text, SafeAreaView, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { COLORS, SIZES, icons } from '../../constants';
import { ScreenHeaderBtn } from '../../components';
import useFetch from '../../hooks/useFetch';

const Search = () => {
	const params = useSearchParams();
    const router = useRouter();
    
    const { data, loading, error, refetch } = useFetch('search', { search: params });
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
        setRefreshing(true);
        refetch();
		setRefreshing(false);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					title: 'Search',
					headerTitleAlign: 'center',
					headerBackVisible: false,

					headerLeft: () => (
						<ScreenHeaderBtn
							icon={icons.left}
							dimensions='60%'
							handlePress={() => router.back()}
						/>
					),
				}}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				<Text>Search Results </Text>
				{loading ? (
					<ActivityIndicator
						size='large'
						style={{ marginTop: SIZES.xLarge }}
						color={COLORS.primary}
					/>
				) : error ? (
					<Text>Something went wrong</Text>
				) : data.length === 0 ? (
					<Text>No data found</Text>
				) : (
					<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
						<Text style={{ ...FONTS.h2, marginBottom: SIZES.small }}>Search Results for {params}</Text>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Search;
