import React, {useState } from 'react'
import styled from 'styled-components';

const DropdownContainer = styled.div`
    width: 400px;
    &:hover{
        cursor: pointer;
    }
`
const DropdownBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 14px;
    border: 2px solid black;
`
const DropdownSelect = styled.p`
    font-weight: bold;
`
const DropdownMenu = styled.ul`
    display: ${(props) => (props.isActive ? `block` : `none`)};
    width:400px;
    background-color:white;
    position:absolute;
    border:2px solid #f4acbb;
`

const DropdownItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 14px;
    border-bottom: 2px solid #d2d2d2;
    border-top: none;

    &:last-child{
        border-bottom: none;
    }

`
const ItemName = styled.p`
    font-weight: bold;
`
const dropdownItems = [
    {
        id:1,
        name:'리액트'
    },
    {
        id:2,
        name:'자바'
    },
    {
        id:3,
        name:'스프링'
    },
    {
        id:4,
        name:'노드'
    },
    {
        id:5,
        name:'Next'
    },
]




function Dropdown() {
    // 온오프 state
    const [isActive, setIsActive] = useState(false);
    // 선택된 item 저장 state
    const [item, setItem] = useState()

    

    // 드롭다운 토글, 토글된 결과값이 state니까 
    const onActiveToggle = () => {
        setIsActive((prev) => !prev)
    } 


    const onSelectItem = (e)=> {
        const targetId = e.target.id

        if(targetId === "item_name"){
            setItem(e.target.paramElement.innerText)
        }else if(targetId === "item"){
            setItem(e.target.innerText)
        }

        setIsActive((prev) => !prev)
    }
  return (
    <DropdownContainer>
        <DropdownBody onClick={onActiveToggle}>
            {item ? (
                <>
                    <ItemName>{item}</ItemName>
                </>
            ) : 
            (
                <>
                    <DropdownSelect>선택해주세요.</DropdownSelect>
                </>    
            )
            }
        </DropdownBody>
        <DropdownMenu isActive={isActive}>
            {dropdownItems.map((item) => {
                return(
                    <DropdownItemContainer id = "item" key={item.id} onClick={onSelectItem}>
                    <ItemName id = "item_name">{item.name}</ItemName>
                </DropdownItemContainer>
                )
                
            })}
        </DropdownMenu>
    </DropdownContainer>
  )
}

export default Dropdown