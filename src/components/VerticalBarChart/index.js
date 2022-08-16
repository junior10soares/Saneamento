import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from 'recharts';
import { ChartTitle, Container } from './styles';

export const VerticalBarChart = ({ data, width, height }) => {
  const renderCustomizedLabel = ({ x, y, value }) => {
    const formatedLabel = `${value} Mi`;

    return (
      <text
        x={x + 10}
        y={y + 30}
        fill="#73b760"
        fontWeight="bold"
        textAnchor="start"
      >
        {formatedLabel}
      </text>
    );
  };

  return (
    <Container width={width}>
      <ChartTitle>Gastos Totais por Componente</ChartTitle>
      <ResponsiveContainer width={width || '100%'} height={height || 400}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
        >
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" />

          <Bar dataKey="value" fill="#4b598a" label={renderCustomizedLabel} />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};
