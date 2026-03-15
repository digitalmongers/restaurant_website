"use client"

import { useEffect, useState } from "react"
import { Search, ShoppingBag, Phone, Play, ChevronDown, Star, Facebook, Instagram, Twitter, Youtube, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [scale, setScale] = useState(1);

  // Use a resize observer or window resize listener to auto-scale the 1728px canvas
  // so it never gets cut off on smaller screens
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // If the screen is smaller than 1728, scale it down proportionally.
      if (screenWidth < 1728) {
        setScale(screenWidth / 1728);
      } else {
        setScale(1); // Standard 100% scale for screens >= 1728px
      }
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#FCFCFC] w-full flex justify-center overflow-x-hidden font-sans">
      <div
        style={{
          width: `${1728 * scale}px`,
          height: `${4700 * scale}px`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: '1728px',
            height: '4700px',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          className="bg-background overflow-hidden"
        >

          {/* Navbar */}
          <header className="absolute top-[46px] left-[120px] right-[120px] flex items-center justify-between z-50">
            {/* Logo */}
            <div className="flex items-center gap-[6px]">
              <div className="w-[47px] h-[47px] bg-[#39DB4A] rounded-[14px] flex items-center justify-center text-white font-extrabold text-[28px]">
                F
              </div>
              <span className="font-extrabold text-[32px] tracking-tight text-[#000000] mt-1">OODI</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-[50px] font-medium text-[18px] text-[#000000]">
              <a href="#" className="text-[#39DB4A]">Home</a>
              <a href="#" className="flex items-center gap-[2px] hover:text-[#39DB4A] transition-colors">
                Menu <ChevronDown className="w-5 h-5 text-[#39DB4A] stroke-[2.5px]" />
              </a>
              <a href="#" className="flex items-center gap-[2px] hover:text-[#39DB4A] transition-colors">
                Services <ChevronDown className="w-5 h-5 text-[#39DB4A] stroke-[2.5px]" />
              </a>
              <a href="#" className="hover:text-[#39DB4A] transition-colors">Offers</a>
            </nav>

            {/* Icons and Button */}
            <div className="flex items-center gap-[32px]">
              <Button variant="ghost" size="icon" aria-label="Search" className="hover:text-[#39DB4A] hover:bg-transparent h-auto w-auto p-0">
                <Search className="w-[26px] h-[26px] text-[#000000] stroke-[2.5px]" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Cart" className="relative hover:text-[#39DB4A] mr-2 hover:bg-transparent h-auto w-auto p-0">
                <ShoppingBag className="w-[26px] h-[26px] text-[#000000] stroke-[2.5px]" />
                <Badge className="absolute top-[-8px] right-[-10px] bg-[#39DB4A] hover:bg-[#39DB4A] text-white w-[22px] h-[22px] flex items-center justify-center text-[12px] font-bold rounded-full border-[2px] border-[#FCFCFC] p-0">
                  8
                </Badge>
              </Button>
              <Button className="bg-[#39DB4A] hover:bg-[#39DB4A]/90 text-white rounded-[40px] px-[32px] h-[58px] flex items-center gap-2 shadow-[0_10px_20px_-5px_rgba(57,219,74,0.3)] transition-all text-[18px] font-medium border-none outline-none">
                <Phone className="w-5 h-5 stroke-[2px]" />
                Contact
              </Button>
            </div>
          </header>

          {/* Hero Left Content */}
          <div className="absolute top-[320px] left-[120px] max-w-[700px] z-20">
            <h1 className="text-[60px] font-extrabold leading-[1.3] tracking-normal mb-15 text-[#000000] font-inter">
              Dive into Delights<br /> Of Delectable <span className="text-[#39DB4A]">Food</span>
            </h1>
            {/* Exact Dimensions as specified */}
            <p
              className="text-[24px] text-[#555555] font-medium leading-[1.7] mb-20"
              style={{ width: '622px', height: '88px' }}
            >
              Where Each Plate Weaves a Story of Culinary<br /> Mastery and Passionate Craftsmanship
            </p>
            <div className="flex flex-row items-center gap-[36px]">
              <Button className="bg-[#39DB4A] hover:bg-[#39DB4A]/90 text-white rounded-[40px] px-[40px] h-[72px] text-[20px] font-semibold shadow-[0_20px_40px_-5px_rgba(57,219,74,0.4)] transition-all">
                Order Now
              </Button>
              <div className="flex items-center gap-[20px] cursor-pointer hover:opacity-80 transition-opacity ml-[10px]">
                <div className="bg-white text-[#000000] w-[72px] h-[72px] rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center shadow-lg">
                  <Play className="w-[26px] h-[26px] fill-[#000000] ml-[4px]" />
                </div>
                <span className="font-semibold text-[20px] text-[#4A4A4A]">Watch Video</span>
              </div>
            </div>
          </div>

          {/* Hero Right Content - Image and Circle */}
          <div className="absolute top-[160px] right-[40px] w-[860px] h-[860px]">
            {/* The Green Circle Background */}
            <div className="w-[600px] h-[600px] bg-[#53EC62] rounded-full absolute top-[100px] right-[80px] z-0"></div>

            {/* The Girl Image - Exact Figma Dimensions: 722.2 x 797.32 */}
            <div
              className="absolute z-10 right-[50px] -top-[18px]"
              style={{ width: '720px', height: '720px' }}
            >
              <Image
                src="/Intersect.svg"
                alt="Girl enthusiastically eating noodles and holding a salad plate"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Floating Elements */}

            {/* 1. Hot spicy Food bubble */}
            <Card className="absolute top-[200px] left-[20px] z-20 outline-none border-none bg-white p-0 overflow-hidden shadow-2xl rounded-[30px] rounded-br-[0px]">
              <CardContent className="px-[28px] py-[18px] flex items-center gap-2 px-7 py-3">
                <span className="text-[#FF6868] font-bold text-[18px]">Hot spicy Food <span className="text-[20px]">🌶️</span></span>
              </CardContent>
            </Card>

            {/* 2. Spicy noodles card - Exact requested width/height: 349x132 */}

            <Card
              className="absolute top-160 right-[430px] z-20 bg-white outline-none rounded-3xl p-3 border-none shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              style={{ width: '349px', height: '132px', }}
            >
              <CardContent className="flex items-center gap-8 px-5 py-5 h-full  pl-3">
                <div className="w-[90px] h-[90px] relative rounded-3xl overflow-hidden bg-[#FFEEEE] flex-shrink-0 flex items-center justify-center pt-2">
                  <div className="w-25 h-25 relative">
                    <Image src="/Mask group (4).png" alt="Spicy noodles" fill className="object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-[4px] mt-1">
                  <h3 className="font-bold text-[20px] text-[#000000] leading-tight">Spicy noodles</h3>
                  <div className="flex gap-[6px] items-center">
                    <Star className="w-[18px] h-[18px] fill-[#FFC107] text-[#FFC107]" />
                    <Star className="w-[18px] h-[18px] fill-[#FFC107] text-[#FFC107]" />
                    <Star className="w-[18px] h-[18px] fill-[#FFC107] text-[#FFC107]" />
                    <Star className="w-[18px] h-[18px] fill-[#D9D9D9] text-[#D9D9D9]" />
                    <Star className="w-[18px] h-[18px] fill-[#D9D9D9] text-[#D9D9D9]" />
                  </div>
                  <p className="font-bold text-[22px] mt-[2px] text-[#000000]"><span className="text-[#FF6868] text-[20px] mr-1">$</span>18.00</p>
                </div>
              </CardContent>
            </Card>

            {/* 3. Vegetarian salad card - Exact requested width/height: 349x132 */}
            {/* 3. Vegetarian salad card - Exact requested width/height: 349x132 */}
            <Card
              className="absolute top-160 right-15 z-20 bg-white outline-none rounded-3xl p-3 border-none shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              style={{ width: '349px', height: '132px', }}
            >
              <CardContent className="flex items-center gap-8 px-[20px] py-[20px] h-full pl-3">
                <div className="w-[90px] h-[90px] relative rounded-[18px] overflow-hidden bg-[#EEFFED] flex-shrink-0 flex items-center justify-center pt-2">
                  <div className="w-25 h-25 relative">
                    <Image src="/image 13.png" alt="Vegetarian salad" fill className="object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <h3 className="font-bold text-[20px] text-[#000000] leading-tight">Vegetarian salad</h3>
                  <div className="flex gap-[6px] items-center">
                    <Star className="w-[18px] h-[18px] fill-[#FFC107] text-[#FFC107]" />
                    <Star className="w-[18px] h-[18px] fill-[#FFC107] text-[#FFC107]" />
                    <Star className="w-[18px] h-[18px] fill-[#FFC107] text-[#FFC107]" />
                    <Star className="w-[18px] h-[18px] fill-[#FFC107] text-[#FFC107]" />
                    <Star className="w-[18px] h-[18px] fill-[#D9D9D9] text-[#D9D9D9]" />
                  </div>
                  <p className="font-bold text-[22px] mt-[2px] text-[#000000]"><span className="text-[#FF6868] text-[20px] mr-1">$</span>23.00</p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* --- Section 1.5: Popular Categories --- */}
          <div className="absolute top-[1050px] left-[120px] right-[120px] pt-20">
            <div className="flex flex-col items-center mb-[60px]">
              <span className="text-[#FF6868] text-[20px] font-bold tracking-[0.2em] mb-[15px] uppercase">Customer Favorites</span>
              <h2 className="text-[54px] font-extrabold text-[#000000] font-inter">Popular Categories</h2>
            </div>

            <div className="grid grid-cols-4 gap-10 justify-items-center">
              {[
                { title: "Main Dish", icon: "/pngwing 3.png", count: "(86 dishes)", color: "#C1F1C6" },
                { title: "Break Fast", icon: "/pngwing 4.png", count: "(12 break fast)", color: "#FFD5D5" },
                { title: "Dessert", icon: "/pngwing 6.png", count: "(48 dessert)", color: "#D3E8FF" },
                { title: "Browse All", icon: "/pngwing 7.png", count: "(255 items)", color: "#F3E1FF" }
              ].map((cat, i) => (
                <Card key={i} className="bg-white rounded-[40px] border-none shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center transition-transform hover:scale-105 cursor-pointer"
                  style={{ width: '326px', height: '326px' }}
                >
                  <CardContent className="p-0 flex flex-col items-center">
                    <div
                      className="w-35 h-35 rounded-full flex items-center justify-center mb-[25px]"
                      style={{ backgroundColor: cat.color }}
                    >
                      <Image src={cat.icon} alt={cat.title} width={90} height={90} className="object-contain" />
                    </div>
                    <h3 className="font-bold text-[24px] text-[#000000] mb-[8px]">{cat.title}</h3>
                    <p className="text-[#555555] text-[18px] font-medium">{cat.count}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* --- Section 1.8: Standout Dishes --- */}
          <div className="absolute top-[1680px] left-[120px] right-[120px] pt-25">
            <div className="flex justify-between items-end mb-[60px]">
              <div className="flex flex-col">
                <span className="text-[#FF6868] text-[20px] font-bold tracking-[0.2em] mb-4 uppercase">Special Dishes</span>
                <h2 className="text-[54px] font-extrabold text-[#000000] font-inter leading-[1.2]">
                  Standout Dishes<br />From Our Menu
                </h2>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" className="bg-[#EFEFEF] hover:bg-[#39DB4A]/90 hover:text-white rounded-full w-12 h-12 transition-all">
                  <ChevronLeft className="size-7" />
                </Button>

                <Button variant="ghost" className="bg-[#EFEFEF] hover:bg-[#39DB4A]/90 hover:text-white rounded-full w-12 h-12 transition-all">
                  <ChevronRight className="size-7" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 justify-items-center">
              {[
                { title: "Fattoush Salad", desc: "Crisp Middle Eastern herb salad", price: "24.00", rating: "4.9", img: "/Fattoush salad.png" },
                { title: "Vegetable Salad", desc: "Fresh mixed vegetable garden salad", price: "26.00", rating: "4.6", img: "/Vegetable salad.png" },
                { title: "Egg vegi Salad", desc: "Protein-rich egg vegetable salad", price: "23.00", rating: "4.5", img: "/Egg salad.png" }
              ].map((dish, i) => (
                <Card key={i} className="bg-white rounded-[40px] border-none shadow-xl overflow-hidden flex flex-col relative p-[35px]"
                  style={{ width: '446px', height: '523px' }}
                >
                  <Button size="icon" className="absolute top-0 right-0 bg-[#39DB4A] hover:bg-[#39DB4A]/90 rounded-bl-[30px] rounded-tr-[40px] w-[64px] h-[64px] z-10 p-0 border-none outline-none">
                    <Heart className="w-[28px] h-[28px] fill-white text-white" />
                  </Button>
                  <CardContent className="flex flex-col">
                    <div className="w-full h-[280px] relative mb-[25px] flex items-center justify-center">
                      <div className="w-[260px] h-[260px] relative">
                        <Image src={dish.img} alt={dish.title} fill className="object-contain" />
                      </div>
                    </div>
                    <h3 className="font-bold text-[28px] text-[#000000] mb-[10px]">{dish.title}</h3>
                    <p className="text-[#555555] text-[18px] font-medium mb-[25px]">{dish.desc}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="font-bold text-[26px] text-[#000000]">
                        <span className="text-[#FF6868] text-[20px] mr-1">$</span>{dish.price}
                      </p>
                      <div className="flex items-center gap-[8px]">
                        <Star className="w-[22px] h-[22px] fill-[#FFC107] text-[#FFC107]" />
                        <span className="text-[22px] font-bold text-[#000000]">{dish.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* --- Section 2: Say About Us (Testimonial) --- */}
          <div className="absolute top-[2550px] left-[120px] right-[120px] flex justify-between h-[600px] items-center pt-60">
            {/* Chef Image Left */}
            <div className="relative w-[50%] h-[100%] flex flex-col items-center justify-center pt-[40px]">
              {/* The green shaped background behind chef */}
              <div className="w-[380px] h-[300px] bg-[#53EC62] absolute top-[200px] left-[75px] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[40px] rounded-br-[40px] z-0"></div>

              {/* Blur Shadow under the chef */}
              <div className="w-[300px] h-[50px] bg-[#53EC62] opacity-40 blur-[30px] absolute bottom-[60px] left-[200px] z-0"></div>

              {/* Chef Image Place Holder */}
              <div className="w-[500px] h-[600px] absolute  z-10 overflow-visible flex items-end justify-center  left-1">
                <Image
                  src="/pngwing 2.png"
                  alt="Chef holding spoon"
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              {/* Floating Emojis as seen in figma */}
              <div className="absolute top-[320px] left-[50px] text-[32px] z-20 drop-shadow-md transform rotate-[35deg]">😋</div>
              <div className="absolute top-[320px] right-[270px] text-[32px] z-20 drop-shadow-md transform rotate-[40deg]">🍕</div>

              {/* Our Best Chef Badge placed correctly overlapping right elbow */}
              {/* Our Best Chef Badge placed correctly overlapping right elbow */}
              <Card className="absolute top-110 left-[370px] bg-white rounded-[30px] rounded-tl-[0px] border-none shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] z-30">
                <CardContent className="px-5 py-.5 font-bold text-[#000000] text-[16px] flex items-center gap-2">
                  Our Best Chef 👨‍🍳
                </CardContent>
              </Card>
            </div>

            {/* Testimonial Right Content */}
            <div className="w-[45%] flex flex-col justify-center mt-[-80px]">
              <span className="text-[#FF6868] text-[20px] font-bold tracking-[0.2em] pb-20 uppercase">Testimonials</span>
              <h2 className="text-[54px] font-extrabold text-[#000000] leading-[1.3] pb-10 font-inter">
                What Our Customers<br />Say About Us
              </h2>
              <p className="text-xl text-[#555555] font-medium leading-[1.6] pb-20 max-w-[550px]">
                “I had the pleasure of dining at Foodi last night, and I&apos m still raving about the experience! The attention to detail in presentation and service was impeccable”
              </p>

              {/* Feedback Avatar row */}
              <div className="flex items-center gap-[30px]">
                <div className="flex -space-x-4">
                  <Avatar className="w-17 h-17  border-slate-400 border-2 z-[1] rounded-full overflow-hidden">
                    <AvatarImage src="/Mask group.png" alt="Avatar 1" className="object-cover" />
                    <AvatarFallback>A1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-17 h-17 border-slate-400 border-2 z-[2] rounded-full overflow-hidden">
                    <AvatarImage src="/Mask group (1).png" alt="Avatar 2" className="object-cover" />
                    <AvatarFallback>A2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-17 h-17 border-slate-400 border-2 z-[3] rounded-full overflow-hidden">
                    <AvatarImage src="/Mask group (2).png" alt="Avatar 3" className="object-cover" />
                    <AvatarFallback>A3</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col">
                  <span className="text-[22px] font-bold text-[#000000] mb-[4px]">Customer Feedback</span>
                  <div className="flex items-center gap-[10px]">
                    <Star className="w-[24px] h-[24px] fill-[#FFC107] text-[#FFC107]" />
                    <span className="text-[22px] font-bold text-[#000000]">4.9</span>
                    <span className="text-[22px] text-[#555555] font-medium">(18.6k Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Section 3: Our Story & Services --- */}
          <div className="absolute top-[3300px] left-[120px] right-[120px] flex justify-between items-start h-[700px] pt-24">
            {/* Left text */}
            <div className="w-[45%] flex flex-col justify-start pt-15 space-x-5">
              <span className="text-[#FF6868] text-xl font-bold tracking-[0.2em] mb-[15px] uppercase pb-8">Our Story & Services</span>
              <h2 className="text-[54px] font-extrabold text-[#000000] leading-[1.2] mb-[30px]">
                Our Culinary Journey<br />And Services
              </h2>
              <p className="text-xl text-[#555555] font-medium leading-[1.6] mb-[45px] max-w-[500px] pt-5">
                Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
              </p>
              <Button className="bg-[#53EC62] hover:bg-[#53EC62]/90 text-white rounded-[40px] w-[180px] h-[72px] text-[20px] font-semibold shadow-[0_20px_40px_-5px_rgba(83,236,98,0.4)] transition-all flex items-center justify-center cursor-pointer mt-5">
                Explore
              </Button>
            </div>

            {/* Right Service Grid - EXACTLY as per figma screenshot with 4 cards overlapping slightly or structured in a grid */}
            <div className="w-[40%] grid grid-cols-2 gap-5 space-y-5">
              {/* Card 1: Catering */}
              <Card
                className="bg-white rounded-[30px] border-none shadow-xl"
                style={{ width: '250px', height: '270px' }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-[40px] px-[20px] h-full p-0">
                  <div className="text-[#53EC62] mb-[20px] ">
                    {/* Placeholder Catering Icon */}
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#53EC62" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 28h40M22 28v-8a10 10 0 0 1 20 0v8M16 28l4 24h24l4-24" /></svg>
                  </div>
                  <h3 className="text-[#53EC62] font-bold text-[22px] mb-[15px] uppercase">Catering</h3>
                  <p className="text-[#53EC62] text-[18px] leading-[1.4] font-medium px-[10px]">Delight your guests<br />with our flavors and<br />presentation</p>
                </CardContent>
              </Card>

              {/* Card 2: Fast Delivery */}
              <Card
                className="bg-white rounded-[30px] border-none shadow-xl"
                style={{ width: '250px', height: '270px' }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-[40px] px-[20px] h-full p-0">
                  <div className="text-[#53EC62] mb-[20px]">
                    {/* Placeholder Delivery Icon */}
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#53EC62" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="32" cy="32" r="24" /><polyline points="32 16 32 32 44 38" /></svg>
                  </div>
                  <h3 className="text-[#53EC62] font-bold text-[22px] mb-[15px] uppercase">Fast Delivery</h3>
                  <p className="text-[#53EC62] text-[18px] leading-[1.4] font-medium px-[10px]">We deliver your order<br />promptly to your door</p>
                </CardContent>
              </Card>

              {/* Card 3: Online Ordering */}
              <Card
                className="bg-white rounded-[30px] border-none shadow-xl"
                style={{ width: '250px', height: '270px' }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-[40px] px-[20px] h-full p-0">
                  <div className="text-[#53EC62] mb-[20px]">
                    {/* Placeholder Ordering Icon */}
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#53EC62" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="52" r="4" /><circle cx="44" cy="52" r="4" /><path d="M4 12h8l6 30h32l6-20H16" /></svg>
                  </div>
                  <h3 className="text-[#53EC62] font-bold text-[22px] mb-[15px] uppercase">Online Ordering</h3>
                  <p className="text-[#53EC62] text-[18px] leading-[1.4] font-medium px-[10px]">Explore menu & order<br />with ease using our<br />Online Ordering</p>
                </CardContent>
              </Card>

              {/* Card 4: Gift Cards */}
              <Card
                className="bg-white rounded-[30px] border-none shadow-xl"
                style={{ width: '250px', height: '270px' }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-[40px] px-[20px] h-full p-0">
                  <div className="text-[#53EC62] mb-[20px]">
                    {/* Placeholder Gift Icon */}
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#53EC62" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="24" width="48" height="32" rx="4" ry="4" /><line x1="32" y1="24" x2="32" y2="56" /><path d="M32 24c0-8-12-8-12-8s-4 8 12 8z" /><path d="M32 24c0-8 12-8 12-8s4 8-12 8z" /></svg>
                  </div>
                  <h3 className="text-[#53EC62] font-bold text-[22px] mb-[15px] uppercase">Gift Cards</h3>
                  <p className="text-[#53EC62] text-[18px] leading-[1.4] font-medium px-[10px]">Give the gift of<br />exceptional dining with<br />Foodi Gift Cards</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* --- Section 4: Footer --- */}
          <footer className="absolute top-[4200px] left-[120px] right-[120px]">
            <div className="grid grid-cols-4 gap-[40px] mb-[60px]">
              {/* Column 1: Logo & description */}
              <div className="col-span-1 flex flex-col pt-[15px]">
                <div className="flex items-center gap-[6px] mb-[30px]">
                  <div className="w-[47px] h-[47px] bg-[#39DB4A] rounded-[14px] flex items-center justify-center text-white font-extrabold text-[28px]">
                    F
                  </div>
                  <span className="font-extrabold text-[32px] tracking-tight text-[#000000] mt-1">OODI</span>
                </div>
                <p className="text-[20px] text-[#555555] leading-[1.6]">
                  Savor the artistry where<br />every dish is a culinary<br />masterpiece
                </p>
              </div>

              {/* Column 2: Useful links */}
              <div className="col-span-1 flex flex-col">
                <h4 className="font-bold text-[22px] text-[#000000] mb-[30px]">Useful links</h4>
                <ul className="flex flex-col gap-[20px]">
                  <li><a href="#" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">About us</a></li>
                  <li><a href="#" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">Events</a></li>
                  <li><a href="#" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">Blogs</a></li>
                  <li><a href="#" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">FAQ</a></li>
                </ul>
              </div>

              {/* Column 3: Main Menu */}
              <div className="col-span-1 flex flex-col">
                <h4 className="font-bold text-[22px] text-[#000000] mb-[30px]">Main Menu</h4>
                <ul className="flex flex-col gap-[20px]">
                  <li><a href="#" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">Home</a></li>
                  <li><a href="#" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">Offers</a></li>
                  <li><a href="#" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">Menus</a></li>
                  <li><a href="#" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">Reservation</a></li>
                </ul>
              </div>

              {/* Column 4: Contact Us */}
              <div className="col-span-1 flex flex-col">
                <h4 className="font-bold text-[22px] text-[#000000] mb-[30px]">Contact Us</h4>
                <ul className="flex flex-col gap-[20px]">
                  <li><a href="mailto:example@email.com" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">example@email.com</a></li>
                  <li><a href="tel:+64958248966" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">+91 98972 66808</a></li>
                  <li><a href="#" className="text-[20px] text-[#555555] hover:text-[#39DB4A]">Social media</a></li>
                </ul>
              </div>
            </div>

            {/* Social Icons & Copyright */}
            <div className="flex justify-start items-center mt-[40px] pb-[40px] ">
              {/* Social Icons */}
              <div className="flex gap-4 ">
                <a href="#" className="w-[50px] h-[50px] rounded-full bg-[#39DB4A] text-white flex items-center justify-center hover:bg-[#39DB4A]/80 transition-colors shadow-sm">
                  <Facebook className="w-[20px] h-[20px] fill-current" />
                </a>
                <a href="#" className="w-[50px] h-[50px] rounded-full bg-[#EDFFEF] text-[#555555] flex items-center justify-center hover:bg-[#39DB4A] hover:text-white transition-colors">
                  <Instagram className="w-[24px] h-[24px]" />
                </a>
                <a href="#" className="w-[50px] h-[50px] rounded-full bg-[#EDFFEF] text-[#555555] flex items-center justify-center hover:bg-[#39DB4A] hover:text-white transition-colors">
                  <Twitter className="w-[24px] h-[24px] fill-current" />
                </a>
                <a href="#" className="w-[50px] h-[50px] rounded-full bg-[#EDFFEF] text-[#555555] flex items-center justify-center hover:bg-[#39DB4A] hover:text-white transition-colors">
                  <Youtube className="w-[24px] h-[24px]" />
                </a>
              </div>

              {/* Copyright */}
              <div className="text-[20px] text-[#555555] font-medium justify-self-end ml-10">
                Copyright © 2026 Digital Mongers
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  )
}
