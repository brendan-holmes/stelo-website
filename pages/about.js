import Head from 'next/head'
import Image from 'next/image'
import imageLoader from '../components/imageLoader'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div>
        <Head>
          <title>stelo - about</title>
        </Head>
        <div className='text-with-image'>
          <div className='text-area'>
            <p>Stelo (italian noun [ masculine ] /’stɛlo/) means the stem of a plant or of a leaf, flower or fruit.</p>
            <p>Stelo Studios was created by Simona Turco in Toronto, Canada and transplanted to Melbourne, Australia in 2020.</p>
            <p>Simona uses seasonal and local blooms to create rambling, organic and intuitive creations (in collaboration with you). With a professional background in architecture, Simona’s designs showcase a unique eye for colour and composition. She also references the flora of the Canadian landscape by celebrating their ephemeral quality, using blooms at different stages of their lives, such as dried flowers, seeds and buds.</p>
            <p>Stelo Studios provides services spanning small custom floral bouquets or arrangements to large scale installations. The latter includes weddings, events, corporates, deliveries, styling and more.</p>
            <p>Stelo Studio acknowledges the traditional custodians of the land on which we work and live and pay respects to the Elders past and present and emerging.</p>
          </div>
          <div className='image-area'>
            <Image 
              alt="about-image"
              src="about/About.jfif" 
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
