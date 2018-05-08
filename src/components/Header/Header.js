import React from 'react';
import Grid from 'material-ui/Grid'

const Header = ({ title }) => (
  <Grid item xs={12}>
    <Grid item xs={12}>
      <h1>{ title }</h1>
    </Grid>
    <div className="bannerback">
    {/* image banner full width of screen */}
    {/* woud like to add project title here without opacity issues */}
    </div>
  </Grid>
);

export default Header;
