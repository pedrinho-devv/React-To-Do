import { v4 as idcard } from 'uuid';
import { useState } from 'react';

import { Conteiner, Input, TodoList, Bnt } from './Styles';
import { FcEmptyTrash, FcCheckmark  } from "react-icons/fc";




function App() {
  const [list, setList] = useState([{id: idcard(), task: "nada"}])
  const [task, setTaks] = useState('')


  function Inputevent(event) {
    setTaks(event.target.value)
  }

  function Bntclick() {
    setList([ ...list, {id: idcard(), task}])
  }

  return (
    <Conteiner>
      <TodoList>
      <Input onChange={Inputevent} placeholder="O que tenho para fazer..." />
      <Bnt onClick={Bntclick}>Adicionar</Bnt>

      <ul>
        {
          list.map(item => (
            <div>
            <FcCheckmark/>
            <li key={item.id}>{item.task}</li>
            <FcEmptyTrash/>
            </div>
          ))
        }
      </ul>
      </TodoList>
    </Conteiner>
  )
}

export default App
