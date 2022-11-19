import { Box, TextField, Button } from "@mui/material";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";

const TableData = ({ title, data, columns, searchable, searchBy }) => {
	const [filterText, setFilterText] = useState("");
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = data.filter(
		(item) =>
			item[searchable] && item[searchable].toLowerCase().includes(filterText.toLowerCase())
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText("");
			}
		};

		return (
			<Box>
				<TextField
					id="search"
					name="search"
					placeholder={searchBy || "Search"}
					variant="outlined"
					value={filterText}
					onChange={(e) => setFilterText(e.target.value)}
					size="small"
				/>
				<Button variant="contained" onClick={handleClear}>
					Clear
				</Button>
			</Box>
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<DataTable
			title={title}
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			persistTableHead
			subHeaderComponent={subHeaderComponentMemo}
		/>
	);
};

export default TableData;
