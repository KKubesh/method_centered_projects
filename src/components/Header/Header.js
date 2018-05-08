import React from 'react';
import Grid from 'material-ui/Grid'

const Header = ({ title }) => (
  <Grid item xs={12}>
    <Grid item xs={12}>
      <h1>{ title }</h1>
    </Grid>
    <div className="bannerback">
    </div>
  </Grid>
);

export default Header;
