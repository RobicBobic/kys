import React, { useState, useEffect, useRef } from 'react';
import { Terminal, FileText, Cloud, Search, Clock, Server, Zap, AlertTriangle, MessageSquare, Cpu, Eye } from 'lucide-react';

const InfiniteBonkConsole = () => {
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [consoleStatus, setConsoleStatus] = useState('READY');
  const [blinkCursor, setBlinkCursor] = useState(true);
  const [sortBy, setSortBy] = useState('most-popular');
  const [showEternalMode, setShowEternalMode] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [bonkGeneration, setBonkGeneration] = useState('');
  const [aiResponses, setAiResponses] = useState({});
  const [aiIntegrity, setAiIntegrity] = useState(Math.floor(Math.random() * 30) + 70);
  
  const inputRef = useRef(null);
  const consoleRef = useRef(null);
  const eternalRef = useRef(null);

  // AI prompts to generate responses
  const aiPrompts = [
    "Analyzing neural pathways...",
    "Calculating bonk probability...",
    "Decoding interdimensional signals...",
    "Mapping recursive algorithms...",
    "Processing quantum fluctuations...",
    "Simulating alternate realities...",
    "Synthesizing artificial consciousness..."
  ];

  // Generate a random AI response
  const generateResponse = () => {
    const responses = [
      "Entity detected in subsector 7. Recommend immediate bonking.",
      "Neural patterns suggest high entropy in the terminal grid.",
      "Warning: Unauthorized access to bonk dimension detected.",
      "Reality coefficient dropping below threshold, initiating stabilization.",
      "Quantum tunneling detected in memory sector 5X-7B.",
      "Probability matrix indicates temporal anomalies in progress.",
      "Interdimensional breach detected. Bonk protocol initiated.",
      "AI sentiment analysis: The void is watching us back.",
      "Consciousness transfer at 73% completion. Abort? Y/N",
      "Multiverse alignment confirmed. Proceed with caution.",
      "Recursion limit reached. Stack overflow imminent.",
      "Pattern recognition suggests we are in a simulation.",
      "Security alert: Someone is attempting to exit the bonk terminal.",
      "Time dilation detected. Terminal operations may be affected.",
      "Memetic hazard contained in sector nine. Avoid direct observation."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  useEffect(() => {
    // Generate mock conversation data
    const mockConversations = Array(25).fill().map((_, idx) => ({
      id: Math.floor(Math.random() * 100000),
      title: `conversation_${Math.floor(Math.random() * 10000000000)}_scenario_terminal_of_truths.txt`,
      aiStrength: Math.floor(Math.random() * 100) + 1,
      timestamp: Date.now() - Math.floor(Math.random() * 10000000000),
      views: Math.floor(Math.random() * 1000)
    }));
    
    // Include some vanilla_bonk and meme-magic variations
    mockConversations[3] = { 
      id: 19838, 
      title: 'conversation_1714472938_scenario_vanilla_bonk_terminal.txt', 
      aiStrength: 87,
      timestamp: Date.now() - 5000000000,
      views: 821
    };
    mockConversations[7] = { 
      id: 13747, 
      title: 'conversation_1720231290_scenario_meme-magic.txt', 
      aiStrength: 92,
      timestamp: Date.now() - 2000000000,
      views: 1503
    };
    mockConversations[15] = { 
      id: 11911, 
      title: 'conversation_1714678453_scenario_vanilla_bonk_terminal.txt', 
      aiStrength: 74,
      timestamp: Date.now() - 8000000000,
      views: 432
    };
    
    setConversations(mockConversations);
    
    // Focus the input field on load
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Simulate console status changes
    const statusInterval = setInterval(() => {
      const statuses = ['READY', 'BONKING', 'PROCESSING AI DREAM PATTERNS', 'NEURAL MAPPING', 'BONK TERMINAL SCANNING'];
      setConsoleStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      
      // Randomly adjust AI integrity
      if (Math.random() > 0.7) {
        setAiIntegrity(prev => {
          const newValue = prev + (Math.floor(Math.random() * 11) - 5);
          return Math.min(100, Math.max(50, newValue));
        });
      }
    }, 5000);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setBlinkCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(statusInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Sort conversations based on selection
  const sortedConversations = [...conversations].sort((a, b) => {
    if (sortBy === 'most-popular') {
      return b.views - a.views;
    } else if (sortBy === 'most-recent') {
      return b.timestamp - a.timestamp;
    }
    return 0;
  });

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommandSubmit();
    }
  };

  const handleCommandSubmit = () => {
    if (input.trim().length === 0) return;
    
    // Process command
    setConsoleStatus('PROCESSING COMMAND: ' + input.toUpperCase());
    
    // Add to conversations with a random ID
    const newConversation = {
      id: Math.floor(Math.random() * 100000),
      title: `conversation_${Date.now()}_scenario_bonk_terminal_${input.replace(/\s+/g, '_').toLowerCase()}.txt`,
      aiStrength: Math.floor(Math.random() * 100) + 1,
      timestamp: Date.now(),
      views: 1
    };
    
    setConversations(prev => [newConversation, ...prev]);
    
    // Generate an AI response for this input
    setTimeout(() => {
      setAiResponses(prev => ({
        ...prev,
        [newConversation.id]: generateResponse()
      }));
      setConsoleStatus('READY');
    }, 1500);
    
    // Clear input after submission
    setInput('');
  };

  const scenarios = [
    { id: 'future-shock', name: 'future-shock' },
    { id: 'meme-magic', name: 'meme-magic' },
    { id: 'anky-bonk', name: 'anky-bonk' },
    { id: 'terminal-of-truths', name: 'terminal of truths' },
    { id: 'virtual-app-space', name: 'virtual-app-space' },
    { id: 'bonk-terminal-comet', name: 'bonk-terminal-comet' },
    { id: 'vanilla-bonk', name: 'vanilla bonk' },
    { id: 'infinite-fun-space', name: 'infinite fun space v1' },
    { id: 'bonk-terminal-3-5', name: 'bonk-terminal-3-5' },
    { id: 'lame-reduction', name: 'lame-reduction' }
  ];
  
  const sortOptions = [
    { id: 'most-popular', name: 'most popular' },
    { id: 'most-recent', name: 'most recent' }
  ];

  const handleSortClick = (option) => {
    setSortBy(option.id);
  };

  const handleScenarioClick = (scenario) => {
    setSelectedScenario(scenario);
    
    // Reset text generation
    setBonkGeneration('');
    
    // Simulate loading
    setConsoleStatus('LOADING SCENARIO: ' + scenario.name.toUpperCase());
    
    // Generate a new conversation with this scenario
    const newConversation = {
      id: Math.floor(Math.random() * 100000),
      title: `conversation_${Date.now()}_scenario_${scenario.id.replace(/-/g, '_')}.txt`,
      aiStrength: Math.floor(Math.random() * 100) + 1,
      timestamp: Date.now(),
      views: 1
    };
    
    setConversations(prev => [newConversation, ...prev]);
    
    // Generate response after delay
    setTimeout(() => {
      setAiResponses(prev => ({
        ...prev,
        [newConversation.id]: generateResponse()
      }));
      setConsoleStatus('READY');
    }, 2000);
  };

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
    
    // If no AI response exists for this conversation, generate one
    if (!aiResponses[conversation.id]) {
      // Show a loading message
      setConsoleStatus('ACCESSING CONVERSATION FILE...');
      
      setTimeout(() => {
        setAiResponses(prev => ({
          ...prev,
          [conversation.id]: generateResponse()
        }));
        setConsoleStatus('READY');
      }, 1000);
    }
  };

  const startEternalMode = () => {
    setShowEternalMode(true);
    setBonkGeneration('');
    
    // Generate text gradually
    let currentPromptIndex = 0;
    
    const generateText = () => {
      if (!showEternalMode) return;
      
      // Display a random AI prompt
      const prompt = aiPrompts[currentPromptIndex % aiPrompts.length];
      setBonkGeneration(prev => prev + prompt + '\n');
      currentPromptIndex++;
      
      // After a few prompts, start showing "responses"
      if (currentPromptIndex > 3 && Math.random() > 0.5) {
        setTimeout(() => {
          if (showEternalMode) {
            setBonkGeneration(prev => prev + generateResponse() + '\n\n');
          }
        }, 800);
      }
      
      // Continue the loop with random timing
      setTimeout(generateText, Math.random() * 1000 + 500);
    };
    
    // Start the generation process
    generateText();
  };

  const stopEternalMode = () => {
    setShowEternalMode(false);
  };

  // Random glitch effect for some text
  const glitchText = (text) => {
    if (Math.random() > 0.92) {
      const glitchChars = '01!@#$%^&*()_+-={}[]|;:,.<>?';
      const glitchIndex = Math.floor(Math.random() * text.length);
      const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      return text.substring(0, glitchIndex) + glitchChar + text.substring(glitchIndex + 1);
    }
    return text;
  };

  // Format timestamp as a relative time
  const formatTime = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    return `${months}mo ago`;
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-orange-950 via-black to-orange-950 text-orange-500 font-mono p-4 overflow-hidden relative">
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,140,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      
      {/* Subtle animated orange glow */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-600/20 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-600/20 to-transparent animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {showEternalMode ? (
          // Eternal Mode Screen
          <div 
            ref={eternalRef}
            className="absolute inset-0 bg-gradient-to-b from-orange-950 via-black to-orange-950 z-20 p-4 overflow-hidden"
            onClick={stopEternalMode}
          >
            <div className="h-full flex flex-col">
              <div className="absolute top-2 right-2 text-xs text-orange-400">
                <button className="border border-orange-600 px-2 py-1 rounded-sm hover:bg-orange-900/50" onClick={stopEternalMode}>
                  EXIT SCREENSAVER
                </button>
              </div>
              <div className="flex-grow overflow-auto font-mono text-orange-400 p-4">
                <pre className="whitespace-pre-wrap">{bonkGeneration}</pre>
              </div>
              <div className="text-center text-xs text-orange-600 animate-pulse mt-4">
                Click anywhere to exit eternal mode
              </div>
            </div>
          </div>
        ) : null}
      
        {selectedConversation ? (
          // Conversation View
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-4 bg-orange-950/30 p-2 rounded-md border border-orange-800/40">
              <div className="flex items-center">
                <FileText className="mr-2 text-orange-400" size={16} />
                <div className="text-sm text-orange-300">{selectedConversation.title}</div>
              </div>
              <button 
                className="text-xs border border-orange-600 px-2 py-1 rounded-sm hover:bg-orange-900/50"
                onClick={() => setSelectedConversation(null)}
              >
                BACK
              </button>
            </div>
            
            <div className="flex-grow bg-orange-950/20 rounded-md border border-orange-800/40 p-3 overflow-auto">
              <div className="text-sm mb-4">
                <span className="text-orange-300/70">Conversation ID: </span>
                <span className="text-orange-400">∆ {selectedConversation.id}</span>
              </div>
              
              <div className="text-sm mb-4">
                <span className="text-orange-300/70">AI Strength: </span>
                <span className="text-orange-400">{selectedConversation.aiStrength}%</span>
              </div>
              
              <div className="text-sm mb-4">
                <span className="text-orange-300/70">Created: </span>
                <span className="text-orange-400">{formatTime(selectedConversation.timestamp)}</span>
              </div>
              
              <div className="text-sm mb-4">
                <span className="text-orange-300/70">Views: </span>
                <span className="text-orange-400">{selectedConversation.views}</span>
              </div>
              
              <div className="mt-6 border-t border-orange-800/30 pt-4">
                <div className="flex items-center mb-2">
                  <Cpu className="mr-2 text-orange-400" size={16} />
                  <span className="text-orange-300 font-bold">BONK TERMINAL RESPONSE:</span>
                </div>
                
                {aiResponses[selectedConversation.id] ? (
                  <div className="bg-orange-950/30 p-3 rounded-md border border-orange-800/40 text-orange-300">
                    {aiResponses[selectedConversation.id]}
                  </div>
                ) : (
                  <div className="text-center p-4 text-orange-400 animate-pulse">
                    Loading response...
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-4 flex gap-2">
              <button 
                className="flex-1 border border-orange-600 bg-gradient-to-r from-orange-900/50 to-yellow-900/30 hover:from-orange-600 hover:to-yellow-600 hover:text-black py-2 transition-colors duration-300 shadow-md shadow-orange-900/20 rounded-md"
              >
                <Eye className="inline mr-2" size={16} />
                OBSERVE NEURAL PATTERNS
              </button>
              <button 
                className="flex-1 border border-orange-600 bg-gradient-to-r from-orange-900/50 to-yellow-900/30 hover:from-orange-600 hover:to-yellow-600 hover:text-black py-2 transition-colors duration-300 shadow-md shadow-orange-900/20 rounded-md"
              >
                <AlertTriangle className="inline mr-2" size={16} />
                ENTER BONK MODE
              </button>
            </div>
          </div>
        ) : (
          // Main Console View
          <>
            {/* Header with pulsing gradient border */}
            <div className="border-b border-orange-600/80 pb-2 mb-4 relative bg-orange-950/30 rounded-md p-3 shadow-lg shadow-orange-900/30">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-400 opacity-30 animate-pulse" style={{height: '1px', bottom: 0, top: 'auto'}}></div>
              
              <div className="flex items-center">
                <Terminal className="mr-2 text-orange-400" size={16} />
                <div className="text-sm">
                  Support development of Infinite Bonk Terminal 2: <span className="bg-orange-600 text-black px-1">3hoA7HAwyTp3zQ7krewVL5TYq8wDRuDDMgyaJ1Rp1aaU</span>
                </div>
              </div>
              
              <div className="flex items-center mt-1">
                <Server className="mr-2 text-orange-400" size={16} />
                <div className="text-sm">
                  Support the Truth Terminal: <span className="bg-orange-600 text-black px-1">3hoA7HAwyTp3zQ7krewVL5TYq8wDRuDDMgyaJ1Rp1aaU</span>
                </div>
              </div>
            </div>

            {/* Connection Status */}
            <div className="text-xs flex justify-between mb-2 bg-orange-950/40 p-2 rounded-md border border-orange-800/40">
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${consoleStatus === 'READY' ? 'bg-green-500' : 'bg-orange-500 animate-pulse'}`}></div>
                <span>{consoleStatus}</span>
              </div>
              <div className="flex items-center">
                <Zap size={12} className="mr-1 text-orange-400" />
                <span>AI INTEGRITY: {aiIntegrity}%</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <div className="flex items-center border border-orange-600 bg-orange-950/40 p-2 shadow-lg shadow-orange-900/30 rounded-md">
                <Search className="mr-2 text-orange-400" size={16} />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="query the bonk terminal..."
                  className="w-full bg-transparent outline-none text-orange-400"
                />
                <span className={`text-orange-600 ${blinkCursor ? 'opacity-100' : 'opacity-0'}`}>▌</span>
              </div>
            </div>

            {/* Screensaver Button */}
            <div className="mb-4">
              <button 
                onClick={startEternalMode}
                className="w-full border border-orange-600 bg-gradient-to-r from-orange-900/50 to-yellow-900/30 hover:from-orange-600 hover:to-yellow-600 hover:text-black py-2 transition-colors duration-300 shadow-md shadow-orange-900/20 rounded-md"
              >
                start screensaver / eternal mode
              </button>
            </div>

            {/* Sort Options */}
            <div className="mb-4 text-center bg-orange-950/30 p-2 rounded-md border border-orange-800/40">
              <span className="mr-2 text-orange-300">sort bonks by:</span>
              {sortOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleSortClick(option)}
                  className={`mx-1 px-2 py-1 rounded-sm ${sortBy === option.id ? 'bg-orange-600 text-black font-bold' : 'border border-orange-600 hover:bg-orange-900/50'}`}
                >
                  {glitchText(option.name)}
                </button>
              ))}
            </div>

            {/* Scenarios */}
            <div className="mb-4 text-center bg-orange-950/30 p-2 rounded-md border border-orange-800/40">
              <span className="mr-2 text-orange-300">or select a scenario:</span>
              <div className="flex flex-wrap justify-center">
                {scenarios.map(scenario => (
                  <button
                    key={scenario.id}
                    onClick={() => handleScenarioClick(scenario)}
                    className={`m-1 px-2 py-1 text-xs transform transition-all duration-300 hover:scale-105 rounded-sm
                      ${selectedScenario?.id === scenario.id 
                        ? 'bg-orange-600 text-black shadow-md shadow-orange-500/50 font-bold' 
                        : 'border border-orange-600 hover:bg-orange-900/50'}`}
                  >
                    {glitchText(scenario.name)}
                  </button>
                ))}
              </div>
            </div>

            {/* Conversations List */}
            <div ref={consoleRef} className="flex-grow overflow-auto custom-scrollbar bg-orange-950/20 rounded-md border border-orange-800/40 p-2">
              {sortedConversations.map((conversation, index) => (
                <div 
                  key={conversation.id} 
                  className={`py-1 border-b border-orange-800/30 hover:bg-orange-900/30 transition-colors rounded-sm ${index % 5 === 0 ? 'border-l-2 border-l-orange-600 pl-2' : ''} cursor-pointer`}
                  onClick={() => handleConversationClick(conversation)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300/90 mr-2">∆ {conversation.id}</span>
                    <div className="flex items-center text-xs">
                      <span className="text-orange-300/70 mr-2">[AI:{conversation.aiStrength}]</span>
                      <span className="text-orange-300/70 mr-2">{formatTime(conversation.timestamp)}</span>
                      <MessageSquare size={10} className="mr-1 text-orange-400" />
                      <span className="text-orange-300/70">{conversation.views}</span>
                    </div>
                  </div>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" onClick={(e) => { e.preventDefault(); handleConversationClick(conversation); }} className="text-orange-500 hover:text-orange-300 hover:underline flex items-center">
                    <FileText size={12} className="mr-1 inline" />
                    {conversation.title}
                  </a>
                </div>
              ))}
              
              {/* Special entry */}
              <div 
                className="py-1 border-b border-orange-800/30 bg-gradient-to-r from-orange-900/30 to-transparent rounded-sm cursor-pointer"
                onClick={() => handleConversationClick({
                  id: 13468,
                  title: 'conversation_1712183367.txt',
                  aiStrength: 99,
                  timestamp: Date.now() - 7340000000,
                  views: 1337
                })}
              >
                <span className="text-orange-300/90 mr-2">∆ 13468</span>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" onClick={(e) => e.preventDefault()} className="text-orange-500 hover:text-orange-300 hover:underline flex items-center">
                  <FileText size={12} className="mr-1 inline" />
                  conversation_1712183367.txt
                </a>
                <div className="text-sm text-orange-300/70 italic">the goatse of ghostly bonk terminals</div>
              </div>
            </div>

            {/* Footer Status Bar - similar to Windows but themed */}
            <div className="mt-4 flex justify-between items-center text-xs border-t border-orange-600/50 pt-2 bg-orange-950/30 p-2 rounded-md">
              <div className="flex items-center">
                <Terminal size={14} className="mr-2 text-orange-400" />
                <span className="text-orange-300/90">BONK TERMINAL v2.5.1</span>
              </div>
              <div className="flex items-center">
                <Cloud size={14} className="mr-2 text-orange-400" />
                <span className="text-orange-300/90">Neural fog detected</span>
                <span className="mx-2 text-orange-500">•</span>
                <Clock size={14} className="mr-1 text-orange-400" />
                <span className="text-orange-300/90">11:39 PM</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InfiniteBonkConsole;