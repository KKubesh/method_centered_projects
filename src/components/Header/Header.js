import React from 'react';
import Grid from 'material-ui/Grid';
import logo from '../../styles/images/header.png';

const Header = ({ title }) => (
  <Grid item style={{height: '220px'}} xs={12}>
    <Grid  style={{ display: 'flex', justifyContent: 'space-around',}} className="bannerback" item xs={12}>
      <Grid style={{maxWidth: '960px', display: 'flex'}} item xs={12}>
        <Grid item xs={3}>
        <img className="borderlogo" style={{height: '200px', width: '200px'}} src={logo}/>
        </Grid>
        {/* <h2 style={{ alignSelf: 'bottom', fontSize: 52, lineHeight: '156px', color: 'white', fontFamily: 'Arial'}}>PAGE NAME</h2> */}
      </Grid>
    </Grid>
  </Grid>
);

export default Header;
