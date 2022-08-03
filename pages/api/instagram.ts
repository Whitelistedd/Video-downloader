// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'not a post request' })
  }

  const instagramURL = req.body.url

  if (!instagramURL) {
    return res.status(400).json({ message: 'please a valid instagram url' })
  }

  const options = {
    method: 'GET',
    url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
    params: { url: instagramURL },
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
    },
  }

  try {
    const response = await axios(options)
    return res.status(200).json({
      title: response.data.caption,
      thumbnail: response.data.image,
      channelName: '',
      videos: [
        {
          url: response.data.video ? response.data.video : response.data.image,
        },
      ],
    })
  } catch (e) {
    console.log(e)
    return res.status(400).json({ message: 'something went wrong' })
  }
}
