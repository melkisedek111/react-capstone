import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";
import { useGetDashboardChartDataMutation } from "../../../../redux/api/apartment.api";

ChartJS.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
const BarChart = () => {
	const [getDashboardChartData, getDashboardChartDataResponse] = useGetDashboardChartDataMutation();
	const [dataset, setDataSet] = useState([]);
    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const backgroundColor = [
		"rgba(200, 55, 173, 0.9)",
		"rgba(237, 58, 67, 0.6)",
		"rgba(217, 164, 118, 0.7)",
		"rgba(157, 136, 125, 0.6)",
		"rgba(205, 82, 141, 0.4)",
		"rgba(7, 159, 131, 0.5)",
		"rgba(199, 85, 155, 0.9)",
		"rgba(64, 77, 244, 0.4)",
		"rgba(100, 119, 190, 0.3)",
		"rgba(130, 38, 41, 0.2)",
	]
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Apartment Data by Types",
			},
		},
	};
	const data = {
		labels,
		datasets: dataset,
	};

	useEffect(() => {
		getDashboardChartData();
	}, []);

	useEffect(() => {

		if (getDashboardChartDataResponse?.isSuccess) {
			const { result } = getDashboardChartDataResponse.data;
			if (JSON.stringify(dataset) !== JSON.stringify(result.dataset)) {
				const modifiedDataSet = result.dataset.map((data, index) => ({...data, backgroundColor: backgroundColor[index]}))
				setDataSet(modifiedDataSet);
			}
		}
	}, [getDashboardChartDataResponse]);
	return (
		<div>
			<Bar options={options} data={data}  />;
		</div>
	);
};

export default BarChart;
