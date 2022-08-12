import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartTitle, Container } from './styles';

export const LineBarChart = ({ data, width, height }) => {
  return (
    <Container width={width}>
      <ChartTitle>
        Mês CAF, Mês PSA e Total acumulado de Mês total em Year por Year
      </ChartTitle>

      <ResponsiveContainer width={width || '100%'} height={height || 400}>
        <ComposedChart
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
          <Line
            dataKey="acumulado_year"
            name="Total acumulado de Mês total em Year"
            stackId="a"
            type="linear"
            stroke="#e8ca5a"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
};
