import Head from 'next/head'
import Link from '@material-ui/core/Link';
import Footer from './footer'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ToolbarHeader from './toolbar';

const name = 'Mümtaz Cem Eriş'
export const siteTitle = 'Mümtaz Cem Eriş'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      ...theme.typography.body2,
      marginTop: theme.spacing(8),
      padding: theme.spacing(3, 0),
    },
    backToHome: {
      margin: theme.spacing(3, 0, 0)
    },
    main: {
      marginTop: theme.spacing(4)
    },
    header: {
      variant: "h2",
      align: "center",
      color: theme.palette.primary.light
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
        <link rel="icon" href="../favicon.ico" />
        <meta
          name="description"
          content="My personal website created via Next.js"
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

      <ToolbarHeader />
      <main className={classes.main}>
        {children}
      </main>
      {!home && (
        <div className={classes.backToHome}>
          <Link href="../">
            ← Back to home
            </Link>
          <Footer otherPages />
        </div>
      )}
      {home && (
        <Footer />
      )}
    </Container>
  )
}