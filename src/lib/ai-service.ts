export const getAIResponse = async (prompt: string) => {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const responses: Record<string, string> = {
    'Farming Tips': 'Currently, for Dinari Village, focusing on organic mulching can help retain soil moisture by up to 20% during the summer months.',
    'Market Prices': 'The price of Wheat in the local mandi is ₹2,125/q, showing a 2.5% increase from last week.',
    'Local News': 'Panchayat elections are scheduled for next month. Ensure your voter ID is updated.',
    'Health Help': 'The weekly health camp is tomorrow at 9 AM in the Community Hall. Dr. Sameer will be visiting.'
  };

  return responses[prompt] || "I am Talha AI, your village assistant. How can I help you today with information about Dinari Village?";
};

export const startSpeechRecognition = (callback: (text: string) => void) => {
  if (!('webkitSpeechRecognition' in window)) {
    console.warn("Speech recognition not supported");
    return;
  }

  const recognition = new (window as any).webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.onresult = (event: any) => {
    const text = event.results[0][0].transcript;
    callback(text);
  };
  recognition.start();
};

export const speakText = (text: string) => {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
};
