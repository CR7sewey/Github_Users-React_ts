import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { getLanguages } from "../../utils/calculations";
ReactFC.fcRoot(FusionCharts, Pie3D, FusionTheme);

export const Plot3D = ({ languages }: {
  languages: {
    label: string;
    value: string;
    stars: string;
  }[]
}) => {

  const chartConfigs = {
    type: 'pie3d',
    width: '400',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '45%',
      },
      data: languages
    }
  }
  return <ReactFC {...chartConfigs} />;
};
