//https://www.printful.com/docs/files

import { Country } from '../types/countries';
import { APIFunctions, EmptyParameters } from '../types/functions';

// type Status = string;

const getCountryFunctions = ({ get }: APIFunctions) => {
  return {
    //Retrieve country list
    getCountryList: get<readonly Country[], EmptyParameters>(
      () => `/countries`
    ),
  };
};

export default getCountryFunctions;
