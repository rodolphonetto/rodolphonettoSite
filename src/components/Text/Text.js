import React from "react"
import * as S from "./Text.styled"

const Text = ({ children, size, color, center, lineheight, marginSize }) => {
  return (
    <S.StyledText
      size={size}
      color={color}
      lineheight={lineheight}
      marginSize={marginSize}
      center={center}
    >
      {children}
    </S.StyledText>
  )
}

export default Text
