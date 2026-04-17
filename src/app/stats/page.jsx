"use client";

import { useContacts } from "@/context/ContactContext";
import { PieChart, Pie, Cell } from "recharts";

 const  StatsPage = () => {


  const { timeline } = useContacts();


  const counts = {
    call: 0,
    text: 0,
    video: 0,
  };


  timeline.forEach((item) => {
    if (item.type === "call") counts.call++;
    if (item.type === "text") counts.text++;
    if (item.type === "video") counts.video++;
  });

  
  const data = [
    { name: "Text", value: counts.text },
    { name: "Call", value: counts.call },
    { name: "Video", value: counts.video },
  ];

 
  const COLORS = ["#7C3AED", "#1F3D2B", "#2F855A"];

  return (
    <div className="bg-[#F7F8FA] min-h-[60vh] py-12 px-4">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-semibold text-[#1F2937] mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white p-6 rounded-md shadow-sm">
          <p className="text-xl text-[#244D3F] mb-4">
            By Interaction Type
          </p>

         
          <div className="flex flex-col items-center">

            <PieChart width={250} height={250}>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>


            <div className="flex gap-6 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Text
              </div>

              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-900 rounded-full"></span>
                Call
              </div>

              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Video
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
export default StatsPage;