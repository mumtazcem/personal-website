import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

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
            backgroundColor: theme.palette.background.default,
            // marginTop: theme.spacing(8),
            padding: theme.spacing(6, 0),
        },

        small: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            alignContent: 'center'
        },
    }),
);

export default function Footer({
    description,
    title,
    otherPages
}: {
    description?: string
    title?: string
    otherPages?: boolean
}) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                {otherPages ? (
                <Grid container direction="column" spacing={1} alignItems="center" >
                    <Link href="/">
                        <Avatar
                            alt={title}
                            src="../images/dance_img.jpg"
                            className={classes.small}
                            title="Halo"
                        />
                    </Link>
                </Grid>
                ) : (
                    <div></div>
                  )}
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
