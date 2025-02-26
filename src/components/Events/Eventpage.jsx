// import React, { useEffect, useRef, useState } from "react";
// import Navbar from "../Navbar";
// import Footer from "../Footer";

// const events = [
//   { id: 1, name: "Tech Innovations Summit", description: "Join industry leaders for insights and networking." },
//   { id: 2, name: "Creative Design Workshop", description: "Explore creativity with expert designers." },
//   { id: 3, name: "Startup Pitch Night", description: "Showcase ideas to investors and mentors." },
//   { id: 4, name: "Coding Bootcamp", description: "Hands-on coding sessions and projects." },
//   { id: 5, name: "Digital Marketing Conference", description: "Latest trends and strategies in marketing." },
//   { id: 6, name: "Health & Wellness Expo", description: "Explore wellness with technology." },
// ];

// const Events = () => {

//   const cardContainerRef = useRef(null);
//   const outerContainerRef = useRef(null);
//   const [cardOverlayStyle, setCardOverlayStyle] = useState({ top: 0, height: 0 });

//   useEffect(() => {
//     const updateOverlay = () => {
//       if (cardContainerRef.current && outerContainerRef.current) {
//         const cardRect = cardContainerRef.current.getBoundingClientRect();
//         const outerRect = outerContainerRef.current.getBoundingClientRect();
//         const top = cardRect.top - outerRect.top;
//         const height = cardRect.height;
//         setCardOverlayStyle({ top, height });
//       }
//     };

//     updateOverlay();
//     window.addEventListener("resize", updateOverlay);
//     window.addEventListener("scroll", updateOverlay);
//     return () => {
//       window.removeEventListener("resize", updateOverlay);
//       window.removeEventListener("scroll", updateOverlay);
//     };
//   }, []);

//   const whiteStickStyle = {
//     position: "absolute",
//     zIndex: 0,
//     width: "1px",
//     height: "100%",
//     backgroundColor: "white",
//   };

//   // Overlay style for the white stick blur effect outside the heading box
//   const overlayStyle = {
//     position: "absolute",
//     zIndex: 1,
//     width: "1px",
//     backgroundColor: "white",
//     filter: "blur(5px)",
//     pointerEvents: "none",
//     transition: "all 0.3s ease",
//     top: `${cardOverlayStyle.top}px`,
//     height: `${cardOverlayStyle.height}px`,
//   };

//   return (
//     <>

//       <Navbar />

//       <div
//         ref={outerContainerRef}
//         className="relative bg-black text-white px-1 py-20 min-h-screen overflow-y-auto no-scrollbar"
//       >

//         <div
//           style={{ ...whiteStickStyle, left: "50%", transform: "translateX(-50%)" }}
//         ></div>
//         <div style={{ ...whiteStickStyle, left: "20%" }}></div>
//         <div style={{ ...whiteStickStyle, right: "20%" }}></div>

//         <div
//           style={{ ...overlayStyle, left: "50%", transform: "translateX(-50%)" }}
//         ></div>
//         <div style={{ ...overlayStyle, left: "20%" }}></div>
//         <div style={{ ...overlayStyle, right: "20%" }}></div>

//         <div className="flex justify-center mb-8">
//           <div className="relative inline-block">

//             <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-lg border border-purple-700"></div>
//             <h2 className="relative z-10 text-3xl md:text-4xl font-bold px-8 py-4">
//               EVENTS
//             </h2>
//           </div>
//         </div>

//         <div className="relative p-[3px] my-16 rounded-xl bg-gradient-to-r from-blue-500 via-red-500 to-green-500 animate-borderMove w-full max-w-6xl mx-auto">

//           <div ref={cardContainerRef} className="p-6 md:p-10 lg:p-14 rounded-xl bg-black">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {events.map((event) => (
//                 <div
//                   key={event.id}
//                   className="relative group bg-gray-900 border border-purple-700 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
//                 >
//                   <img
//                     src="https://s3-alpha-sig.figma.com/img/7bbf/ec38/af79878de46f1d33136510a9e5745c74?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lBhLJjhmxhPRPtKfd-Q9VDGrqOr6OjP194jg2Ax4ESI6WauqoevPe1RGrekvXbxIs07y3nxnNBdtmIk9fULN0onXBjidt2ZlsGcd14ecXoyikcQRYn-Gv8iYQtC6iQLES0EKAZl9woiqBPTyIn4jJkrYARGWLdkr5xwyTOmhQdtFDd5RQn-gvPWncyw4RB8QQPfNrr1grvE16rhj0lsRvql5zbqltnkDDyopg22Zm0j1aizXkwvUhchNlCLF1qxsLyno2BqeEPzw500Xg~ur9ARDbO82AbHzZtXc0O4L9KGYViAjCzwxSpe83EecBmtl5bo6nBtNjnYWscpkwhXDyw__"
//                     alt={event.name}
//                     className="w-full h-56 sm:h-64 md:h-72 object-cover transition-all duration-400 ease-in-out group-hover:brightness-70 border-b border-purple-700"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 h-1/2 flex flex-col items-center justify-center text-center bg-[rgba(40,8,64,0.85)] transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-4 sm:p-6 border-t border-purple-400">
//                     <h3 className="text-lg sm:text-xl font-bold text-white">{event.name}</h3>
//                     <p className="text-sm sm:text-base text-gray-300">{event.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <style>{`
//           @keyframes borderMove {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//           .animate-borderMove {
//             background-size: 200% 200%;
//             animation: borderMove 4s infinite linear;
//           }

