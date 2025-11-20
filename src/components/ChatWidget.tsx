import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Bonjour ! Je suis Sophie, votre conseillère FIMA. Comment puis-je vous aider aujourd\'hui ?',
    sender: 'support',
    timestamp: new Date()
  }
];

const quickReplies = [
  'Informations sur les matelas',
  'Délais de livraison',
  'Retours et garanties',
  'Aide au choix'
];

const autoReplies = {
  'matelas': 'Notre gamme de matelas propose différents niveaux de fermeté et technologies. Quel type de confort recherchez-vous ?',
  'livraison': 'Nous livrons gratuitement en 3-5 jours ouvrés avec installation incluse. Dans quelle région êtes-vous ?',
  'garantie': 'Tous nos matelas bénéficient d\'une garantie de 10 ans et de 14 nuits d\'essai. Avez-vous des questions spécifiques ?',
  'prix': 'Nos prix commencent à 489€ pour un matelas Queen. Nous avons régulièrement des promotions. Quel budget avez-vous en tête ?',
  'taille': 'Nous proposons toutes les tailles standards : Single, Queen, King et California King. Quelle taille vous intéresse ?'
};

export function ChatWidget() {
  const { isChatOpen, setIsChatOpen } = useApp();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAutoReply = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, reply] of Object.entries(autoReplies)) {
      if (lowerMessage.includes(keyword)) {
        return reply;
      }
    }
    
    return 'Merci pour votre message ! Un conseiller va vous répondre dans quelques instants. En attendant, n\'hésitez pas à consulter notre FAQ.';
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate support response
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAutoReply(text),
        sender: 'support',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, supportMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 animate-pulse"
          style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border flex flex-col z-50">
          {/* Header */}
          <div 
            className="p-4 rounded-t-2xl flex items-center justify-between"
            style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 style={{ fontFamily: 'Montserrat' }}>
                  Support FIMA
                </h4>
                <p className="text-xs opacity-90">
                  En ligne • Répond généralement en quelques minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="max-w-[80%] p-3 rounded-lg"
                    style={{
                      backgroundColor: message.sender === 'user' ? '#0EA5E9' : '#f3f4f6',
                      color: message.sender === 'user' ? 'white' : '#1f2937'
                    }}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p 
                      className="text-xs mt-1"
                      style={{
                        color: message.sender === 'user' ? 'rgba(14, 165, 233, 0.3)' : '#6b7280'
                      }}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    style={{ color: '#6E6E6E' }}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputValue)}
                placeholder="Tapez votre message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="p-2 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                style={{ backgroundColor: '#0EA5E9' }}
                onMouseEnter={(e) => {
                  if (inputValue.trim()) e.currentTarget.style.backgroundColor = '#0c93d1';
                }}
                onMouseLeave={(e) => {
                  if (inputValue.trim()) e.currentTarget.style.backgroundColor = '#0EA5E9';
                }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}