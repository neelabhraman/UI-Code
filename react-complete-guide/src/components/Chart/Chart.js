import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

const Chart = props => {
    const valueArr=props.dataPoints.map(item => item.value);
    const totalMax=Math.max(...valueArr);
    return (
        <div className="chart">
            {props.dataPoints.map(item => <ChartBar key={item.label}
                                                    value={item.value}
                                                    maxValue={totalMax}
                                                    label={item.label}></ChartBar>)}
        </div>
    );
}

export default Chart;