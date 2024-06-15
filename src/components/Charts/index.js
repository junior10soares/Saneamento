import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Container, TextContainer } from './styles';

export default function Charts() {

    const [totalSeries, setTotalSeries] = useState([0]);
    const chartData = [
        { series: [10.8], label: 'Canalização', solidFill: '#008FFB' },
        { series: [0], label: 'Micro Drenagem', solidFill: '#008000' },
        { series: [0], label: 'Guias e Sarjetas', solidFill: '#FFC0CB' },
        { series: [0], label: 'Passeio', solidFill: '#b489ac' },
        { series: [0], label: 'Pavimentação', solidFill: '#808080' },
        { series: [0], label: 'Iluminação', solidFill: '#800080' },
        { series: [0], label: 'Sinalização', solidFill: '#FF5733' }
    ];
    const [state, setState] = useState({
        options: {
            chart: {
                height: 300,
                type: 'radialBar',
                offsetY: 0
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '20px',
                            color: [],
                            offsetY: 90
                        },
                        value: {
                            offsetY: 50,
                            fontSize: '20px',
                            color: undefined,
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'solid',
                colors: []
            },
            stroke: {
                dashArray: 4
            },
            labels: [''],
        },
    });

    useEffect(() => {
        const total = chartData.reduce((acc, curr) => acc + curr.series[0], 0);
        const totalPercentage = (total / (chartData.length * 100)) * 100;
        setTotalSeries([totalPercentage.toFixed(1)]);
    }, [chartData]);

    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'space-between', marginBottom: '20px' }}>
                <TextContainer>EVOLUÇÃO DA OBRA - COMPLEXO MAURICIO DE MEDEIROS</TextContainer>
                <TextContainer> 07/06/2024</TextContainer>
            </div>
            <Container id="charts-container">
                {chartData.map((data, index) => (
                    <div id={`chart-${index}`} key={index} style={{ marginBottom: '20px' }}>
                        <ReactApexChart
                            options={{
                                ...state.options,
                                labels: [data.label],
                                plotOptions: {
                                    radialBar: {
                                        ...state.options.plotOptions.radialBar,
                                        dataLabels: {
                                            name: {
                                                color: data.solidFill,
                                                offsetY: 80,
                                                fontSize: '20px'
                                            },
                                            value: {
                                                color: data.solidFill,
                                                fontSize: '17px'
                                            }
                                        }
                                    }
                                },
                                fill: {
                                    type: 'solid',
                                    colors: [data.solidFill]
                                }
                            }}
                            series={data.series}
                            type="radialBar"
                            height={300}
                        />
                    </div>
                ))}
            </Container>
            <div style={{ marginTop: '20px' }}>
                <ReactApexChart
                    options={{
                        ...state.options,
                        labels: ['Total Obra'],
                        fill: {
                            type: 'solid',
                            colors: ['#000000']
                        }
                    }}
                    series={totalSeries}
                    type="radialBar"
                    height={300}
                />
            </div>
        </div>
    );
}
