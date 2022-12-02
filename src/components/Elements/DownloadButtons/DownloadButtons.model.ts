export interface DownloadButtonProps {
  downloads?: Array<{
    url?: string
    extension?: string
    quality?: string
    sizeText: string
  }>
}
