import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: theme.palette.background.default
    },
    menuButton: {
      marginRight: theme.spacing(-2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      background: theme.palette.primary.main
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      background: theme.palette.background.default
    },
  }),
);

export default function MiniDrawer({
    children
  }: {
    children: React.ReactNode
  })  {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
          
        <div className={classes.toolbar}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
          <ChevronRightIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerClose}
            edge="end"
            className={clsx(classes.menuButton, {
              [classes.hide]: !open,
            })}
          >
          <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem 
            button key={'LinkedIn'}
            onClick={handleDrawerClose}
            >
              <ListItemIcon><LinkedInIcon /> </ListItemIcon>
              <ListItemText primary={'LinkedIn'} />
            </ListItem>

            <ListItem 
            button key={'Mail'}
            onClick={handleDrawerClose}
            >
              <ListItemIcon><MailIcon /> </ListItemIcon>
              <ListItemText primary={'Mail'} />
            </ListItem>

            <ListItem 
            button key={'CV'}
            onClick={handleDrawerClose}
            >
              <ListItemIcon><DescriptionIcon /> </ListItemIcon>
              <ListItemText primary={'CV'} />
            </ListItem>

            <ListItem 
            button key={'Instagram'}
            onClick={handleDrawerClose}
            >
              <ListItemIcon><InstagramIcon /> </ListItemIcon>
              <ListItemText primary={'Instagram'} />
            </ListItem>

            <ListItem 
            button key={'GitHub'}
            onClick={handleDrawerClose}
            >
              <ListItemIcon><GitHubIcon /> </ListItemIcon>
              <ListItemText primary={'GitHub'} />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>{children}</main>
    </Container>
  );
}
