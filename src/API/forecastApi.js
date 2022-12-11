import { host } from ".";

export const getForecast = async (symbol) => {
    const { data } = await host.get(`api/stock/${symbol}`);
    return data;
};
