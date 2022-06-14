import Head from 'next/head';
import Layout from '../components/layout';
import PhotoGallery from '../components/photoGallery';
import workPage from '../data/workPage.json'

export default function Work() {
  console.log(workPage)
  console.log(workPage.images[0])
  return (
    <Layout>
      <div>
        <Head>
          <title>stelo - work</title>
        </Head>
        <PhotoGallery images={workPage.images}/>
      </div>
    </Layout>
  )
};
