import axios from 'axios'

export const DownloadYoutubeVideo = async (url: string) => {
  try {
    const response = await axios.post('/api/youtube', { url: url })
    return response.data
  } catch (e) {
    console.log(e)
  }
}
