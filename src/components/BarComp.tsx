import { useEffect, useState } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell } from "recharts";

function BarComp() {
  const colors = ["rgba(60, 54, 121, 1)", "rgba(250, 224, 225, 1)"];
  const Mdata = [6, 2, 5, 4, 8, 7, 4]; // Corrected to match data
  const MaxData = Math.max(...Mdata); // Find max value from Mdata

  const data = [
    { name: "M", M: 6 },
    { name: "T", M: 2 },
    { name: "W", M: 5 },
    { name: "T", M: 4 },
    { name: "F", M: 8 },
    { name: "S", M: 7 },
    { name: "S", M: 4 },
  ];

  const [dimensions, setDimensions] = useState({
    width: GetWidth(),
    height: GetHeight(),
  });

  function GetWidth() {
    if (window.innerWidth < 768) return 100;
    if (window.innerWidth < 992) return 140;
    return 160;
  }

  function GetHeight() {
    if (window.innerWidth < 768) return 90;
    if (window.innerWidth < 992) return 110;
    return 120;
  }

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: GetWidth(),
        height: GetHeight(),
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BarChart width={dimensions.width} height={dimensions.height} data={data}>
      <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
      <Bar dataKey="M" radius={3}>
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[Mdata[index] === MaxData ? 0 : 1]}
          />
        ))}
      </Bar>
    </BarChart>
  );
}

export default BarComp;
