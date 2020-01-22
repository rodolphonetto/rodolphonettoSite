import React from "react"
import * as S from "./Title.styled"

const Title = ({ children, size, textColor, bold, marginSize, center }) => {
  return (
    <S.TitleSpan
      size={size}
      textColor={textColor}
      bold={bold}
      marginSize={marginSize}
      center={center}
    >
      {children}
    </S.TitleSpan>
  )
}

export default Title
