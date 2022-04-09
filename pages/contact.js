import Head from 'next/head'
import Image from 'next/image'
import imageLoader from '../components/imageLoader'
import Layout from '../components/layout'

export default function Contact() {
  return (
    <Layout>
      <div>
        <Head>
          <title>stelo - contact</title>
        </Head>
        <div className='text-with-image'>
          <div className='text-area'>
            <p>For enquiries regarding your event, wedding, or any other opportunity to work together, please send us an email at</p>
            <p><a href="mailto:turco.simona@gmail.com">turco.simona@gmail.com</a></p>
            <p><a href="https://www.instagram.com/stelo.studio/">Instagram</a></p>
          </div>
          <div className='image-area'>
            <Image 
              alt="about-image"
              src="/w/900/q/75/i/5aed332ee0882a5ca84e7c7c1061e52b41c965354ab73369262c830ed3a8b072/IMG_3878.JPG" 
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


///w/900/q/75/i/5aed332ee0882a5ca84e7c7c1061e52b41c965354ab73369262c830ed3a8b072/IMG_3878.JPG