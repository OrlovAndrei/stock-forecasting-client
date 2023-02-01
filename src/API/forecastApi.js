import { host } from ".";

export const getForecast = async (symbol, method = "ssa") => {
    const { data } = await host.get(
        `api/stock/getforecast?symbol=${symbol}&method=${method}`
    );
    return data;
};

export const getMethods = async () => {
    const { data } = await host.get(`api/stock/getmethods`);
    return data;
};
