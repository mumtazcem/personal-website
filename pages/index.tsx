import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { getSortedPostsData } from '../lib/posts'
import Link from '@material-ui/core/Link';
import Date from '../components/date'
import { GetStaticProps } from 'next'
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    margin: theme.spacing(0, 0, 0),
  },
  list: {
    padding: 0,
    margin: 0,
  },
  listItem: {
    margin: theme.spacing(0, 0, 1),
  },
}),
);

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {

  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  return (
    <Layout home >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Grid container direction="column" spacing={1} alignItems="center" className={classes.root}>
        <Typography paragraph>
          This is <b>Cem</b>. I'm a ballroom dancer, a software developer, and a researcher.
        </Typography>
        <Typography paragraph>
          This site is created with {' '}
          <a href="https://nextjs.org/learn"> Next.js </a>
          you should definitely check it out!
          </Typography>
      </Grid>
      <Grid container direction="column" spacing={1} alignItems="center" className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2" align="left">Blog</Typography>
        <List className={classes.list}>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem className={classes.listItem} key={id}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link href={`./posts/${id}`} >
                    {title}
                  </Link>
                }
                secondary={
                  <Typography>
                    <Date dateString={date} />
                  </Typography>
                }
              />

            </ListItem>
          ))}
        </List>
      </Grid>
    </Layout>
  )
}