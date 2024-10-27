import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { getLanguages } from "../../utils/calculations";
ReactFC.fcRoot(FusionCharts, Pie2D, FusionTheme);

export const Doughnut2d = ({ languages }: {
  languages: {
    label: string;
    value: string;
  }[]
}) => {

  const chartConfigs = {
    type: 'doughnut2d',
    width: '400',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stars Per Language',
        theme: 'fusion',
        decimals: 0,
        doghnutRadius: '45%',
        showPercentValues: 0,

      },
      data: languages
    }
  }
  return <ReactFC {...chartConfigs} />;
};
