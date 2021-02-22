import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

let days: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function Copyright() {
    return (
        <div>
      <Typography paragraph variant="body2" color="textSecondary" align="center">
        {'Copyright © Mümtaz Cem Eriş '}
        {'.'}
      </Typography>
      <Typography paragraph variant="body2" color="textSecondary" align="center">
      
      {days[new Date().getDay()]}
      {' '}
      {new Date().getDate()}
      {'/'}
      {new Date().getMonth()}
      {'/'}
      {new Date().getFullYear()}
    </Typography>
    </div> 
    );
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
        backgroundColor: theme.palette.background.paper,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
      },
  }),
);

export default function Footer({
    description,
    title
  }: {
    description?: string
    title?: string
  })  {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        {description}
      </Typography>
      <Copyright />
    </Container>
  </footer>
  );
}
