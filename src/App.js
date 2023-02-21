import './App.css';
import styled from '@emotion/styled';
import Modal from './components/Modal';
import { useState } from 'react';
import StyledButton from './components/StyledButtons';
import useInput from './hooks/useInput';
import Dropdown from './components/Dropdown';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Button = styled.div`
  width: 280px;
  height: 60px;
  border-radius: 12px;
  color:#fff;
  background-color: #3d6afe;
  text-align: center;
  
  margin: 0 auto;
  border: none;
  font-size: 24px;
  &:active{
    opacity: 0.8;
  }
`
const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
  background: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`
const StyledDiv = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid black;
  overflow: hidden;
  
`
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  const [title, onChangeTitle] = useInput();
  const [price, onChangePrice] = useInput();

  const onSubmitInput = (e) => {
    e.preventDefault()
    alert(`{이름 : ${title}, price: ${price}}`)
  }
 

  return (
    <>
      <StyledButton
        width={200}
        height={50}
        padding={10}
        color="black"
        background="white"
        border="rgb(85, 239, 196)"
        desc="Large">
      </StyledButton>
      <StyledButton
        width={130}
        height={45}
        padding={10}
        color="black"
        background="rgb(85, 239, 196)"
        desc="Medium">
      </StyledButton>
      <StyledButton
        width={100}
        height={40}
        padding={10}
        background="rgb(85, 239, 196)"
        color="black"
        desc="Small">
      </StyledButton>
      <div>
        <StyledButton
          width={200}
          height={50}
          padding={10}
          color="black"
          background="white"
          border="rgb(250, 177, 160)"
          desc="Large">
        </StyledButton>
        <StyledButton
          width={130}
          height={45}
          padding={10}
          color="black"
          background="rgb(250, 177, 160)"
          desc="Medium">
        </StyledButton>
        <StyledButton
          width={100}
          height={40}
          padding={10}
          background="rgb(250, 177, 160)"
          color="black"
          desc="Small">
        </StyledButton>
      </div>
      <div>
        <form >
          이름 : <input type="text"
            name='title'
            value={title}
            onChange={onChangeTitle} />
          가격 : <input type="text"
            name='price'
            value={price}
            onChange={onChangePrice} />
          <StyledButton
            width={100}
            height={40}
            padding={10}
            background="rgb(85, 239, 196)"
            color="black"
            desc="저장"
            onClickHandler={onSubmitInput}
          ></StyledButton>
        </form>
        <StyledDiv>
          <Dropdown></Dropdown>
        </StyledDiv>
      </div>
      <Container>
        <Button onClick={handleOpen}>Open</Button>
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalBody>
            <h2>Title</h2>
            <p>Description</p>
            <button onClick={handleClose}>닫기</button>
          </ModalBody>
        </Modal>
      </Container>
    </>



  );
}

export default App;
