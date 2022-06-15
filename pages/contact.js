import Head from 'next/head'
import Image from '../components/image'
import Layout from '../components/layout'
import contactPage from '../data/contactPage.json'

export default function Contact() {
  return (
    <Layout>
      <div>
        <Head>
          <title>stelo - contact</title>
        </Head>
        <div className='text-with-image'>
          <div className='text-area'>
            <p>{contactPage.contactText}</p>
            <p><a href="https://www.instagram.com/stelo.studio/">Instagram</a></p>
          </div>
          <div className='image-area'>
            <Image 
              key={contactPage.contactImage.fields.file.url}
              alt={contactPage.contactImage.fields.title}
              src={contactPage.contactImage.fields.file.url} 
              width={contactPage.contactImage.fields.file.details.image.width}
              height={contactPage.contactImage.fields.file.details.image.height}
              />
          </div>
        </div>
      </div>
    </Layout>
  )
};