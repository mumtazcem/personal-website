import Head from 'next/head'
import Link from '@material-ui/core/Link';
import MiniDrawer from './drawer'
import Footer from './footer'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const name = 'Mümtaz Cem Eriş'
export const siteTitle = 'M. Cem Eriş'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      ...theme.typography.body2,
      // marginTop: theme.spacing(8),
      padding: theme.spacing(3, 0),
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
    },
    small: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      alignContent: 'center'
    },
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      alignContent: 'center'
    },
    backToHome: {
      margin: theme.spacing(3, 0, 0)
    },
  }),
);


export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  const classes = useStyles();
  return (
    <Container fixed>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal website of me created via Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>
      <MiniDrawer>
        {home ? (
          <Grid container direction="column" spacing={1} alignItems="center">
            <div>
              <Avatar
                alt={name}
                src="/images/profile_big.jpg"
                className={classes.large}
                title="Halo"
              />
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
            </div>
          </Grid>
        ) : (
            <div></div>
          )}

        <main>{children}</main>
        {!home && (
          <div className={classes.backToHome}>
            <Link href="/">
              ← Back to home
            </Link>
          <Footer otherPages/>
          </div>
        )}
        {home && (
        <Footer />
        )}
      </MiniDrawer>
    </Container>
  )
}