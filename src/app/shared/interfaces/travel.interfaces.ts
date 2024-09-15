export interface FlightDetails {
  from: {
    cityCode: string;
    cityName: string;
    countryCode: string;
    countryName: string;
    utcTime: string;
  };
  to: {
    cityCode: string;
    cityName: string;
    countryCode: string;
    countryName: string;
    utcTime: string;
  };
  price: string;
}
