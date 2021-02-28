import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

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
        },
        cardDetails: {
            flex: 1,
        },
        cardMedia: {
            width: 160,
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
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
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
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
        );
    }
}