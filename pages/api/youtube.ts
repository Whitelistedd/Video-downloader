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

  const videoId = req.body.url

  if (videoId.length > 11 || videoId.length < 11) {
    return res.status(400).json({ message: 'please a valid youtube url' })
  }

  const options = {
    method: 'GET',
    url: 'https://youtube-media-downloader.p.rapidapi.com/v2/video/details',
    params: { videoId: `${videoId}` },
    headers: {
      'X-RapidAPI-Key': `${process.env.YOUTUBE_API_KEY}`,
      'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com',
    },
  }

  try {
    const response = await axios(options)
    return res.status(200).json(response.data)
  } catch (e) {
    console.log(e)
    return res.status(400).json({ message: 'something went wrong' })
  }
}
