This is a website for a floral business called Stelo. The aim for this project was speed, but also to be compatible with web crawlers for SEO. I went with [Next.js](https://nextjs.org/) using the static export features for fast load times. 

## Development
1. Clone the repository locally.
2. In the root directory `stelo-website`, run `npm run build`. This will create an `out` directory.
3. I use Chrome as a static file server: Using the Chrome Debugger Tools, add the root directory `stelo-website` to Source > Overrides, then navigate to `http://out`.

## Deployment
The website can be hosted on any file server like AWS S3. I went with AWS Amplify because it has some convenient features like out-of-the-box support for static Next.js websites and automatic deployment after commiting to a linked GitHub repository.
