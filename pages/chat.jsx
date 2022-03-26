import { createClient } from '@supabase/supabase-js';
import { useState, useContext, useEffect, useRef } from 'react';
import ChatForm from '../components/ChatForm';
import LogoutButton from '../components/LogoutButton';
import Message from '../components/Message';
import MyContext from '../context/myContext';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

function ChatPage() {
  const [userInfos, setUserInfos] = useState({
    userName: '',
    userImage: ''
  });

  const { messageList, setMessageList } = useContext(MyContext);
  const messagesEndRef = useRef(null);

  function scrollToTheBottom() {
    messagesEndRef.current?.scrollIntoView();
  }

  function realTimeListener(addNewMessage) {
    return (
      supabase.from('messages').on('INSERT', (data) => {
        addNewMessage(data.new);
      }).subscribe()
    )
  }

  useEffect(() => {
    scrollToTheBottom();
  }, [messageList]);

  useEffect(() => {
    const { userName, userImage } = JSON.parse(localStorage.getItem('userInfos'));

    setUserInfos({
      userName,
      userImage
    });

    supabase.from('messages').select('*')
      .order('id', { ascending: true })
      .then(({ data }) => {
        setMessageList(data);
      });

    realTimeListener((newMessage) => {
      setMessageList((currentList) => {
        return [
          ...currentList,
          newMessage,
        ]
      });
    });
  }, []);

  return (
    <>
      <header>
        <LogoutButton />
      </header>
      <main>
        <div className="chat-container">
          <ChatForm userName={userInfos.userName} supabase={supabase} />

          <ul>
            {messageList.map((message, i) => {
              return (
                <li key={`${message}${i}`}>
                  <Message userName={message.from} message={message.message} />
                </li>
              )
            })}
            <div ref={messagesEndRef} />
          </ul>
        </div>
      </main>

      <style jsx>{`
          header {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10vh;
            border-bottom: 1px solid #ffffff49;
          }
          main {
            width: 100%;
            height: 90vh;
            display: flex;
            justify-content: center;
          }

          .chat-container {
            display: flex;
            flex-direction: column-reverse;
            border-radius: 5px;
            width: 84%;
            margin-bottom: 1rem;
          }

          ul {
            padding: 0.5rem 0 0 0.5rem;
            list-style-type: none;
            color: white;
            overflow-y: auto;
          }

          ul::-webkit-scrollbar {
            width: 15px;
          }

          ul::-webkit-scrollbar-track {
            background: none;
          }

          ul::-webkit-scrollbar-thumb {
            background-color: #AB4FBB;
            border-radius: 10px;
          }

          li {
            width: 99%;
            margin-bottom: 5px;
            padding-bottom: 7px;
          }
        `}</style>
    </>
  )
}

export default ChatPage;