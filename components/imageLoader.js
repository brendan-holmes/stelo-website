import s3Url from '../config/aws.js';

export default function imageLoader({ src }) {
    return `${s3Url}/${src}`;
}