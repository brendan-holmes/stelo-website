import Head from 'next/head';
import PhotoGallery from '../components/photoGallery';
import images from '../config/work-images'

export default function Work() {
  return (
    <div>
      <Head>
        <title>stelo - work</title>
      </Head>
      <PhotoGallery images={images}/>
    </div>
  )
};
