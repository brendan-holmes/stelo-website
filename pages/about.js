import Head from 'next/head'
import Image from 'next/image'
import imageLoader from '../components/imageLoader'
import Layout from '../components/layout'
import aboutPage from '../data/aboutPage.json'

export default function About() {
  return (
    <Layout>
      <div>
        <Head>
          <title>stelo - about</title>
        </Head>
        <div className='text-with-image'>
          <div className='text-area'>
            <p>
              {aboutPage.aboutText}
            </p>
          </div>
          <div className='image-area'>
            <Image 
              key={aboutPage.aboutImage.fields.file.url}
              alt={aboutPage.aboutImage.fields.title}
              src={aboutPage.aboutImage.fields.file.url} 
              width={aboutPage.aboutImage.fields.file.details.image.width}
              height={aboutPage.aboutImage.fields.file.details.image.height}
              loader={imageLoader} 
              />
          </div>
        </div>
      </div>
    </Layout>
  )
};
