import styled from 'styled-components'


export const Conteiner = styled.div`
    background: linear-gradient(90deg,#383838 0%, #000 81.25% );
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TodoList = styled.div`
   background: white;
   padding: 30px 20px;
   border-radius: 10px;
`

export const Input = styled.input`
   border: 1px solid rgba(209, 211, 212, 0.4);
   border-radius: 5px;
   padding: 5px 7px;
   height: 30px;
   margin-right: 5px;
`
export const Bnt = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #8052EC;
  color: white;
  font-weight: 600;
`