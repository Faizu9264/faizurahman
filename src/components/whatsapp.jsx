// import React, { useEffect, useState } from "react";
// import EmojiPicker from "emoji-picker-react";
// import { SectionWrapper } from "../hoc";
// import { Send } from "lucide-react";

// const WhatsAppButton = () => {
//   const [showWidget, setShowWidget] = useState(false);
//   const [userMessage, setUserMessage] = useState("");
//   const [showWarning, setShowWarning] = useState(false);
//   const [messageTime, setMessageTime] = useState(null);
//   const [timeAgo, setTimeAgo] = useState("");
//   const [initialMessage, setInitialMessage] = useState("");
//   const [typing, setTyping] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const phoneNumber = "+91 6282821603";
//   const formattedNumber = phoneNumber.replace(/\D/g, "");

//   const toggleWidget = () => {
//     setShowWidget((prevState) => {
//       const nextState = !prevState;

//       if (nextState) {
//         // Reset states
//         setTyping(true);
//         setInitialMessage("");

//         // Display initial message
//         setTimeout(() => {
//           setInitialMessage("Hi there! 👋 How can I assist you today?");
//           setTyping(false);
//         }, 2000); // Delay for initial message

//         // Record message time
//         const currentTime = new Date();
//         setMessageTime(currentTime);
//         updateTimeAgo(currentTime);
//       } else {
//         // Reset all messages and typing indicators when the widget is closed
//         setInitialMessage("");
//         setTyping(false);
//       }

//       return nextState;
//     });
//   };

//   const handleSendMessage = () => {
//     if (!userMessage.trim()) {
//       setShowWarning(true);
//       return;
//     }

//     const encodedMessage = encodeURIComponent(userMessage);
//     const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
//     window.open(whatsappUrl, "_blank");

//     setUserMessage("");
//     setShowWidget(false);
//     setShowWarning(false);
//   };

//   const handleUserMessageChange = (e) => {
//     setUserMessage(e.target.value);

//     if (e.target.value.trim()) {
//       setShowWarning(false);
//     }
//   };

//   const onEmojiClick = (emojiData) => {
//     setUserMessage((prev) => prev + emojiData.emoji);
//     setShowEmojiPicker(false);
//   };

//   const updateTimeAgo = (time) => {
//     const now = new Date();
//     const diffInSeconds = Math.floor((now - time) / 1000);
//     const diffInMinutes = Math.floor(diffInSeconds / 60);

//     if (diffInMinutes < 1) {
//       setTimeAgo("Just now");
//     } else if (diffInMinutes === 1) {
//       setTimeAgo("1 minute ago");
//     } else {
//       setTimeAgo(`${diffInMinutes} minutes ago`);
//     }
//   };

//   useEffect(() => {
//     if (messageTime) {
//       const interval = setInterval(() => {
//         updateTimeAgo(messageTime);
//       }, 60000);

//       return () => clearInterval(interval);
//     }
//   }, [messageTime]);

//   useEffect(() => {
//     // Disable background scroll when chatbox is open
//     if (showWidget) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = ""; // Reset to default
//     }

//     // Cleanup on component unmount
//     return () => {
//       document.body.style.overflow = ""; // Ensure scrolling is re-enabled
//     };
//   }, [showWidget]);

//   return (
//     <div>
//       {/* WhatsApp Floating Button */}
//       <div className="indicator fixed bottom-20  right-8 z-50 ">
//         <button
//           onClick={toggleWidget}
//           className="skeleton shrink-0 mask mask-hexagon fixed bottom-8 right-6  flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//           aria-label="Contact us on WhatsApp"
//         >
//           {/* {loading && (
//                   <div className="skeleton h-full w-full object-contain rounded-full shrink-0 rounded-full bg-gray-300 animate-pulse"></div>
//                 )} */}
//           <img
//             src="/whatsapp-logo.png"
//             alt="WhatsApp icon"
//             className="h-full w-full object-contain rounded-full"
//           />
//         </button>

//         <span className="badge  indicator-item text-white bg-red-500">+1</span>
//       </div>

//       {/* WhatsApp Pop-up Widget */}
//       {showWidget && (
//         <div className="fixed bottom-24 right-6 z-50 w-80 bg-amber-50 shadow-lg rounded-lg border p-4">
//           <div className="sticky-header flex items-center justify-between border-b pb-2">
//             <div className="flex items-center space-x-2">
//               <div className="flex items-center text-center flex-col space-y">
//                 <div className="avatar online">
//                   <div className="w-12 rounded-full ">
//                     {loading && (
//                       <div className="skeleton h-12 w-12 shrink-0 rounded-full bg-gray-300 animate-pulse"></div>
//                     )}
//                     <img
//                       src="https://res.cloudinary.com/dqp0z3jet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735197063/testing/Profile_shshbt.jpg"
//                       alt="Avatar"
//                       className={`h-12 w-12 shrink-0 rounded-full ${
//                         loading ? "hidden" : "block"
//                       }`}
//                       onLoad={() => setLoading(false)}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start text-center flex-col space-y">
//                 <div className="text-start flex items-center space-x-2">
//                   {/* <span className="font-medium">Chat with</span> */}
//                   <div className="flex items-center ">
//                     {/* <div className="text-sm text-gray-500 badge badge-accent">
//                       Faizu Rahman
//                     </div> */}
//                     <div>
//                       <strong>Faizu Rahman</strong>
//                     </div>
//                     {/* Blue tick */}
//                     <img
//                       src="/blue-tick.png"
//                       alt="Blue Tick"
//                       className="h-8 w-8"
//                     />
//                   </div>
//                 </div>

