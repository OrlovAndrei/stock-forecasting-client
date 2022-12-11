import React, { useState } from "react";
import { getForecast } from "./API/forecastApi";

function App() {
    const [symbol, setSymbol] = useState("");
    const [data, setData] = useState(null);

    return (
        <div className="App">
            <input value={symbol} onChange={(e) => setSymbol(e.target.value)} />
            <button onClick={async () => setData(await getForecast(symbol))}>
                Построить график
            </button>
            <div>{data ? JSON.stringify(data.historicData) : "no data"}</div>
        </div>
    );
}

export default App;
