import axios from "axios";
import { CardProps, CompanyDetails } from "../Schema/schema";

export const getFilterdCardData = async (appliedFilters: string[]) => {
  return axios
    .get<CardProps[]>(`http://localhost:7000/getCompanyList`)
    .then((res) => {
      // TODO This should be handled by server.
      const cardListDetails = res.data;
      if (appliedFilters.length) {
        const filteredList = [];
        appliedFilters.forEach((name) => {
          const item = cardListDetails.find(
            (item) => item.title.toLowerCase() === name.toLowerCase()
          );
          if (item) filteredList.push(item);
        });
        return filteredList;
      } else return cardListDetails;
    });
};

export const getCompanyDetails = (comapnyName) => {
  return axios
    .get<CompanyDetails>(
      `http://localhost:7000/getCompanyDetails/${comapnyName}`
    )
    .then((res) => {
      return res.data;
    });
};
