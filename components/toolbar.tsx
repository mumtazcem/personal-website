import React from 'react';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


const sections = [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/mumtazcem', icon: LinkedInIcon },
    { title: 'Mail', url: 'mailto:erismu@itu.edu.tr', icon: MailIcon },
    { title: 'CV', url: './images/cv_delivery.png', icon: DescriptionIcon },
    { title: 'Instagram', url: 'https://www.instagram.com/mumtazcem/', icon: InstagramIcon },
    { title: 'GitHub', url: 'https://github.com/mumtazcem/', icon: GitHubIcon },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            justifyContent: 'space-between',
            overflowX: 'auto',
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        toolbarTitle: {
            flex: 1,
        },
        toolbarLink: {
            padding: theme.spacing(1),
            flexShrink: 0,
        },
    }),
);

export default function ToolbarHeader() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <React.Fragment>
            <Toolbar component="nav" variant="dense" className={classes.toolbar}>
                {sections.map((section) => (
                    <ListItem
                        button key={section.title}
                        component="a"
                        href={section.url}
                    >
                        <ListItemIcon><section.icon /> </ListItemIcon>
                        <ListItemText primary={section.title} />
                    </ListItem>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}