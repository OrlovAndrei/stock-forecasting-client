import React, { useState } from "react";
import { getForecast } from "./API/forecastApi";

function App() {
    const [symbol, setSymbol] = useState("");
    const [data, setData] = useState({});

    return (
        <div className="App">
            <input value={symbol} onChange={(e) => setSymbol(e.target.value)} />
            <button onClick={async () => setData(await getForecast(symbol))}>
                Построить график
            </button>
            <div>{JSON.stringify(data.historicData)}</div>
        </div>
    );
}

export default App;