//           @keyframes cardPulse {
//             0% { box-shadow: 0 0 10px rgba(128, 0, 128, 0.5); }
//             50% { box-shadow: 0 0 20px rgba(128, 0, 128, 0.8); }
//             100% { box-shadow: 0 0 10px rgba(128, 0, 128, 0.5); }
//           }
//           .animate-cardPulse:hover {
//             animation: cardPulse 1.5s infinite ease-in-out;
//           }
//         `}</style>
//       </div>

//       <Footer />

//       <style jsx global>{`
//         html,
//         body {
//           background-color: #000;
//           margin: 0;
//           padding: 0;
//         }
//         /* Hide scrollbar while allowing scrolling */
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Events;

import React, { useState, useEffect, Suspense } from "react";
import { ReactTyped } from "react-typed";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PageReveal from "../PageReveal";
import "./styles.css";
import eventData from "../Events/allevents/data.json"; // Adjust path if necessary
import { getImageUrl } from "../../utils/image-util"; // Import your utility

function Loading() {
  return (
    <div className="h-screen w-screen bg-background fixed z-[300]">
      <img
        src="/fetsu-presents-srijan25.svg"
        alt="Srijan 25 Logo"
        className="absolute top-[30%] left-[51%] -translate-[50%] h-36 w-auto"
      />
      <div className="absolute top-[75%] left-[50%] -translate-[50%] p-3 animate-spin bg-gradient-to-bl from-red via-purple to-lavender h-24 w-24 aspect-square rounded-full">
        <img
          src="/techno-management-fest.webp"
          alt="The Annual Techno-Management Fest of Jadavpur University"
          className="absolute top-[52.5%] left-[50%] -translate-[50%] border border-white p-2 w-2/3 sm:w-1/3"
        />
        <div className="rounded-full h-full w-full bg-background"></div>
      </div>
    </div>
  );
}

const Events = () => {
  // Helper function to truncate text if it's too long
  const truncateText = (text, maxLength = 310) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const [activeCategory, setActiveCategory] = useState("all");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const transformed = eventData.map((item) => ({
      eventID: item.eventID,
      category: item.category,
      title: item.eventName,
      imageUrl: item.eventPoster, // Now this is just the filename (e.g., "ptb.png")
      description: Array.isArray(item.eventDescription)
        ? item.eventDescription.join(" ")
        : item.eventDescription,
      // Other fields can be added as needed
    }));

    setEvents(transformed);
    setLoading(false);
  }, []);

  const filteredEvents =
    activeCategory === "all"
      ? events
      : events.filter((event) => event.category === activeCategory);

  const handleCardClick = (eventData) => {
    window.location.href = `/events/${eventData.category}/${eventData.eventID}`;
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="font-sometypeMono">
          <Navbar />
          <PageReveal />
          {/* Background and grid lines */}
          <div className="relative bg-gradient-to-r from-background to-background text-white min-h-screen py-2 px-2">
            {/* ... Your GridLines and Header Code ... */}
            <nav className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 mb-10">
              {[
                "all",
                "coding",
                "circuits",
                "business",
                "brainstorming",
                "misc",
                "gaming",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 focus:outline-none ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-black-500 to-green-600 text-white shadow-xl transform scale-105"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-lg"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </nav>

            {loading ? (
              <div className="text-center text-xl">Loading events...</div>
            ) : (
              <div className="max-w-[1500px] mx-auto p-20 border-4 border-gray-600 rounded-2xl shadow-2xl">
                <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15">
                  {filteredEvents.map((event) => (
                    <div
                      key={event.eventID}
                      onClick={() => handleCardClick(event)}
                      className="card group relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <img
                        src={getImageUrl(event.imageUrl)} // Dynamically get the image URL
                        alt={event.title}
                        className="w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                        <p className="text-sm">{truncateText(event.description, 310)}</p>
                      </div>
                    </div>
                  ))}
                </main>
              </div>
            )}
          </div>
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

const App = () => <Events />;
export default App;
