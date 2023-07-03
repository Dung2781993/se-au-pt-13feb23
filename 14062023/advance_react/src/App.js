//  @TODO1 - Create basic routing app 

import { Grid, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { Link } from "react-router-dom";


const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container>
        <Grid item xs>
          <Button onClick={() => navigate('/home')}>Home</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate('/posts')}>Posts</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
        </Grid>
      </Grid>
      <AppRoutes />
    </div>
  );
}

export default App;