import React from "react"
import * as S from "./MarkdownText.styled"

const MarkdownText = ({
  source,
  size,
  color,
  center,
  lineheight,
  marginSize,
}) => {
  return (
    <S.Markdown
      size={size}
      color={color}
      lineheight={lineheight}
      marginSize={marginSize}
      center={center}
      source={source}
    />
  )
}

export default MarkdownText
