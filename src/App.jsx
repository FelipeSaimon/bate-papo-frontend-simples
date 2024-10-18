import './App.css'
import Chats from './components/chats'
import Chat from './components/chat'
import { useState } from 'react'

function App() {

  return (
    <div className='flex'>
      <Chats />
      <Chat />
    </div>
  )
}

export default App