//                 <div className="text-sm text-gray-500">
//                   {/* Typically replies within 1 day */}
//                   online
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={toggleWidget}
//               className="text-xl font-bold focus:outline-none"
//             >
//               <span className="flex items-center  justify-center w-6 h-6 text-xl font-bold bg-red-100 rounded-full hover:bg-gray-200">
//                 &times;
//               </span>
//             </button>
//           </div>

//           <div className="messages-container mt-4 space-y">
//             <div className="flex justify-center">
//               <div className="badge badge-ghost">Today</div>
//             </div>
//             {/* Display Faizu's initial message */}
//             <div className="chat chat-start ">
//               {typing ? (
//                 <div className="chat-bubble bg-gray-100 p-2 rounded-md flex items-center justify-center">
//                   <p className="text-sm text-gray-700 flex items-center space-x-2">
//                     <span>Typing</span>
//                     <span className="loading loading-dots loading-md"></span>
//                   </p>
//                 </div>
//               ) : (
//                 <>
//                   <div className="chat-header">
//                     Faizu <time className="text-xs opacity-50">{timeAgo}</time>
//                   </div>
//                   <div className="chat-bubble">{initialMessage}</div>
//                   <div className="chat-footer opacity-50 flex items-center gap-1">
//                     <span>Delivered</span>
//                     <svg
//                       viewBox="0 0 16 15"
//                       width="16"
//                       height="15"
//                       className="fill-current text-teal-500"
//                     >
//                       <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
//                     </svg>
//                   </div>
//                 </>
//               )}
//             </div>

//             <div className="chat chat-end">
//               {userMessage ? (
//                 <div className="chat-bubble bg-gray-100 p-2 rounded-md flex items-center justify-center">
//                   <p className="text-sm text-gray-700 flex items-center space-x-2">
//                     <span>Typing</span>
//                     <span className="loading loading-dots loading-md"></span>
//                   </p>
//                 </div>
//               ) : (
//                 ""
//               )}
//             </div>
//             <div className="chat chat-end"></div>
//           </div>
//           <div className="relative flex items-center space-x-2">
//             {/* Emoji Button */}
//             <button
//               onClick={() => setShowEmojiPicker((prev) => !prev)}
//               className="absolute left-3 top-1.5 p-1 rounded-md  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               {showEmojiPicker ? "❌" : "😊"}
//             </button>

//             {/* Emoji Picker */}
//             {showEmojiPicker && (
//               <div className="absolute bottom-12 left-0 right-0 flex justify-center">
//                 <EmojiPicker onEmojiClick={onEmojiClick} />
//               </div>
//             )}

//             {/* Textarea */}
//             <textarea
//               className="w-full pl-10 resize-none rounded-md bg-white p-2 bg-gray-300 border text-black placeholder-gray-400 focus:outline-none "
//               placeholder="Message"
//               rows={1}
//               value={userMessage}
//               onChange={handleUserMessageChange}
//             />

//             {/* Send Button */}
//             <button
//               onClick={handleSendMessage}
//               className="flex-shrink-0 rounded-full bg-gray-500 p-3 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//               disabled={showWarning}
//             >
//               <Send className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SectionWrapper(WhatsAppButton, "");

