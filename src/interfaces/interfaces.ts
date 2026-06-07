export interface iResponse {
  success: boolean;
  data: any;
  message?: string;
  error?: any;
}

export interface iClimateDetails {
  by: "default";
  valid_key: boolean;
  results: {
    temp: number;
    date: string; // 07/06/2026;
    time: string; // 09:01
    condition_code: string; // "29"
    description: string; // "Parcialmente nublado"
    currently: string; // "dia"
    woeid: number;
    city: string; // "São Paulo, SP"
    img_id: string; // "29"
    humidity: number;
    cloudiness: number;
    rain: number;
    wind_speedy: string; // "1.5 km/h"
    wind_direction: number;
    wind_cardinal: string; // "N"
    sunrise: string; // "06:43 am"
    sunset: string; // "05:27 pm"
    moon_phase: string; // "last_quarter"
    condition_slug: string; // "cloudly_day"
    city_name: string; // "São Paulo"
    timezone: string; // "-03:00"
    forecast: Array<{
      date: string; // "08/06"
      weekday: string; // "Terça-feira"
      max: number;
      min: number;
      condition: string; // "cloudly_day"
    }>;
    cref: string; // "669100"
  };
  execution_time: number;
  from_cache: boolean;
}
