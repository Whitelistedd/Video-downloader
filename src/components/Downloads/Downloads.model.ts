export type VideoType = Array<{
  url: string
  quality: string
  extension: string
}>

export interface DownloadProps {
  videoType: string
  thumbnail: string
  title: string
  channelName: string
  videos: VideoType
}
