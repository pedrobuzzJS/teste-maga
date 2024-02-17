import { useState, useEffect, useCallback } from "react";
import api from "@/services/api";
import { AxiosRequestConfig } from "axios";

export function useFetch<T = unknown>(
	url: string,
	options?: AxiosRequestConfig
) {
	const [data, setData] = useState<T | null>();
	const [statusCode, setStatus] = useState<any>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setloading] = useState(false);

	const fetch = useCallback(async () => {
		await setError(null);
		await setloading(true);
		await api(url, options)
			.then((response) => {
				const { data, status } = response;
				setData(data);
				setStatus(status);
			})
			.catch((erro) => {
				setError(erro);
			})
			.finally(() => {
				setloading(false);
			});
	}, [options, url]);

	useEffect(() => {
		fetch();
	}, []);

	return {
		data,
		statusCode,
		error,
		loading
	};
}
