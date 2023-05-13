import { useCallback, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Company, JobAbout, JobFooter, JobTabs, Specifics, ScreenHeaderBtn } from '../../components';
import { COLORS, SIZES, icons, images } from '../../constants';
import useFetch from '../../hooks/useFetch';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = () => {
	const params = useSearchParams();
	const router = useRouter();

	const { data, loading, error, refetch } = useFetch('job-details', { job_id: params.id });

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		refetch();
		setRefreshing(false);
	}, []);

	const [activeTab, setActiveTab] = useState(tabs[0]);

	const displayTab = () => {
		switch (activeTab) {
			case 'About':
				return <JobAbout info={data[0].job_description ?? 'No Data Provided'} />;
			case 'Qualifications':
				return (
					<Specifics
						title='Qualifications'
						points={data[0].job_highlights?.Qualifications ?? ['Not Provided']}
					/>
				);
			case 'Responsibilities':
				return (
					<Specifics
						title='Qualifications'
						points={data[0].job_highlights?.Responsibilities ?? ['Not Provided']}
					/>
				);
			default:
				break;
		}
	};

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
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
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
						<Company
							logo={data[0].employer_logo}
							title={data[0].job_title}
							company={data[0].employer_name}
							location={data[0].job_country}
						/>
						<JobTabs
							tabs={tabs}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						{displayTab()}
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default JobDetails;
