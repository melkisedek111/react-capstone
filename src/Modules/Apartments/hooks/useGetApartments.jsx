import { useEffect, useState } from "react";
import { useGetApartmentByTypeMutation } from "../../../redux/api/apartment.api";

export const useGetApartments = () => {
	const [getApartmentByType, getApartmentByTypeResponse] = useGetApartmentByTypeMutation();
	const [apartments, setApartments] = useState([]);
    const [isApartmentsLoading, SetIsApartmentsLoading] = useState(false);
    const [apartmentCount, setApartmentCount] = useState(0);

	useEffect(() => {
		getApartmentByType();
	}, []);

	useEffect(() => {
		if (getApartmentByTypeResponse.isLoading) {
			SetIsApartmentsLoading(true);
		}

		if (getApartmentByTypeResponse?.isSuccess) {
			const { result } = getApartmentByTypeResponse.data;
			if (result?.data) {
				const data = Object.values(result.data);
				if (JSON.stringify(apartments) !== JSON.stringify(result)) {
					setTimeout(() => {
						SetIsApartmentsLoading(false);
                        setApartmentCount(result.pageCount);
						setApartments(data);
					}, 2500);
				}
			}
		}
	}, [getApartmentByTypeResponse]);

	return { isApartmentsLoading, apartments, getApartmentByType, apartmentCount };
};
