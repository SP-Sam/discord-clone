import { createClient } from '@supabase/supabase-js';
import { useState, useContext, useEffect } from 'react';
import ChatForm from '../components/ChatForm';
import Message from '../components/Message';
import MyContext from '../context/myContext';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

function ChatPage() {
  const [userInfos, setUserInfos] = useState({
    userName: '',
    userImage: ''
  });

  const { messageList, setMessageList } = useContext(MyContext);

  function realTimeListener(addNewMessage) {
    return (
      supabase.from('messages').on('INSERT', (data) => {
        addNewMessage(data.new);
      }).subscribe()
    )
  }

  useEffect(() => {
    const { userName, userImage } = JSON.parse(localStorage.getItem('userInfos'));
    
    setUserInfos({
      userName,
      userImage
    });

    supabase.from('messages').select('*')
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
          </ul>
        </div>
      </main>

      <style jsx>{`
          main {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .chat-container {
            display: flex;
            flex-direction: column-reverse;
            border-radius: 5px;
            width: 85%;
            height: 95vh;
            margin: 1rem 0;
          }

          ul {
            list-style-type: none;
            color: white;
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