import React, { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { SectionWrapper } from "../hoc";
import { Send, Phone } from "lucide-react";

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
  const [formattedTime, setFormattedTime] = useState("");

  const phoneNumber = "+91 6282821603";
  const formattedNumber = phoneNumber.replace(/\D/g, "");

  const toggleWidget = () => {
    setShowWidget((prevState) => {
      const nextState = !prevState;

      if (nextState) {
        // Reset states
        setTyping(true);
        setInitialMessage("");

        // Display initial message
        setTimeout(() => {
          setInitialMessage("Hi there! 👋 How can I assist you today?");
          setTyping(false);
        }, 2000); // Delay for initial message

        // Record message time
        const currentTime = new Date();
        setMessageTime(currentTime);
        updateTimeAgo(currentTime);
      } else {
        // Reset all messages and typing indicators when the widget is closed
        setInitialMessage("");
        setTyping(false);
        setShowEmojiPicker(false);
        setUserMessage("");
      }

      return nextState;
    });
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
    setUserMessage("");
  };

  const handleCall = () => {
    window.open(`tel:${formattedNumber}`, "_self");
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

    // Add this line to set the formatted time
    setFormattedTime(
      time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  useEffect(() => {
    if (messageTime) {
      const interval = setInterval(() => {
        updateTimeAgo(messageTime);
      }, 60000);

      return () => clearInterval(interval);
    }
  }, [messageTime]);

  useEffect(() => {
    // Disable background scroll when chatbox is open
    if (showWidget) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Reset to default
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is re-enabled
    };
  }, [showWidget]);

  return (
    <div>
      {/* WhatsApp Floating Button */}
      <div className="indicator fixed  bottom-20 right-8 z-50 ">
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
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-gray-100 shadow-lg rounded-lg border p-4 ">
          <div className="sticky-header flex items-center justify-between border-b pb-2 skeleton p-2">
            <div className="flex items-center space-x-2 ">
              <div className="flex items-center text-center flex-col space-y">
                <div className="avatar online">
                  <div className="w-12 rounded-full ">
                    {loading && (
                      <div className="skeleton h-12 w-12 shrink-0 rounded-full bg-gray-300 animate-pulse"></div>
                    )}
                    <img
                      src="https://res.cloudinary.com/dqp0z3jet/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735197063/testing/Profile_shshbt.jpg"
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
                <div className="text-start flex items-center space-x-2">
                  {/* <span className="font-medium">Chat with</span> */}
                  <div className="flex items-center ">
                    {/* <div className="text-sm text-gray-500 badge badge-accent">
                      Faizu Rahman
                    </div> */}
                    <div>
                      <strong>Faizu Rahman</strong>
                    </div>
                    {/* Blue tick */}
                    <img
                      src="/blue-tick.png"
                      alt="Blue Tick"
                      className="h-8 w-8"
                    />
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  {/* Typically replies within 1 day */}
                  online
                </div>
              </div>
            </div>

            <button
              onClick={toggleWidget}
              className="text-xl font-bold focus:outline-none"
            >
              <span className="flex items-center  justify-center w-6 h-6 text-xl font-bold bg-red-400 rounded-full hover:bg-red-300">
                &times;
              </span>
            </button>
          </div>

          <div className="messages-container  mt-4 mb-4 space-y bg-[url('/whatsapp-bg.jpg')]">
            <div className="flex justify-center m-3">
              <div className="badge badge-neutral">Today</div>
            </div>
            {/* Display Faizu's initial message */}
            <div className="chat chat-start ">
              {typing ? (
                <div className="chat-bubble bg-gray-100 p-2 rounded-md flex items-center justify-center">
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
                  <div className="chat-bubble relative">
                    {" "}
                    {/* Updated chat bubble */}
                    {initialMessage}
                    <span className="absolute bottom-1 right-2 text-xs text-gray-400">
                      {formattedTime}
                    </span>
                  </div>
                  <div className="chat-footer opacity-50 flex items-center gap-1">
                    <span>Delivered</span>
                    <svg
                      viewBox="0 0 16 15"
                      width="16"
                      height="15"
                      className="fill-current text-teal-500"
                    >
                      <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
                    </svg>
                  </div>
                </>
              )}
            </div>

            <div className="chat chat-end">
              {userMessage ? (
                <div className="chat-bubble bg-gray-100 p-2 rounded-md flex items-center justify-center">
                  <p className="text-sm text-gray-700 flex items-center space-x-2">
                    <span>Typing</span>
                    <span className="loading loading-dots loading-md"></span>
                  </p>
                </div>
              ) : (
                <>
                  <div className="chat chat-end">
                    <div
                      className="chat-bubble bg-blue-100 text-blue-900 px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-200"
                      onClick={() => {
                        // Directly send the message to WhatsApp
                        const message = "I want to know about your services!";
                        const encodedMessage = encodeURIComponent(message);
                        const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                    >
                      I want to know about your services!
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="chat chat-end"></div>
          </div>
          <div className="relative flex items-center space-x-2">
            {/* Call button */}
            <button
              onClick={handleCall}
              className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Call Faizu Rahman"
            >
              <Phone className="h-4 w-4" />
            </button>
            {/* Emoji Button */}
            <button
              onClick={() => setShowEmojiPicker((prev) => !prev)}
              className="absolute left-9 top-1.5 p-1 rounded-md  bg-amber-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {showEmojiPicker ? "❌" : "😊"}
            </button>

            {/* Emoji Picker */}
            {showEmojiPicker && (
              <div className="absolute bottom-12 left-0 right-0 z-50 flex justify-center">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}

            {/* Textarea */}
            <textarea
              className="w-full pl-10 resize-none rounded-md bg-white p-2 bg-gray-300 border text-black placeholder-gray-400 focus:outline-none "
              placeholder="Message"
              rows={1}
              value={userMessage}
              onChange={handleUserMessageChange}
            />

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              className="flex-shrink-0 rounded-full bg-emerald-500 p-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={showWarning}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(WhatsAppButton, "");
