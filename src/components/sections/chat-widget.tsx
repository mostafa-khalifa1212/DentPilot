"use client"

import { useState, ChangeEvent, KeyboardEvent, useRef, RefObject, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Send } from 'lucide-react'
import useOutsideClick from '../../hooks/useOutsideClick'
import { BrainAvatar } from '@/components/ui'


type Message = {
  type: 'user' | 'bot'
  text: string
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const chatRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  useOutsideClick(chatRef as RefObject<HTMLElement>, () => {
    if (isOpen) setIsOpen(false)
  })

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    const newMessages: Message[] = [...messages, { type: 'user', text: userMessage }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      console.log('Sending message to webhook:', userMessage)
      
      // Try different request formats
      const requestBody = { 
        text: userMessage,
        message: userMessage,
        input: userMessage,
        query: userMessage
      };
      
      console.log('Request body:', requestBody)
      
      // Use test webhook for now until production is fixed
      const response = await fetch('http://localhost:5678/webhook-test/b7b63b95-aa55-48e1-b9b2-83d472f136b2', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ message: userMessage }),
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)

      if (!response.ok) {
        // Try to get error details from response
        let errorDetails = '';
        try {
          const errorText = await response.text();
          errorDetails = ` - ${errorText}`;
        } catch {
          errorDetails = ' - Could not read error response';
        }
        throw new Error(`HTTP error! status: ${response.status}${errorDetails}`)
      } 

      // Handle different response types
      let data;
      const responseText = await response.text();
      console.log('Response text length:', responseText.length);
      console.log('Response text:', responseText);
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      try {
        data = JSON.parse(responseText);
        console.log('Response data:', data);
        
        // Handle array responses (like [{"output": "..."}])
        if (Array.isArray(data) && data.length > 0) {
          data = data[0]; // Take the first item from the array
          console.log('Extracted first item from array:', data);
        }
      } catch {
        console.log('Response is not JSON, treating as plain text');
        data = { output: responseText };
      }

      // Handle different response formats
      let botReply = 'Hi! I\'m Dent Pilot Assistant. How can I help you today?'
      
      if (data.output) {
        botReply = data.output
      } else if (data.reply) {
        botReply = data.reply
      } else if (data.message) {
        botReply = data.message
      } else if (data.text) {
        botReply = data.text
      } else if (data.response) {
        botReply = data.response
      } else if (typeof data === 'string') {
        botReply = data
      } else if (data.body && data.body.reply) {
        botReply = data.body.reply
      }

      setMessages([...newMessages, { type: 'bot', text: botReply }])
    } catch (error) {
      console.error('Chat error:', error)
      
      // Fallback responses based on user input
      let fallbackReply = 'Hi! I\'m Dent Pilot Assistant. How can I help you today?'
      
      const userInput = userMessage.toLowerCase()
      if (userInput.includes('hello') || userInput.includes('hi')) {
        fallbackReply = 'Hello! Welcome to Dent Pilot. I\'m here to help you with dental practice automation. What would you like to know?'
      } else if (userInput.includes('pricing') || userInput.includes('cost') || userInput.includes('price')) {
        fallbackReply = 'Our pricing starts at $999/month for small clinics and scales based on your automation volume. We offer a 7-day free trial with full feature access. Would you like to schedule a demo?'
      } else if (userInput.includes('demo') || userInput.includes('trial')) {
        fallbackReply = 'Great! I can help you schedule a demo. Our team will show you how Dent Pilot can transform your dental practice. What\'s the best time for a 30-minute call?'
      } else if (userInput.includes('feature') || userInput.includes('what can') || userInput.includes('automation')) {
        fallbackReply = 'Dent Pilot offers comprehensive automation including lead generation, appointment management, patient onboarding, follow-ups, team automation, and analytics. Which area interests you most?'
      } else if (userInput.includes('integration') || userInput.includes('connect')) {
        fallbackReply = 'We integrate with Google Calendar, Notion, Sheets, Stripe, Gmail, Typeform, Calendly, Slack, and 500+ other tools. What systems are you currently using?'
      } else if (userInput.includes('security') || userInput.includes('hipaa')) {
        fallbackReply = 'We\'re HIPAA compliant with bank-grade security, SOC 2 compliance, end-to-end encryption, and audit trails. Your patient data is fully protected.'
      } else if (userInput.includes('support') || userInput.includes('help')) {
        fallbackReply = 'I\'m here to help! You can ask me about our features, pricing, integrations, or schedule a demo. What would you like to know?'
      } else if (userInput.includes('lead') || userInput.includes('generation')) {
        fallbackReply = 'Our lead generation includes Google Maps scraping, social media lead capture, automated nurturing sequences, and CRM integration. We can help you fill your pipeline automatically.'
      } else if (userInput.includes('appointment') || userInput.includes('booking')) {
        fallbackReply = 'We offer AI voice assistants for missed calls, smart scheduling with calendar sync, automated reminders, and intelligent slot management. Want to see how it works?'
      } else if (userInput.includes('patient') || userInput.includes('onboarding')) {
        fallbackReply = 'Patient onboarding includes pre-visit instructions, digital medical forms, ID & insurance uploads, and automated preparation workflows. Everything is HIPAA compliant.'
      }

      setMessages([...newMessages, { type: 'bot', text: fallbackReply }])
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Auto-scroll when messages change or loading state changes
  useEffect(() => {
    scrollToBottom()
  }, [messages, loading])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen && messages.length === 0) {
      // Add welcome message when first opening
      setMessages([{ type: 'bot', text: 'Hi! I\'m Dent Pilot Assistant. How can I help you today?' }])
    }
  }

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ 
              scale: 0.8, 
              opacity: 0,
              borderRadius: '50%',
              width: '60px',
              height: '60px'
            }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              borderRadius: '16px',
              width: '380px',
              height: '500px'
            }}
            exit={{ 
              scale: 0.8, 
              opacity: 0,
              borderRadius: '50%',
              width: '60px',
              height: '60px'
            }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut"
            }}
            className="fixed bottom-4 right-4 z-50 bg-slate-950 border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <BrainAvatar isLoading={loading} size="md" />
                <div>
                  <h3 className="font-semibold text-white">Dent Pilot Assistant</h3>
                  <p className="text-xs text-muted-foreground">AI-powered support</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-2`}
                >
                  {msg.type === 'bot' && (
                    <div className="flex-shrink-0">
                      <BrainAvatar isLoading={false} size="sm" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-linear-to-r from-accent-blue to-accent-green text-white'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start items-end space-x-2"
                >
                  <div className="flex-shrink-0">
                    <BrainAvatar isLoading={true} size="sm" />
                  </div>
                  <div className="bg-white/10 text-white p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-hidden focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-full bg-linear-to-r from-accent-blue to-accent-green flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow transition-all"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={toggleChat}
            data-chat-trigger
            className="fixed bottom-4 right-4 z-40 w-14 h-14 rounded-full bg-linear-to-r from-accent-blue to-accent-green shadow-glow hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
