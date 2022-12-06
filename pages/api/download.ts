// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { InstaRegex, getInstaVideo } from './utils/instagram'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getTiktokVideo, tiktokRegex } from './utils/tiktok'
import { getYoutubeVideo, youtubeRegex } from './utils/youtube'

import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'not a post request' })
  }

  const videoURL = req.body.url

  console.log(!!videoURL.match(youtubeRegex))

  try {
    if (videoURL.match(youtubeRegex)) {
      const response = await getYoutubeVideo(videoURL)
      return res.status(200).json(response)
    } else if (videoURL.match(tiktokRegex)) {
      const response = await getTiktokVideo(videoURL)
      return res.status(200).json(response)
    } else if (videoURL.match(InstaRegex)) {
      const response = await getInstaVideo(videoURL)
      return res.status(200).json(response)
    } else {
      throw new Error('invalid url')
    }
  } catch (e) {
    console.log(e)
    return res.status(400).json({ message: 'something went wrong' })
  }
}
