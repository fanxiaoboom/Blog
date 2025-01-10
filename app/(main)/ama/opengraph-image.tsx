import { ImageResponse } from 'next/og'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'none',
        }}
      />
    ),
    {
      width: 1200,
      height: 630,
    }
  )
} 