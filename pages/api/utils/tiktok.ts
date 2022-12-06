import axios from 'axios'

export const getTiktokVideo = async (url: string) => {
  if (!url) {
    return { message: 'not valid' }
  }
  console.log(url)

  const response = await axios(GenerateTiktokConfig(url))
  const info = response.data.result
  return {
    title: info.aweme_detail.desc,
    thumbnail: info.aweme_detail.video?.origin_cover?.url_list?.[0],
    channelName: info.aweme_detail.author.nickname,
    views: info.aweme_detail.statistics.play_count,
    videos: info.video.url_list.map((video: string) => ({
      quality: '720px',
      extension: 'mp4',
      url: video,
    })),
    audios: info.music.url_list.map((video: string) => ({
      quality: '',
      extension: 'mp3',
      url: video,
    })),
  }
}

export const GenerateTiktokConfig = (videoURL: string) => {
  return {
    method: 'GET',
    url: 'https://tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com/media-info/',
    params: {
      link: `${videoURL}`,
    },
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host':
        'tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com',
    },
  }
}

export const tiktokRegex =
  /https:\/\/www\.tiktok\.com\/@[A-Za-z0-9-_.-]+\/video\/[A-Za-z0-9]+/
