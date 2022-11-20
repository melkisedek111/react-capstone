import React from "react";
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
    const labels = ["January", "February", "March", "April", "May", "June", "July"];

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
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Dataset 2",
				data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	return (
		<div>
			<Bar options={options} data={data}  />;
		</div>
	);
};

export default BarChart;
