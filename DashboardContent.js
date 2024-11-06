// src/components/DashboardContent.js
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Widget from './Widgets/Widget';
import Chart from './Widgets/Chart';
import { fetchDashboardData } from '../services/api';

const DashboardContent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const dashboardData = await fetchDashboardData();
        setData(dashboardData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Widget title="Users" data={data.users} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Widget title="Sales" data={data.sales} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Widget title="Revenue" data={data.revenue} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Widget title="Growth" data={data.growth} />
        </Grid>
        <Grid item xs={12}>
          <Chart data={data.chartData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
