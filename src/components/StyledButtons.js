import React, { useState } from 'react'
import styled  from 'styled-components'




const AllButton = styled.button`
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
    padding: ${(props) => props.padding + 'px'};
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    border: 3px solid ${(props) => props.border || "none"};
    border-radius: 10px;
    font-weight: bold;
    margin-right: 10px;
    margin-bottom: 50px;
    cursor: pointer;
    &:active{
        background: grey;
    }
`


function StyledButton({width, height, padding, color, desc, background,border}) {
    const [btnColor, setBtnColor] = useState('grey')
    

    
  return (
    <AllButton
        width={width}
        height={height}
        padding={padding}
        background={background}
        border={border}
        color={color}
       
    >
      {desc}
      
    </AllButton>
  )
}

export default StyledButton