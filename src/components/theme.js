import React from 'react'
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#7F377C',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#7F377C',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true,
  },
];
const MainTheme = () => {
  return(

  <ThemeProvider theme={theme}>
    <ChatBot steps={steps}/>
  </ThemeProvider>
  )
}

export default MainTheme
