import axios from 'axios'

export const DownloadVideo = async (url: string) => {
  try {
    const response = await axios.post(`/api/download`, { url: url })
    return response.data
  } catch (e) {
    console.log(e)
  }
}
