import axios from 'axios'

export const getYoutubeVideo = async (url: string) => {
  let videoID

  if (url.includes('v')) {
    videoID = Object.fromEntries(new URLSearchParams(url.split('?')[1])).v
  } else {
    const urlData = url.split('/')
    videoID = urlData[urlData.length - 1]
    console.log(videoID)
  }

  if (!videoID) {
    return { message: 'not valid' }
  }

  const response = await axios(GenerateYoutubeConfig(videoID))

  return {
    title: response.data.title,
    thumbnail: response.data.thumbnails[0].url,
    views: response.data.viewCount,
    channelName: response.data.channel.name,
    videos: response.data?.videos.items,
    audios: response.data?.audios.items,
  }
}

export const GenerateYoutubeConfig = (videoURL: string) => {
  return {
    method: 'GET',
    url: 'https://youtube-media-downloader.p.rapidapi.com/v2/video/details',
    params: { videoId: `${videoURL}` },
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com',
    },
  }
}

export const youtubeRegex =
  /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/
