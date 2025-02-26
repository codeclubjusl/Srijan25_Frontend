import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card';
import { CardContent } from '../components/ui/card-content';
import { cn } from '../../src/lib/utils';
import Navbar from './Navbar';
import Footer from './Footer';
import GridLines from './GridLines';
import QRCodeHolder from './QRCodeHolder';
import OrderForm from './merchandise/OrderForm'
import SrijanMerchandiseAnnouncement from './merchandise/Decor'

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const colors = ['White', 'Black'];

export default function MerchandisePage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderStatus, setOrderStatus] = useState('pending'); // Add order status state: 'pending', 'confirmed', or 'rejected'
  const imgLink = [
    "./tshirt1.png",
    "./tshirt2.png",
    "./tshirt3.png",
    "./tshirt4.png",
  ]
  const contacts = [
    { id: 1, name: "SK Mujtahid Hossain",dept: "Power Eng (UG3)",number :"9832944933"},
  ];
  const qrValue = "upi://pay?pa=user@upi&pn=User&mc=123456&tid=9876543210";


    const navigate = useNavigate();
  const handleOrderClick = () => {
    const userId = localStorage.getItem("sid");
    console.log({ userId });
    if (!userId) {
      navigate("/signup");
      // return;
    }
    setShowOrderForm(true);
  };

  const handleCloseForm = () => {
    setShowOrderForm(false);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Process the form submission here
    setShowOrderForm(false);
    // Note: No redirection happens here
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Status button component
  const StatusButton = ({ status, currentStatus, onClick }) => {
    // Define styles based on status type
    const getStatusStyles = () => {
      switch (status) {
        case 'confirmed':
          return {
            background: currentStatus === status ? 'bg-green-600' : 'bg-zinc-800',
            border: currentStatus === status ? 'border-green-400' : 'border-gray-500',
            hoverBg: 'hover:bg-green-700',
            text: 'Confirmed'
          };
        case 'rejected':
          return {
            background: currentStatus === status ? 'bg-red-600' : 'bg-zinc-800',
            border: currentStatus === status ? 'border-red-400' : 'border-gray-500',
            hoverBg: 'hover:bg-red-700',
            text: 'Rejected'
          };
        case 'pending':
        default:
          return {
            background: currentStatus === status ? 'bg-yellow-600' : 'bg-zinc-800',
            border: currentStatus === status ? 'border-yellow-400' : 'border-gray-500',
            hoverBg: 'hover:bg-yellow-700',
            text: 'Pending'
          };
      }
    };

    const styles = getStatusStyles();

    return (
      <button
        className={`px-4 py-2 text-white text-sm font-medium rounded ${styles.background} ${styles.hoverBg} border ${styles.border} transition-colors duration-200`}
        onClick={() => onClick(status)}
      >
        {styles.text}
      </button>
    );
  };

  return (
    <div className="bg-background font-sometypeMono text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col px-4 md:px-8 py-6 md:py-8 relative">
        {/* Add GridLines component here */}
        <GridLines />

        {/* Header - Center on mobile, left on desktop */}
        <div className="mb-6 md:mb-12 mt-2 md:mt-4 flex justify-center md:justify-start md:ml-6">
          <img src='/merchicon.svg' alt="Merchandise Icon" className="h-30 md:h-30" style={{ marginLeft: "20px" }} />
        </div>

        {/* Main Product Container */}
        <div className="flex flex-col md:flex-row md:justify-between relative mb-16">
          {/* Desktop Price Tag - Hidden on mobile */}
          <div className="hidden md:block md:w-1/6" style={{ marginTop: "120px", marginLeft: "80px" }}>
            <div className="flex border border-gray-500 w-full mt-48">
              <div className="w-1/3 bg-[#1c1c1c] text-white text-lg flex justify-center items-center p-2 border-r border-gray-500">
                Price
              </div>
              <div className="w-2/3 bg-[#141414] text-white text-lg flex justify-center items-center p-2">
                Rs. 349/-
              </div>
            </div>
          </div>

          {/* Image Container and the 4-row grid */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center mb-6 md:mb-0 relative">
            {/* Image Container */}
            <div className="w-4/5 md:w-1/2 mb-8 sm:mb-0 flex flex-col items-center justify-center">
              <img
                src={imgLink[1]}
                alt="T-Shirt"
                className="w-full max-w-md ml-5 sm:ml-0"
              />
              
              
              {/*<div className="flex space-x-3 mt-4" style={{marginTop:"100px"}}>
                <StatusButton
                  status="pending"
                  currentStatus={orderStatus}
                  onClick={setOrderStatus}
                />
                <StatusButton
                  status="confirmed"
                  currentStatus={orderStatus}
                  onClick={setOrderStatus}
                />
                <StatusButton
                  status="rejected"
                  currentStatus={orderStatus}
                  onClick={setOrderStatus}
                />
              </div>*/}
            </div>

            <div className="w-full md:w-1/2 flex flex-col border border-gray-500 bg-background mt-4 md:mt-0 md:ml-12" style={{ maxWidth: "290px" }}>
              {/* Row 1: Size Label */}
              <div className="border-b border-gray-500 p-2">
                <p className="text-lg text-right font-medium">Size</p>
              </div>

              {/* Row 2: Size Checkboxes */}
              <div className="border-b border-gray-500 p-2">
                <div className="grid grid-cols-5 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-2 py-1 text-white text-sm text-center ${selectedSize === size ? "bg-gray-800" : "bg-zinc-800"
                        }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Color Label */}
              <div className="border-b border-gray-500 p-2">
                <p className="text-lg text-right font-medium">Colour</p>
              </div>

              {/* Row 4: Color Checkboxes */}
              <div className="p-2">
                <div className="grid grid-cols-2 place-items-center gap-4">
                  {colors.map(color => (
                    <label key={color} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        value={color.toLowerCase()}
                        checked={selectedColor.toLowerCase() === color.toLowerCase()}
                        onChange={() => setSelectedColor(color)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 inline-block border rounded-full ${selectedColor.toLowerCase() === color.toLowerCase() ? "bg-white" : "bg-transparent"
                          }`}
                      />
                      <span className={`${selectedColor.toLowerCase() === color.toLowerCase() ? "underline underline-offset-3" : ""}`}> {color}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Horizontal lines connecting the image to the grid */}
            {/* <div className="hidden md:block absolute top-1/4 left-1/2 w-4 h-px bg-gray-500"></div> */}
            {/* <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-px bg-gray-500"></div> */}
            {/* <div className="hidden md:block absolute top-3/4 left-1/2 w-4 h-px bg-gray-500"></div> */}
          </div>

          {/* Order Button - Centered on mobile */}
          <div className="flex justify-center md:justify-start md:absolute md:top-80 md:left-2/5">
            <button className="focus:outline-none" onClick={handleOrderClick}>
              <img
                src="/orderbutton.svg"
                alt="Place Your Order"
                className="w-40 md:w-48 h-auto"
                style={{ marginTop: "60px", marginBottom: "50px", marginLeft: "160px" }}
              />
            </button>
          </div>

          {/* Mobile Price Tag - Below order button, only visible on mobile */}
          <div className="md:hidden w-2/3 my-4 ml-14">
            <div className="flex border border-gray-500 w-full">
              <div className="w-1/3 bg-[#1c1c1c] text-white text-lg flex justify-center items-center p-2 border-r border-gray-500">
                Price
              </div>
              <div className="w-2/3 bg-[#141414] text-white text-lg flex justify-center items-center p-2">
                Rs. xxx/-
              </div>
            </div>
          </div>

          {/* Contact Us - Full width on mobile */}
          <div className="w-full md:w-1/6 px-2 md:px-0 sm:absolute right-14 -bottom-[30%]">
            {/* Replaced text with SVG */}
            <div className="mb-3 text-center md:text-left">
              {/*<img 
                src="/contacts.svg" 
                alt="Contact Us" 
                className="h-8 inline-block"
                style={{height:"150px",width:"150px", marginTop:"100px", marginBottom:"-40px"}}
              />*/}
            <h2 className='text-2xl text-center'>Contact Us</h2>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 md:flex-row">
              {contacts.map((contact) => (
                <div key={contact.id} className="flex flex-col items-center">
                {
                  //<div className="w-16 h-16 bg-gray-400 rounded-md"></div>
                  }
                  <span className="text-white text-sm mt-2">{contact.name}</span>
                  <span className="text-white text-sm mt-2">{contact.dept}</span>
                  <span className="text-white text-sm mt-2">{contact.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Order Section - Center on mobile, left on desktop */}
        <section className="my-8 md:my-16">
          {/* Image container - centered on mobile, left-aligned on desktop */}
          <div className="flex justify-center md:justify-start">
            <img
              src='/orderimage.svg'
              alt="How to Order"
              className="w-full max-w-lg md:max-w-2xl ml-8 sm:-ml-18"
              style={{ height: "110px" }}
            />
          </div>
          {/* Text - centered on both mobile and desktop */}
          <p className="text-sm sm:text-base text-white mt-4 sm:mt-12 text-center max-w-3xl mx-auto px-4">
    <SrijanMerchandiseAnnouncement/>
          </p>
        </section>
      </div>

      {/* Order Form Overlay - Shows on same page with blurred background */}
      {
        showOrderForm &&  <OrderForm setShowOrderForm={setShowOrderForm} size={selectedSize} color={selectedColor}></OrderForm>
      }


      <Footer />
    </div >
  );
}
