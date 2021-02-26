import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container fixed>
        <Typography gutterBottom variant="h5" component="h2">{postData.title}</Typography>
        <Typography paragraph>
          <Date dateString={postData.date} />
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  )
}