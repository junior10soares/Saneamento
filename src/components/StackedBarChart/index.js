import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartTitle, Container } from './styles';

export const StackedBarChart = ({ data, width, height }) => {
  return (
    <Container width={width}>
      <ChartTitle>Gastos Anuais PSA vs CAF</ChartTitle>

      <ResponsiveContainer width={width || '100%'} height={height || 400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} stroke="#eaeaea" />
          <XAxis dataKey="ano" />
          <YAxis tickFormatter={(value) => `${value} Mi`} />
          <Tooltip />
          <Legend />
          <Bar dataKey="mes_caf" stackId="a" fill="#73b760" name="Mês CAF" />
          <Bar dataKey="mes_psa" stackId="a" fill="#4b598a" name="Mês PSA" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};
