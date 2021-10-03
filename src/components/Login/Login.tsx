import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase';
import React, { useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { uiConfig } from '../../firebase';

import styles from './Login.module.css';

export function Login() {
  // const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className="iron-sign-in-page-wrap">
      
       <div className="inner-container section-pad bg-base">
          <div className="container">
             <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={10} lg={9} className="mx-auto">
                   <Grid container spacing={0} className="d-flex justify-content-center align-items-center">
                     <Grid item xs={12} container justify="center">
                        <Typography>ברוכים הבאים לקהילת קרית יובל</Typography>
                        </Grid>
                      {/* <Grid item xs={12} sm={12} md={6} lg={6}>
                         <div className="sign-in-image">
                         </div>
                      </Grid> */}
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                         <div className="iron-forgot-pwd-form form-margin iron-shadow bg-base p-sm-25 py-20 px-15 rounded">
                            {/* <SignIn ></SignIn> */}
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                         </div>
                      </Grid>
                   </Grid>
                </Grid>
             </Grid>
          </div>
       </div>
    </div>
 );
}

