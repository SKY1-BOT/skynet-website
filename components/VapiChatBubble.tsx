import React, { useEffect } from 'react';

declare global {
  interface Window {
    Vapi: any; // Declare Vapi on the Window object
  }
}

const VapiChatBubble: React.FC = () => {
  useEffect(() => {
    let vapiInstance: any = null;

    const loadVapiScript = () => {
      const existingScript = document.getElementById('vapi-sdk-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@vapi-ai/client-sdk/dist/vapi-sdk.js";
        script.id = 'vapi-sdk-script';
        script.async = true;
        script.onload = () => {
          console.log("Vapi SDK script loaded successfully.");
          if (window.Vapi) {
            console.log("window.Vapi is available after script load. Initializing Vapi...");
            vapiInstance = new window.Vapi({
              publicKey: "eb26c95d-009c-4255-abd3-a98df68cba22"
            });
            vapiInstance.setAssistant({ id: "7c4b11b3-02ec-45c0-af9c-f122fffa63b7" });
            console.log("Vapi assistant set. Widget should be visible now.");
          } else {
            console.error("Vapi SDK loaded, but window.Vapi is still not available.");
          }
        };
        script.onerror = (error) => {
          console.error("Error loading Vapi SDK script:", error);
        };
        document.body.appendChild(script);
      } else {
        console.log("Vapi SDK script already exists.");
        // If the script already exists, and we re-mount, ensure Vapi is initialized if not already
        if (window.Vapi && !vapiInstance) {
          console.log("Vapi SDK already loaded, initializing Vapi...");
          vapiInstance = new window.Vapi({
            publicKey: "eb26c95d-009c-4255-abd3-a98df68cba22"
          });
          vapiInstance.setAssistant({ id: "7c4b11b3-02ec-45c0-af9c-f122fffa63b7" });
          console.log("Vapi assistant set.");
        }
      }
    };

    loadVapiScript();

    return () => {
      if (vapiInstance) {
        console.log("VapiChatBubble unmounting. Destroying Vapi instance.");
        vapiInstance.destroy();
      }
      const script = document.getElementById('vapi-sdk-script');
      if (script && document.body.contains(script)) {
        console.log("Removing Vapi SDK script from DOM.");
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default VapiChatBubble; 