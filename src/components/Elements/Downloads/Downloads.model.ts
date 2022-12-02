export interface DownloadProps {
  videos: Array<{
    url?: string
    extension?: string
    quality?: string
    sizeText: string
  }>
  audios?: Array<{
    url?: string
    extension?: string
    quality?: string
    sizeText: string
  }>
}
