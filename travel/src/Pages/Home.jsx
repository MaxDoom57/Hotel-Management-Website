import React from "react";
import homeImage from "../Assets/12.jpg";
import abouthotelimage from "../Assets/9.jpg";
import aboutroomimage from "../Assets/5.jpg";
import img1 from "../Assets/17.jpg";
import img2 from "../Assets/15.jpg";
import img3 from "../Assets/6.jpg";
import img4 from "../Assets/4.jpg";
import img5 from "../Assets/11.jpg";
import offerimage from "../Assets/10.jpg";
import Tab from "../Components/Tab";
import Quiz from "../Components/Quiz";

const Home = () => {
  return (
    <>
      {/* Home section */}
      <div
        className="text-white bg-no-repeat bg-cover h-svh "
        style={{ backgroundImage: `url(${homeImage})` }} //Add background image
      >
        <div className="w-[100%] flex flex-col items-center">
          {/*Navigation bar area*/}
          <div className="flex mt-8">
            <div>
              <ul className="flex gap-8 font-sans font-semibold">
                <li className="cursor-pointer hover:border-b-2">Home</li>
                <li className="cursor-pointer hover:border-b-2">About Us</li>
                <li className="cursor-pointer hover:border-b-2">
                  Our Services
                </li>
                <li className="cursor-pointer hover:border-b-2">Blog</li>
                <li className="cursor-pointer hover:border-b-2">Contact Us</li>
              </ul>
            </div>
            <div className="absolute font-semibold right-8">
              <button className="px-4 py-2 bg-brown hover:scale-105 transition duration-300">Book Now</button>
            </div>
          </div>

          {/*Home body area*/}
          <div className="flex flex-col justify-center items-center h-[80vh] w-[80%] gap-4">
            <div>
              <h5 className="text-2xl font-light font-inter">
                GET LUXURY AND COMFORT
              </h5>
            </div>
            <div>
              <h1 className="text-6xl text-center font-playfair">
                Welcome To The Place Where Luxury Meets Affordability
              </h1>
            </div>
            <div className="mt-16">
              <button className="px-4 py-2 border border-white font-inter hover:bg-brown hover:scale-105 transition duration-300">
                Explore Now <i class="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>

          {/* Availability checking area */}
          <div></div>
        </div>
      </div>

      {/* About us area */}
      <div className="w-[90%] ml-[5%] flex my-[5%] content-center h-full">
        {/* Description */}
        <div className="w-[50%] p-5 gap-2 flex flex-col">
          <div className="text-xl font-semibold text-brown font-playfair">
            ABOUT US
          </div>
          <div className="text-3xl font-playfair">At Diamond Luxury Hotels</div>
          <div className="font-inter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            facere porro alias laudantium itaque, sunt magnam vitae nostrum ad
            tempore at aliquid officia aut ipsa ipsam iste praesentium nihil
            iusto suscipit molestiae. Corrupti molestias dolore illum odit dicta
            corporis voluptas velit provident, ea quidem vero et minima? In,
            consequuntur alias.Corrupti molestias dolore illum odit dicta
            corporis voluptas velit provident, ea quidem vero et minima? In,
            consequuntur alias.
          </div>
          <div className="mt-10">
            <button className="px-4 py-2 font-semibold text-white bg-brown hover:scale-105 transition duration-300">
              Read More <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-[50%] grid grid-cols-4 grid-rows-3">
          <img
            src={abouthotelimage}
            alt="hotel"
            className="row-start-2 row-end-4 col-start-1 col-end-3 z-10 w-[600px]"
          />
          <img
            src={aboutroomimage}
            alt="hotelroom"
            className="col-start-2 col-end-5 row-start-1 row-end-4"
          />
        </div>
      </div>

      {/* Our Choice area */}
      <div className="h-fit w-[90%] ml-[5%]">
        {/* Choice description */}
        <div className="flex">
          <div className="w-[50%] p-4">
            <div className="text-xl font-semibold text-brown font-playfair">
              OUR CHOICE
            </div>
            <div className="mt-2 text-3xl font-playfair">
              The best room just for you!
            </div>
          </div>
          <div className="w-[50%] p-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dicta
            minus consequatur expedita, ab tenetur eum dolores inventore
            doloribus, error sint. Ad obcaecati minus voluptatibus.
          </div>
        </div>

        {/* Images area */}
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[900px] w-full mt-4 content-center justify-center">
          <div className="row-span-2 bg-green-200">
            <img src={img1} alt="1" className="w-full h-full" />
          </div>
          <div className="col-span-2 row-span-2 bg-green-200">
            <img src={img2} alt="1" className="w-full h-full" />
          </div>
          <div className="bg-green-200">
            <img src={img3} alt="1" className="w-full h-full" />
          </div>
          <div className="bg-green-200">
            <img src={img4} alt="1" className="w-full h-full" />
          </div>
          <div className="bg-green-200">
            <img src={img5} alt="1" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Fedtured Offer area */}
      <div className="h-svh w-[90%] ml-[5%] my-16 flex mt-28">
        <div className="w-[50%]">
          <img src={offerimage} alt="offer" className="w-full" />
        </div>
        <div className="w-[50%] p-12 flex flex-col gap-4 content-evenly ml-8">
          <div className="text-xl font-semibold text-brown font-playfair">
            FEATURED OFFER
          </div>
          <div className="mt-2 text-3xl font-playfair">Economy Luxe Room</div>
          <div className="text-lg font-inter">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            iure nemo dolorum quibusdam obcaecati hic veritatis cupiditate error
            tempore, amet quo porro sapiente eius eveniet earum autem odit
            molestias inventore deleniti ad nobis soluta corrupti molestiae. Et,
            distinctio tenetur. Amet tenetur, quam minus neque aut consequuntur
            delectus nam facilis blanditiis?
          </div>
          <div className="flex gap-8">
            <div>
              <h1 className="text-6xl font-semibold font-playfair">
                25%{" "}
                <span className="text-xl font-semibold text-brown font-playfair">
                  DISCOUNT
                </span>
              </h1>
              <p className="font-semibold font-inter">STAY 6 MONTHS OR MORE</p>
            </div>

            <div className="border-s-4 border-brown">
              <h1 className="pl-2 text-6xl font-semibold font-playfair">
                10%{" "}
                <span className="text-xl font-semibold text-brown font-playfair">
                  DISCOUNT
                </span>
              </h1>
              <p className="pl-2 font-semibold font-inter">
                STAY 2 MONTHS OR MORE
              </p>
            </div>
          </div>
          <div>
            <button className="px-4 py-2 mt-16 text-white bg-brown font-inter hover:scale-105 transition duration-300">
              Book Now <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Our Spaces are */}
      <div className="h-fit w-[90%] ml-[5%] my-16 flex flex-col">
        <div>
          <div className="text-xl font-semibold text-brown font-playfair">
            OUR SPACE
          </div>
          <div className="mt-2 text-3xl font-playfair">
            Check Our Hotel Gallery
          </div>
          <div className="text-lg font-inter w-[60%] pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit
            vero, itaque animi deserunt ut temporibus ad magnam hic eum
            distinctio incidunt corrupti excepturi quos nihil cum tempora qui
            quia. Veniam consectetur cumque molestiae tenetur aspernatur
            perspiciatis quisquam, illo nobis omnis quas odio illum. Quidem enim
            earum aut nisi cumque!
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Tab />
        </div>
      </div>

      {/* Faq area */}
      <div className="h-fit w-[90%] ml-[5%] py-10 pb-20">
        <div>
          <div className="text-xl font-semibold text-brown font-playfair">
            FQAs
          </div>
          <div className="mt-2 text-3xl font-playfair">
            Frequently Asked Questions
          </div>
          <div className="text-lg font-inter w-[60%] pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            veniam. Impedit quae quod exercitationem commodi saepe accusantium,
            a, quo rerum error culpa, alias quis quos repellendus voluptatem
            aspernatur enim veniam.
          </div>
        </div>
        <div className="w-full my-10  justify-items-center">
          <Quiz
            question="How do I book a hotel?"
            answer="Search for your destination, select a hotel, and complete the booking with secure payment. You'll receive a confirmation email."
          />
          <Quiz
            question="Do I need travel insurance for my trip?"
            answer="It's not mandatory but recommended for coverage on cancellations, medical emergencies, or lost luggage."
          />
          <Quiz
            question="Can I cancel or modify my booking?"
            answer="Yes, you can cancel or modify your booking, but the policies depend on the hotel or tour provider. Some bookings may offer free cancellations up to a certain date, while others may have cancellation fees. Check the cancellation policy on your booking confirmation or contact our support team for assistance."
          />
        </div>
        <div className="flex flex-col w-full ">
          <div className="font-semibold text-center cursor-pointer font-inter text-brown">
            Have more questions?
            <button className="px-4 py-2 mx-12 text-white bg-brown hover:scale-105 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer area */}
      <div className="bg-brown h-fit ">
        <div className="w-[90%] ml-[5%] py-4 text-white font-inter text-sm grid grid-cols-5">
          <div className="col-span-3">
            <div className="text-2xl font-playfair">Diamond Luxury</div>
            <div className="flex gap-6 my-5">
              <i class="fa-brands fa-facebook-f cursor-pointer"></i>
              <i class="fa-brands fa-instagram cursor-pointer"></i>
              <i class="fa-brands fa-twitter cursor-pointer"></i>
            </div>
            <div>Max57doom@gmail.com</div>
          </div>

          <div className="leading-8">
            <ul>
              <li className="font-semibold">LEARN MORE</li>
              <li className="cursor-pointer">Sucess stories</li>
              <li className="cursor-pointer">Why Us?</li>
              <li className="cursor-pointer">How it works</li>
              <li className="cursor-pointer">FQAs</li>
            </ul>
          </div>

          <div className="leading-8">
            <ul>
              <li className="font-semibold">RESOURCES</li>
              <li className="cursor-pointer">Help center</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Carrer</li>
              <li className="cursor-pointer">Press center</li>
              <li className="cursor-pointer">About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
