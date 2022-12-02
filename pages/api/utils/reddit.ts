import axios from 'axios'

export const getRedditVideo = async (url: string) => {
  if (!url) {
    return { message: 'not valid' }
  }

  const response = await axios(GenerateRedditConfig(url))

  return {
    title: response.data.caption,
    thumbnail: response.data.image,
    channelName: '',
    videos: [
      {
        url: response.data.video ? response.data.video : response.data.image,
      },
    ],
  }
}

export const GenerateRedditConfig = (videoURL: string) => {
  return {
    method: 'GET',
    url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
    params: { url: videoURL },
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
    },
  }
}

export const RedditRegex =
  /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\//
