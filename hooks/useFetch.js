import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		params: {
			...query,
		},
		headers: {
			'X-RapidAPI-Key': '5e79f0888amsh05f6da8af53c93cp1f73d2jsn73519964f562',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
	};

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await axios.request(options);
			setData(response.data.data);
			setLoading(false);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setLoading(true);
		fetchData();
	};

	return { data, loading, error, refetch };
};

export default useFetch;
