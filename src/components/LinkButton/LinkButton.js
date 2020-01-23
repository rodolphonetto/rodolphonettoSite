import React from "react"
import * as S from "./LinkButton.styled"

const LinkButton = ({ children, fontSize, paddingSize, path, center }) => {
  return (
    <S.LinkButtonStyled
      to={path}
      paddingSize={paddingSize}
      fontSize={fontSize}
      center={center}
    >
      {children}
    </S.LinkButtonStyled>
  )
}

export default LinkButton
