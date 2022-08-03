import axios from 'axios'

export const DownloadVideo = async (videoType: string, url: string) => {
  try {
    const response = await axios.post(`/api/${videoType}`, { url: url })
    return response.data
  } catch (e) {
    console.log(e)
  }
}
