import { useCallback, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Company, JobAbout, JobFooter, JobTabs, Specifics, ScreenHeaderBtn } from '../../components';
import { COLORS, SIZES, icons, images } from '../../constants';
import useFetch from '../../hooks/useFetch';

const JobDetails = () => {
	const params = useSearchParams();
	const router = useRouter();

	const { data, loading, error, refetch } = useFetch('job-details', { job_id: params.id });

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					title: 'Job Detail',
					headerTitleAlign: 'center',
					headerBackVisible: false,

					headerLeft: () => (
						<ScreenHeaderBtn
							icon={icons.left}
							dimensions='60%'
							handlePress={() => router.back()}
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn
							icon={icons.share}
							dimensions='50%'
						/>
					),
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}></ScrollView>
		</SafeAreaView>
	);
};

export default JobDetails;
