import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';

interface FeaturedPost {
    title: string,
    description: string,
    image: string,
    imageTitle: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            height: 'auto',
            maxHeight: 500
        },
        cardDetails: {
            flex: 1,
        },
        cardMedia: {
            width: 160,
            height: 'auto',
            maxHeight: 200,
            maxWidth: 160
        },
        avatar: {
            width: 160,
            height: 'auto',
            maxHeight: 200,
            maxWidth: 160,
            margin: theme.spacing(2, 2, 2)
        },
        cardAvatar: {
            width: 160,
            height: '100%',
            maxWidth: 160,
        },
    }),
);


export default function FeaturedPost({
    main,
    post
}: {
    main: boolean
    post: FeaturedPost
}) {
    const classes = useStyles();
    const theme = useTheme();
    if (main) {
        return (
            <Grid item xs={12}>
                <CardActionArea >
                    <Hidden smUp implementation='css'>

                        <Grid container direction="column" spacing={1} alignItems="center">
                            <Avatar
                                alt={post.imageTitle}
                                src={post.image}
                                className={classes.avatar}
                                title={post.imageTitle}
                            />
                        </Grid>
                    </Hidden>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h4" align="center" color="primary" >
                                    👨🏻‍💻 {' '}
                                    {post.title}
                                    {' '}
                                    🕺🏻
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {post.description}
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown implementation='css'>
                            <Avatar
                                alt={post.imageTitle}
                                src={post.image}
                                className={classes.cardAvatar}
                                title={post.imageTitle}
                                variant="square"
                            />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>

        );
    }
    else {
        return (
            <Grid item xs={12} md={6}>
                <CardActionArea >


                    <Hidden smUp implementation='css'>
                        <Grid container direction="column" spacing={1} alignItems="center">
                            <Avatar
                                alt={post.imageTitle}
                                src={post.image}
                                className={classes.avatar}
                                title={post.imageTitle}
                            />

                        </Grid>
                    </Hidden>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {post.description}
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown implementation='css'>
                            <Avatar
                                alt={post.imageTitle}
                                src={post.image}
                                className={classes.cardAvatar}
                                title={post.imageTitle}
                                variant="square"
                            />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
        );
    }
}