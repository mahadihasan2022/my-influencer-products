import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  XAxis,
  YAxis,
} from "recharts";
import "./DashBoard.css";
const DashBoard = () => {
  const data = [
    {
      month: "Mar",
      investment: 25,
      sell: 24,
      revenue: 20,
      year: 2017,
    },
    {
      month: "Apr",
      investment: 40,
      sell: 36,
      revenue: 28,
      year: 2018,
    },
    {
      month: "May",
      investment: 30,
      sell: 28,
      revenue: 39,
      year: 2019,
    },
    {
      month: "Jun",
      investment: 22,
      sell: 38,
      revenue: 32,
      year: 2020,
    },
    {
      month: "Jul",
      investment: 30,
      sell: 27,
      revenue: 20,
      year: 2021,
    },
    {
      month: "Aug",
      investment: 39,
      sell: 35,
      revenue: 29,
      year: 2022,
    },
  ];
  return (
    <div className="p-8 charts-container">
      <h2 className="text-2xl font-bold text-center p-8">
        Its Our Website DeshBord.
      </h2>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-xl font-bold text-center p-8">
            Investment Vs Revenue
          </h3>
          <LineChart width={500} height={350} data={data}>
            <Line dataKey={"investment"}></Line>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={"sell"}></YAxis>
            <Line dataKey={"revenue"}></Line>
          </LineChart>
        </div>
        <div>
          <h3 className="text-xl font-bold text-center p-8">
            Sell Vs Investment
          </h3>
          <BarChart width={500} height={400} data={data}>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={"revenue"}></YAxis>
            <Bar dataKey={"investment"} barSize={30} fill="#8884d8"></Bar>
            <Bar dataKey={"sell"} barSize={30} fill="#2ff3d3"></Bar>
          </BarChart>
        </div>
        <div>
          <h3 className="text-xl font-bold text-center p-8">
            Month Vs Sell Vs Investment
          </h3>
          <AreaChart width={600} height={400} data={data}>
            <XAxis dataKey={"year"}></XAxis>
            <YAxis dataKey={"revenue"}></YAxis>
            <Area dataKey={"month"}></Area>
            <Area dataKey={"sell"}></Area>
            <Area dataKey={"investment"}></Area>
          </AreaChart>
        </div>
        <div>
          <h3 className="text-xl font-bold text-center p-8">
            Investment Vs Sell
          </h3>
          <RadarChart outerRadius={90} width={500} height={400} data={data}>
            <PolarAngleAxis dataKey={"year"}></PolarAngleAxis>
            <PolarRadiusAxis angle={30} domain={[0, 150]}></PolarRadiusAxis>
            <Radar
              name="Mike"
              dataKey={"sell"}
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            ></Radar>
            <Radar
              name="Lily"
              dataKey={"investment"}
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            ></Radar>
          </RadarChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
