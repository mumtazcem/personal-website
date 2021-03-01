import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { getSortedPostsData } from '../lib/posts'
import Link from '@material-ui/core/Link';
import Date from '../components/date'
import FeaturedPost from '../components/featuredPost'
import { GetStaticProps } from 'next'
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';


const mainFeaturedPost = {
  title: 'About Me',
  description:
    'As being a both athlete and a computer engineer, I am a self-motivated, hardworking and disciplined person who pursue success and accomplishments. Without fearing a failure, I always stand up against difficulties on the way to achieve my goals and I would continue to do so. Thankfully, I was able to set my goals higher and higher each year, becoming successful both in my career and in ballroom dancing as a national athlete.',
  image: './images/dance_img.jpg',
  imageText: 'Profile',
  imageTitle: 'Profile'
};


const featuredPosts = [
  {
    title: '',
    description:
      'Currently employed as an android app developer, I develop projects to mobile banking application which has more than 6,5 million active users. I have been working at this company for almost two years. I am familiar with huge android applications as well as small applications for startup companies.',
    image: './images/android.png',
    imageText: 'Android',
    imageTitle: 'Android'
  },

  {
    title: '',
    description:
      'As a matter of fact, I experienced android core libraries like Dagger and concepts such as dependency injection, reflection, component based framework, MVVM, REST API, JSON and have used them extensively. I have experience in server-side development with .NET, Node.js, Next.js and Firebase.',
    image: './images/nextjs.png',
    imageText: 'Graduation',
    imageTitle: 'Graduation'
  },
  {
    title: '',
    description:
      'Having startup experiences, I am a quick learner and have applied and used many frameworks and technologies such as Next.js, Material UI and Networkx as well. I am currently pursuing higher education, trying to master Computer Networks and IoT at ITU.',
    image: './images/profile.jpg',
    imageText: 'Profile',
    imageTitle: 'Profile'
  },

  {
    title: '',
    description:
      'My research includes next generation wireless networks and federated learning. My thesis subject was Smart Waste Management and I developed an android application for that. You can check my experiences for more detail and feel free to contact me.',
    image: './images/graduation_img.png',
    imageText: 'Grad',
    imageTitle: 'Grad'
  },
];

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
      margin: theme.spacing(3, 3, 3),
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
      <Grid container spacing={4}>
        <FeaturedPost main={true} key={mainFeaturedPost.title} post={mainFeaturedPost} />
      </Grid>
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost main={false} key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container direction="column" spacing={1} className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2" align="left">Content</Typography>
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