import {
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { ChartTitle, Container } from './styles';

export const PieChart = ({ data, width, height }) => {
  const COLORS = ['#73b760', '#4b598a', '#e8ca5a'];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const formatedLabel = `${data[index].value.toFixed(2)} Mi (${(
      percent * 100
    ).toFixed(2)}%)`;

    return (
      <text
        x={x}
        y={y}
        fill={COLORS[index]}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
      >
        {formatedLabel}
      </text>
    );
  };

  return (
    <Container width={width}>
      <ChartTitle>Proporção CAF vs Contrapartida</ChartTitle>
      <ResponsiveContainer width={width || '100%'} height={height || 400}>
        <RePieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            fill="#73b760"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((_, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </RePieChart>
      </ResponsiveContainer>
    </Container>
  );
};
