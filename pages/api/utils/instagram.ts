import axios from 'axios'

export const getInstaVideo = async (url: string) => {
  if (!url) {
    return { message: 'not valid' }
  }

  const response = await axios(GenerateInstaConfig(url))

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

export const GenerateInstaConfig = (videoURL: string) => {
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

export const InstaRegex =
  /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\//
