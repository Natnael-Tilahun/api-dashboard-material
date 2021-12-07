import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Chart from '../components/Chart';

export default function dashboardContainer() {
  return (
    <Box component="main" sx={{ p: 10, flexGrow: 1 }}>
      <Grid container spacing={2} columnSpacing={0} sx={{}}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ width: 400, boxShadow: 8 }}>
            <CardContent>
              {' '}
              <Typography variant="h4">
                Services{' '}
                <Badge
                  badgeContent="23"
                  color="info"
                  sx={{ paddingInline: 1 }}
                ></Badge>
              </Typography>
              <Typography>We have 23 service providers</Typography>
            </CardContent>
            <CardActions>
              <Button>View</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ width: 400, boxShadow: 8 }}>
            <CardContent>
              {' '}
              <Typography variant="h4">
                Utilities{' '}
                <Badge
                  badgeContent="40"
                  color="info"
                  sx={{ paddingInline: 1 }}
                ></Badge>
              </Typography>
              <Typography>We have 40 utilites</Typography>
            </CardContent>
            <CardActions>
              <Button>View</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ width: 400, boxShadow: 8 }}>
            <CardContent>
              {' '}
              <Typography variant="h4">
                Fintechs{' '}
                <Badge
                  badgeContent="20"
                  color="info"
                  sx={{ paddingInline: 1 }}
                ></Badge>
              </Typography>
              <Typography>We have 20 fintechs</Typography>
            </CardContent>
            <CardActions>
              <Button>View</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container columnSpacing={3} sx={{ marginTop: 10, boxShadow: 8 }}>
        <Grid item xs={12} md={8} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 350,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
