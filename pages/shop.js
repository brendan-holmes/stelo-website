import Head from 'next/head'
import Image from 'next/image'
import imageLoader from '../components/imageLoader'
import Layout from '../components/layout'

export default function Shop() {
  return (
    <Layout>
      <div>
        <Head>
          <title>stelo - shop</title>
        </Head>
        <div className='text-with-image'>
          <div className='text-area'>
            <p>To order bespoke bouquets for delivery or pick-up, please contact turco.simona@gmail.com with your budget and a brief description of what you would like.</p>
            <p>We operate with contactless delivies in and around Melbourne.
            Availability is dependant on which flowers are in season. </p>
          </div>
          <div className='image-area'>
            <Image 
              alt="shop-image"
              src="shop-photo-gallery/shop-1/Shop-1.jfif" 
              width={900}
              height={1350}
              loader={imageLoader} 
              />
          </div>
        </div>
      </div>
    </Layout>
  )
};
