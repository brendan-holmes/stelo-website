import Head from 'next/head';
import Layout from '../components/layout';
import Image from 'next/image'
import images from '../config/home-images'
import imageLoader from '../components/imageLoader'

export default function Index() {
  if (images && Array.isArray(images) && images.length >= 1) {
    return (
      <Layout>
        <div>
          <Head>
            <title>stelo</title>
          </Head>
          <div className='home-image-container'>
              {images.map(
                image => (
                  <Image 
                    key={image.src}
                    alt="about-image"
                    src={image.src} 
                    width={500}
                    height={809}
                    loader={imageLoader} 
                    />
                )
              )}
          </div>
        </div>
      </Layout>
    )
  }
  else {
    return null;
  }
}
