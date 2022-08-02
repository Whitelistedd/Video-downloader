export interface YoutubeDownloadProps {
  Video: {
    title: string
    description: string
    Subscribe: string
    thumbnails: Array<{
      url: string
      width: number
      height: number
    }>
    channel: {
      name: string
    }
    videos: {
      items: [
        {
          url: string
          extension: string
          sizeText: string
          hasAudio: boolean
          quality: string
        },
        {
          url: string
          extension: string
          sizeText: string
          hasAudio: boolean
          quality: string
        }
      ]
    }
  }
}
