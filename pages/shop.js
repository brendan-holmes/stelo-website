import Head from 'next/head'
import Image from 'next/image'
import imageLoader from '../components/imageLoader'

export default function Shop() {
  return (
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
            alt="about-image"
            src="/w/1500/q/75/i/769a49262c141fa62e82eeabf6e10d1acc5781eeca252cac5271fec940003fb4/IMG_9342.JPEG" 
            width={900}
            height={1350}
            loader={imageLoader} 
            />
        </div>
      </div>
    </div>
  )
};
