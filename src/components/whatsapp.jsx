import React, { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { SectionWrapper } from "../hoc";
import { Send } from "lucide-react";

const WhatsAppButton = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [messageTime, setMessageTime] = useState(null);
  const [timeAgo, setTimeAgo] = useState("");
  const [initialMessage, setInitialMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [loading, setLoading] = useState(true);

  const phoneNumber = "+91 6282821603";
  const formattedNumber = phoneNumber.replace(/\D/g, "");

  const toggleWidget = () => {
    setShowWidget(!showWidget);
    setShowWarning(false);
    if (!showWidget) {
      setTyping(true);
      setTimeout(() => {
        setInitialMessage("Hi there! 👋 How can I assist you today?");
        setTyping(false);
      }, 2000);

      const currentTime = new Date();
      setMessageTime(currentTime);
      updateTimeAgo(currentTime);
    }
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) {
      setShowWarning(true);
      return;
    }

    const encodedMessage = encodeURIComponent(userMessage);
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    setUserMessage("");
    setShowWidget(false);
    setShowWarning(false);
  };

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);

    if (e.target.value.trim()) {
      setShowWarning(false);
    }
  };

  const onEmojiClick = (emojiData) => {
    setUserMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const updateTimeAgo = (time) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - time) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInMinutes < 1) {
      setTimeAgo("Just now");
    } else if (diffInMinutes === 1) {
      setTimeAgo("1 minute ago");
    } else {
      setTimeAgo(`${diffInMinutes} minutes ago`);
    }
  };

  useEffect(() => {
    if (messageTime) {
      const interval = setInterval(() => {
        updateTimeAgo(messageTime);
      }, 60000);

      return () => clearInterval(interval);
    }
  }, [messageTime]);

  return (
    <div>
      {/* WhatsApp Floating Button */}
      <div className="indicator fixed bottom-20  right-8 z-50 ">
        <button
          onClick={toggleWidget}
          className="skeleton shrink-0 mask mask-hexagon fixed bottom-8 right-6  flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Contact us on WhatsApp"
        >
          {/* {loading && (
                  <div className="skeleton h-full w-full object-contain rounded-full shrink-0 rounded-full bg-gray-300 animate-pulse"></div>
                )} */}
          <img
            src="/whatsapp-logo.png"
            alt="WhatsApp icon"
            className="h-full w-full object-contain rounded-full"
          />
        </button>

        <span className="badge  indicator-item text-white bg-red-500">+1</span>
      </div>

      {/* WhatsApp Pop-up Widget */}
      {showWidget && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white shadow-lg rounded-lg border p-4">
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-center flex-col space-y">
                <div className="avatar online">
                  {/* <div className="w-12 rounded-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="Avatar"
                    />
                    <img src="/profile.jpg" alt="Avatar" />
                  </div> */}
                  <div className="w-12 rounded-full ">
                    {loading && (
                      <div className="skeleton h-12 w-12 shrink-0 rounded-full bg-gray-300 animate-pulse"></div>
                    )}
                    <img
                      src="/profile.jpg"
                      alt="Avatar"
                      className={`h-12 w-12 shrink-0 rounded-full ${
                        loading ? "hidden" : "block"
                      }`}
                      onLoad={() => setLoading(false)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start text-center flex-col space-y">
                <div className="text-start">
                  <span className="font-medium">Chat with </span>
                  <div className="text-sm text-gray-500 badge badge-accent">
                    Faizu Rahman
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  Typically replies within 1 day
                </div>
              </div>
            </div>

            <button
              onClick={toggleWidget}
              className="text-xl font-bold focus:outline-none"
            >
              <span className="flex items-center  justify-center w-6 h-6 text-xl font-bold bg-red-100 rounded-full hover:bg-gray-200">
                &times;
              </span>
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {/* Display Sara's initial message */}
            <div className="chat chat-start ">
              <div className="chat-image avatar">
                {/* <div className="w-10 rounded-full">
                  <img
                    alt="Sara Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                  <img src="/profile.jpg" alt="Avatar" />
                </div> */}
                <div className="w-12 rounded-full ">
                  {loading && (
                    <div className="skeleton h-12 w-12 shrink-0 rounded-full bg-gray-300 animate-pulse"></div>
                  )}
                  <img
                    src="/profile.jpg"
                    alt="Avatar"
                    className={`h-12 w-12 shrink-0 rounded-full ${
                      loading ? "hidden" : "block"
                    }`}
                    onLoad={() => setLoading(false)}
                  />
                </div>
              </div>

              {typing ? (
                <div className="bg-gray-100 p-2 rounded-md flex items-center justify-center">
                  <p className="text-sm text-gray-700 flex items-center space-x-2">
                    <span>Typing</span>
                    <span className="loading loading-dots loading-md"></span>
                  </p>
                </div>
              ) : (
                <>
                  <div className="chat-header">
                    Faizu <time className="text-xs opacity-50">{timeAgo}</time>
                  </div>
                  <div className="chat-bubble">{initialMessage}</div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </>
              )}
            </div>
            <div className="chat chat-end">
              {userMessage ? (
                <div className="bg-gray-100 p-2 rounded-md flex items-center justify-center">
                  <p className="text-sm text-gray-700 flex items-center space-x-2">
                    <span>Typing</span>
                    <span className="loading loading-dots loading-md"></span>
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="chat chat-end"></div>
            {showWarning && (
              <div role="alert" className="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>
                  <strong>Warning:</strong> Please type a message before
                  starting the chat!
                </span>
              </div>
            )}

            {/* <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowEmojiPicker((prev) => !prev)}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                😊
              </button>
              {showEmojiPicker && (
                <div className="absolute inset-x-1 bottom-16 flex justify-center">
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
              )}
              <textarea
                className="flex-grow resize-none rounded-md border border-gray-700 bg-gray-800 p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Message..."
                rows={1}
                value={userMessage}
                onChange={handleUserMessageChange}
              />
              <button
                onClick={handleSendMessage}
                className="flex-shrink-0 rounded-full bg-green-500 p-3 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <Send className="h-5 w-5" />
              </button>
            </div> */}
            <div className="relative flex items-center space-x-2">
              {/* Emoji Button */}
              <button
                onClick={() => setShowEmojiPicker((prev) => !prev)}
                className="absolute left-3 top-1.5 p-1 rounded-md  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {showEmojiPicker ? "❌" : "😊"}
              </button>

              {/* Emoji Picker */}
              {showEmojiPicker && (
                <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
              )}

              {/* Textarea */}
              <textarea
                className="w-full pl-10 resize-none rounded-md border border-gray-700 bg-gray-800 p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Message..."
                rows={1}
                value={userMessage}
                onChange={handleUserMessageChange}
              />

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                className="flex-shrink-0 rounded-full bg-green-500 p-3 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(WhatsAppButton, "");
