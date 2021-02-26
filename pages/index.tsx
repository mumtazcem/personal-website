import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
  bottomNav: {
    width: 500,
  },
}));

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Grid container direction="column" spacing={1} alignItems="center" >
        <Typography paragraph>
          This is <b>Cem</b>. I'm a ballroom dancer, a software developer, and a researcher.
        </Typography>
        <Typography paragraph>
          This site is created with {' '}
          <a href="https://nextjs.org/learn"> Next.js </a>
          you should definitely check it out!
          </Typography>
      </Grid>
      <Grid container direction="column" spacing={1} alignItems="center" >
      <Typography paragraph>Blog</Typography>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </Grid>
    </Layout>
  )
}