import './App.css';
import AppRouter from './components/routings/routers/AppRouter';
import Footer from './components/views/Footer';
import ChatBotView from './components/views/ChatBotView';

const App = () => {
  return (
    <div className='app-root'>
      <div className='content'>
        <AppRouter/>
        <div className="chatbot-box">
          <ChatBotView />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;

