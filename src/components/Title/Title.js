import React from "react"
import * as S from "./Title.styled"

const Title = ({ children, size, color }) => {
  return (
    <S.TitleSpan size={size} color={color}>
      {children}
    </S.TitleSpan>
  )
}

export default Title
