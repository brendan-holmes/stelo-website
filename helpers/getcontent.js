import fs from 'fs'
import path from 'path'
import {createClient} from 'contentful'

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const SPACE = process.env.CONTENTFUL_SPACE
const TOKEN = process.env.CONTENTFUL_TOKEN

const client = createClient({
    space: SPACE,
    accessToken: TOKEN
})

const types = [
    'homePage',
    'aboutPage',
    'contactPage',
    'shopPage',
    'workPage'
]

export const getcontent = async () => {
    console.log('> Starting import...')
    
    const dir = path.join(__dirname, '..', 'data')
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    for (const type of types) {
        console.log('> Getting content for', type);
        
        
        const entries = await client.getEntries({
            content_type: type,
            include: 1
        })

        if (entries.total === 1) {
            const { fields } = entries.items[0]
            fs.writeFileSync(
                path.join(dir, `${type}.json`),
                JSON.stringify(fields)
            )
            console.log('> Content gotten and written for', type)
        }
    }
    return true
}

if (process.argv[2] === 'install') {
    getcontent()
}