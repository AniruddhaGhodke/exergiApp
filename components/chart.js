import React from 'react';
import { View } from 'react-native';
import { LineChart, BarChart, Grid,XAxis, YAxis } from 'react-native-svg-charts';
import DeprecatedViewPropTypes from 'deprecated-react-native-prop-types';

const MyChartComponent = () => {
  // Sample data for line chart
  const lineData = [50, 10, 40, 95, -4, -24, 10, 85, -10, 5, 35, 40];

  // Sample data for bar chart
  const barData = [14, -1, 100, -95, -94, 84, -34, -83, 84, -10, 20, 30];

  return (
    <View>
    <View style={{ flexDirection: 'row', height: 200 }}>
      <YAxis
        data={lineData}
        contentInset={{ top: 20, bottom: 20 }}
        svg={{ fill: 'grey', fontSize: 10 }}
        numberOfTicks={10}
        formatLabel={(value) => `${value}`}
      />
      <LineChart
        style={{ flex: 1 }}
        data={lineData}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    </View>
    <XAxis
      style={{ marginHorizontal: -10 }}
      data={lineData}
      formatLabel={(value, index) => index}
      contentInset={{ left: 20, right: 20 }}
      svg={{ fontSize: 10, fill: 'grey' }}
    />

    <View style={{ flexDirection: 'row', height: 200 }}>
      <YAxis
        data={barData}
        contentInset={{ top: 30, bottom: 30 }}
        svg={{ fill: 'grey', fontSize: 10 }}
        numberOfTicks={10}
        formatLabel={(value) => `${value}`}
      />
      <BarChart
        style={{ flex: 1 }}
        data={barData}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
    </View>
    <XAxis
      style={{ marginHorizontal: -10 }}
      data={barData}
      formatLabel={(value, index) => index}
      contentInset={{ left: 20, right: 20 }}
      svg={{ fontSize: 10, fill: 'grey' }}
    />
  </View>
  );
};

export default MyChartComponent;
