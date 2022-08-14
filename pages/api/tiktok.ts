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

  const tiktokURL = req.body.url

  if (!tiktokURL) {
    return res.status(400).json({ message: 'please a valid tiktok url' })
  }

  const options = {
    method: 'GET',
    url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
    params: {
      url: `${tiktokURL}`,
    },
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host':
        'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com',
    },
  }

  try {
    const response = await axios(options)
    if (response.data.error[0]) {
      return res.status(400).json({ message: response.data.error?.[0] })
    }

    if (response.data) {
      return res.status(200).json({ message: response.data })
    }

    if (!response.data) {
      return res.status(200).json({ message: response.data })
    }

    return res.status(200).json({
      title: '',
      thumbnail: response.data.dynamic_cover?.[0],
      channelName: response.data.author?.[0],
      videos: [
        {
          url: response?.data?.video?.[0],
        },
      ],
    })
  } catch (e) {
    console.log(e)
    return res.status(400).json({ message: 'something went wrong' })
  }
}
