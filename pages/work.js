import Head from 'next/head';
import Layout from '../components/layout';
import PhotoGallery from '../components/photoGallery';
import images from '../config/work-images'

export default function Work() {
  return (
    <Layout>
      <div>
        <Head>
          <title>stelo - work</title>
        </Head>
        <PhotoGallery images={images}/>
      </div>
    </Layout>
  )
};
