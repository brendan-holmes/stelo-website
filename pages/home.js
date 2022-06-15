import Head from 'next/head';
import Layout from '../components/layout';
import Image from '../components/image'
import homePage from '../data/homePage.json'

export default function Index() {
    return (
      <Layout>
        <div>
          <Head>
            <title>stelo</title>
          </Head>
          <div className='home-image-container'>
            <Image 
              key={homePage.image.fields.file.url}
              alt={homePage.image.fields.title}
              src={homePage.image.fields.file.url} 
              width={homePage.image.fields.file.details.image.width}
              height={homePage.image.fields.file.details.image.height}
              />
          </div>
        </div>
      </Layout>
    )
  }
