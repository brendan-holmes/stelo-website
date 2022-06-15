import Head from 'next/head'
import Image from '../components/image'
import Layout from '../components/layout'
import shopPage from '../data/shopPage'

export default function Shop() {
  return (
    <Layout>
      <div>
        <Head>
          <title>stelo - shop</title>
        </Head>
        <div className='text-with-image'>
          <div className='text-area'>
            <p>{shopPage.shopText}</p>
          </div>
          <div className='image-area'>
            <Image 
              key={shopPage.shopImage.fields.file.url}
              alt={shopPage.shopImage.fields.title}
              src={shopPage.shopImage.fields.file.url} 
              width={shopPage.shopImage.fields.file.details.image.width}
              height={shopPage.shopImage.fields.file.details.image.height}
              />
          </div>
        </div>
      </div>
    </Layout>
  )
};
