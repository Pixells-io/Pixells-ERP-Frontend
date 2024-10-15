import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Card, CardContent } from "@/components/ui/card"; // Asegúrate de que esta importación es correcta

const CustomBar = (props) => {
  const { x, y, width, height, fill, stroke, strokeWidth, radius } = props;

  return (
    <g>
      <path
        d={`M${x},${y + height} L${x},${y + radius} Q${x},${y} ${x + radius},${y} L${x + width - radius},${y} Q${x + width},${y} ${x + width},${y + radius} L${x + width},${y + height} Z`} // Dibujo de la barra con bordes redondeados
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </g>
  );
};

export default function SimpleBarChart({ data }) {
  const currentMonth = new Date().getMonth(); // Obtener el mes actual (0-11)

  const modifiedData = data.map((item, index) => ({
    ...item,
    fill: index < currentMonth ? "#DC1C3B" : "transparent", // Meses pasados con color
    stroke: index === currentMonth ? "#DC1C3B" : "#D7D7D7", // Color del borde
    strokeWidth: index === currentMonth ? 0.5 : 0.5, // Borde de 0.5px
    radius: 4, // Cabeza redondeada de 4px
  }));

  return (
    <Card className="w-full h-[221px] bg-white border-none">
      <CardContent>
        <div className="flex flex-col pt-4">
          <h3 className="text-lg text-[#44444F] font-poppins font-semibold">Cobrado</h3>
          <div className="flex items-center justify-start mb-2">
            <span className="text-[#696974] font-poppins text-lg">$175,000.00</span>
            <h3 className="text-lg text-[#44444F] font-poppins font-semibold ml-2">este mes</h3>
          </div>
        </div>
        <BarChart
          width={600}
          height={221}
          data={modifiedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" shape={<CustomBar />} />
          <Bar
            dataKey="value"
            fill="#44444F"
            radius={[10, 10, 0, 0]} // Bordes redondeados de 10px en la parte superior
            isAnimationActive={false}
            strokeWidth={0} // Sin borde para esta barra
            opacity={0.3} // Hacerla un poco transparente
            // Asegurarse de que la barra del mes actual esté encima
            shape={(props) => (
              <CustomBar {...props} fill="transparent" stroke="#DC1C3B" />
            )}
            data={modifiedData.filter((_, index) => index === currentMonth)} // Solo para el mes actual
          />
        </BarChart>
      </CardContent>
    </Card>
  );
}
