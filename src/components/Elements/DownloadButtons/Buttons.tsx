import { DownloadButtonProps } from './DownloadButtons.model'
import DownloadSVG from 'public/svg/download.svg'
import Image from 'next/image'
import styled from 'styled-components'

export const Buttons: React.FC<DownloadButtonProps> = ({ downloads }) => {
  return (
    <>
      {downloads?.map((download, index) => (
        <Anchor
          target="_blank"
          href={download.url}
          key={`button-number-${index}`}
        >
          <Quality>{download.quality?.replace('x', '')}</Quality>
          <Extention>{download.extension?.toLocaleUpperCase()}</Extention>
          <Size>{download.sizeText}</Size>
          <DownloadButton>
            Download <Image width={17} height={17} src={DownloadSVG} />
          </DownloadButton>
        </Anchor>
      ))}
    </>
  )
}

const Anchor = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

const Quality = styled.p``

const Extention = styled.p`
  color: grey;
`

const Size = styled(Extention)``

const DownloadButton = styled.button`
  font-size: 0.9em;
  padding: 0.5em 1em;
  background-color: #3a82f7;
  border: none;
  border-radius: 15px;
  outline: none;
  color: white;
  display: flex;
  gap: 5px;
  &:hover {
    cursor: pointer;
  }
`

const Container = styled.div``
