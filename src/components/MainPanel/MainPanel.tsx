import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectUser } from '../../features/AuthSlice';

import styles from './MainPanel.module.css';

export function MainPanel() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return <Grid container style={{direction:"rtl"}}>
    ברוך הבא {user?.displayName}
  </Grid>;
}

