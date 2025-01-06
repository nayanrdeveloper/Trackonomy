import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

interface PieChartProps {
    data: { name: string; percentage: number; color: string; value: string }[];
}

const PrimaryPieChart: React.FC<PieChartProps> = ({ data }) => {
    const chartData = data.map((item) => ({
        name: item.name,
        population: item.percentage,
        color: item.color,
        legendFontColor: '#FFFFFF',
        legendFontSize: 12,
    }));

    return (
        <View>
            <PieChart
                data={chartData}
                width={300}
                height={220}
                chartConfig={{
                    color: () => `#FFFFFF`,
                    labelColor: () => `#FFFFFF`,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
            {data.map((item) => (
                <Text key={item.name} className="text-white text-sm mt-1">
                    {item.name}: {item.value}
                </Text>
            ))}
        </View>
    );
};

export default PrimaryPieChart;
