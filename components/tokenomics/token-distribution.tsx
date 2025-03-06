"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Team", value: 15, color: "#3B82F6" },
  { name: "Liquidity", value: 25, color: "#10B981" },
  { name: "Community", value: 30, color: "#6366F1" },
  { name: "Development", value: 20, color: "#8B5CF6" },
  { name: "Marketing", value: 10, color: "#EC4899" },
];

const TokenDistribution = () => {
  return (
    <Card className="border-border/40">
      <CardHeader>
        <CardTitle>Token Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.value}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenDistribution;