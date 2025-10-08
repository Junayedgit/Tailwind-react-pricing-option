import { X } from "lucide-react";
import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Ayaan Rahman",
    physics: 85,
    chemistry: 78,
    mathematics: 92,
  },
  {
    id: 2,
    name: "Mahiya Chowdhury",
    physics: 74,
    chemistry: 81,
    mathematics: 88,
  },
  {
    id: 3,
    name: "Zayan Hossain",
    physics: 90,
    chemistry: 84,
    mathematics: 95,
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    physics: 69,
    chemistry: 72,
    mathematics: 80,
  },
  {
    id: 5,
    name: "Arif Hasan",
    physics: 88,
    chemistry: 90,
    mathematics: 85,
  },
  {
    id: 6,
    name: "Tania Islam",
    physics: 77,
    chemistry: 70,
    mathematics: 82,
  },
  {
    id: 7,
    name: "Rafiul Karim",
    physics: 91,
    chemistry: 89,
    mathematics: 93,
  },
  {
    id: 8,
    name: "Mehzabin Akter",
    physics: 64,
    chemistry: 68,
    mathematics: 73,
  },
  {
    id: 9,
    name: "Siam Ahmed",
    physics: 79,
    chemistry: 85,
    mathematics: 87,
  },
  {
    id: 10,
    name: "Tamanna Noor",
    physics: 93,
    chemistry: 91,
    mathematics: 96,
  },
];

const ResultChart = () => {
  return (
    <div className="flex justify-center my-12">
      <LineChart width={1000} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={"physics"}></Line>
        <Line dataKey={"mathematics"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
