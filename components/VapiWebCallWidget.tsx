import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
// import skynetLogo from '../skynet logo/logo-skynet.png'; // Import your Skynet logo

const VAPI_PUBLIC_API_KEY = 'eb26c95d-009c-4255-abd3-a98df68cba22'; // Replace with your Vapi Public API Key
const VAPI_ASSISTANT_ID = '7c4b11b3-02ec-45c0-af9c-f122fffa63b7'; // Replace with your Vapi Assistant ID

const VapiWebCallWidget: React.FC = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [callActive, setCallActive] = useState(false);
  const [callConnecting, setCallConnecting] = useState(false); // New state for connecting status
  const [transcript, setTranscript] = useState<string[]>([]); // Still keeping for console log if needed

  useEffect(() => {
    const vapiInstance = new Vapi(VAPI_PUBLIC_API_KEY);
    setVapi(vapiInstance);

    const onCallStart = () => {
      console.log('Call started');
      setCallActive(true);
      setCallConnecting(false); // Call started, no longer connecting
      setTranscript([]);
    };

    const onCallEnd = () => {
      console.log('Call ended');
      setCallActive(false);
      setCallConnecting(false); // Ensure connecting is false on end
    };

    const onMessage = (message: any) => {
      if (message.type === 'transcript') {
        console.log(`${message.role}: ${message.transcript}`); // Log transcript to console
        setTranscript((prev) => [...prev, `${message.role}: ${message.transcript}`]);
      }
    };

    vapiInstance.on('call-start', onCallStart);
    vapiInstance.on('call-end', onCallEnd);
    vapiInstance.on('message', onMessage);

    return () => {
      vapiInstance.off('call-start', onCallStart);
      vapiInstance.off('call-end', onCallEnd);
      vapiInstance.off('message', onMessage);
    };
  }, []);

  const toggleCall = () => {
    if (!vapi) return; // Vapi not initialized

    if (callActive) {
      // If call is active, stop it
      vapi.stop();
    } else {
      // If call is inactive, start it
      setCallConnecting(true); // Indicate connecting status
      vapi.start(VAPI_ASSISTANT_ID);
    }
  };

  const buttonBackgroundColor = callActive ? '#4CAF50' : '#ff0000'; // Green when active, red when inactive
  const buttonText = callActive ? 'CALL ACTIVE' : 'SKYNET LIVE';
  const showLoader = callConnecting || callActive; // Show loader when connecting or active

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
    }}>
      <button
        onClick={toggleCall}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px 15px',
          backgroundColor: buttonBackgroundColor,
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Re-adding a subtle shadow for better visibility
        }}
      >
        {showLoader && (
          <div
            style={{
              border: '4px solid rgba(255, 255, 255, 0.3)',
              borderTop: '4px solid white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              animation: 'spin 1s linear infinite',
              marginBottom: '5px',
            }}
          ></div>
        )}
        <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{buttonText}</span>
        <span style={{ fontSize: '0.7em' }}>Powered by AIRIES AI</span>
      </button>
    </div>
  );
};

export default VapiWebCallWidget; 