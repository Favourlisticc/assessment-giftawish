
import './App.css';
import Navbar from './components/navbar';
import woman from "./public/woman-8490191_1280-removebg-preview 1 (1).png"
import imageinsidecard from "./public/c382fe5109bc1f9c3db19d47e295a8ac-removebg-preview 1.png"
import lovegift from "./public/Objects.png"
import wresltinh from "./public/Wrestling.png"
import gift from "./public/Gift.png"
import addfriend from "./public/Add Male User Group.png"
import message from "./public/Chat Bubble.png"
import shopping from "./public/Full Shopping Basket.png"
import Logo from "./public/IMG_4628 1.png"
import applelogo from "./public/Apple Logo.png"
import playstorelogo from "./public/download__1_-removebg-preview 1.png"

function App() {
  return (
    <div className="">
      <Navbar />
      <div className='ml-16 flex mb-6 max-sm:flex-col max-sm:ml-0'>
          <div className='w-1/2 mt-10 max-sm:w-full max-sm:text-center'>
              <h1 className='font-bold text-5xl '>Sharing <span className='text-orange-500'>Love</span> through the Art of <span className='text-orange-500'>Gifting</span></h1>
              <p className='mt-5 w-3/4 font-semibold max-sm:w-full text-gray-500'>Find unique and thoughtful gifts that truly reflect your style. Connect with friends and family and celebrate together through gifting. Find, share and send gifts in minutes.</p>

              <button type="button" class=" mt-7 focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900">BROWSE GIFTS</button>
          </div>

          <div className='bordercurve womanside bg-[#FFF2D9] ml-3 max-sm:ml-0'>
              <img src={woman} alt='woman' className=' w-80 ml-16 max-sm:w-72 max-sm:ml-20  ' style={{height: "560px"}}/>


              <div class="  w-40 max-sm:w-32 max-sm:h-36 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 relative bottom-72 right-20 max-sm:bottom-40 max-sm:right-0 max-sm:left-3" style={{zIndex: "999"}}>
                <img src={imageinsidecard} alt="" className=' rounded-full ml-10 max-sm:ml-9 max-sm:w-12 relative bottom-8' style={{zIndex: "999"}}/>
                <p className='px-3 pb-1 text-xs max-sm:px-0'>Happy Anniversary to our 5 years of friendship. I hope you love what i got for. I will also be expecting mine from you.</p>

              </div>

              <div class="  w-40 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 relative right-20 max-sm:right-0" style={{zIndex: "999", bottom: "550px"}}>
               <p className=' pb-1 text-xs flex'>
                <img src={lovegift} alt='' className='w-3 h-3 mt-0.5'/>
                A gift has been sent to you</p>
              </div>

          </div>

      </div>

      <div className='backgrouimgg pl-96 max-sm:pl-0'>
        <h1 className='font-bold text-5xl text-[#DD6421] max-sm:text-4xl max-sm:text-center'>HOW IT WORKS</h1>
        <p className='mb-10 ml-3 mt-1 max-sm:text-sm max-sm:text-center'>Search for items and make wishes that you desire</p>

        <div className='flex max-sm:flex-col max-sm:mx-5'>
           <div>

           <div className='flex shadow-xl rounded-2xl w-96 max-sm:w-full p-2 mb-10'>
              <div className='bg-orange-500 rounded-full w-9 h-9'>
              <img src={wresltinh} alt='' className='w-9'/>
              </div>

               <div className='pt-5 pl-3'>

               <p className='font-bold text-[#DD6421]'>1. Browse Gifts</p>
                <p>Find the perfect gift from our curated selection</p>
               </div>
            </div>
            <div className='flex shadow-xl rounded-2xl w-96 max-sm:w-full p-2 mb-10'>
              <div className='bg-orange-500 rounded-full w-9 h-9'>
              <img src={gift} alt=''className='w-9'/>
              </div>
                <div className='pt-5 pl-3'>
                <p className='font-bold text-[#DD6421]'>2. Create Gift Registry</p>
                <p>Make wishes for items that you desire</p>
                </div>
            </div>

          <div  className='flex shadow-xl rounded-2xl w-96 p-2 max-sm:w-full mb-10'>
             <div className='bg-orange-500 rounded-full w-9 h-9'>
             <img src={addfriend} alt='' className='w-9'/>
             </div>
                <div className='pt-5 pl-3'>
                  <p className='font-bold text-[#DD6421]'>3. Add Friends</p>
                  <p>Add a heartfelt message to your gift</p>
                </div>
            </div>
           </div>

            <div className='ml-6 mt-10 max-sm:ml-0 max-sm:mt-0'>
            <div  className='flex shadow-xl rounded-2xl w-96 p-2 mb-10 max-sm:w-full'>
              <div className='bg-orange-500 rounded-full w-9 h-6'>
              <img src={message} alt='' className='w-9'/>
              </div>

               <div className='pt-5 pl-3'>
               <p className='font-bold text-[#DD6421]'>1. Personalise message</p>
                <p>Connect with friends and family for a more social gifting experience</p>
               </div>
            </div>
            <div  className='flex shadow-xl rounded-2xl w-96 p-2 mb-10 max-sm:w-full'>
             <div className='bg-orange-500 rounded-full w-9 h-9'>
             <img src={shopping} alt='' className='w-9'/>
             </div>
               <div className='pt-5 pl-3'>
                  <p className='font-bold text-[#DD6421]'>5. Checkout</p>
                  <p>Complete your purchase in minutes</p>
               </div>
            </div>
            </div>
        </div>

      </div>


      <div className='bg-[#FFE5B482] h-full text-center mt-auto pt-16 pb-20 bordercurve-2'>
          <div className='mb-20'>
            <h1 className='font-bold text-2xl '>CREATE AN ACCOUNT</h1>
            <p className='font-semibold mx-96 mt-5 mb-3 max-sm:mx-1'>Create a free account to create your wishes, gift registries, build meaningful friendships, check your activities, order history and unlock the full gifting experience</p>
            <button type="button" class=" mt-7 focus:outline-none text-white bg-[#DD6421] hover:bg-[#DD6421]/80 focus:ring-2 focus:ring-[#DD6421]/60 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900">GET STARTED</button>

          </div>

          <div>
            <h1 className='font-bold text-2xl '>ADD FRIENDS OR COMMUNITY</h1>
            <p className='font-semibold mx-96 mt-5 mb-3 max-sm:mx-1'>Connect with friends & family for a more social gifting experience. Find friends to share wishlists and gifts with. Team up with friends to create unforgettable group gifts. Discover gift ideas based on your friends’ interests and wishlists.</p>
            <button type="button" class=" mt-7 focus:outline-none text-white bg-[#DD6421] hover:bg-[#DD6421]/80 focus:ring-2 focus:ring-[#DD6421]/60 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900">GET STARTED</button>

          </div>
      </div>

      <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800 border-t-4 border-t-orange-500">
    <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 ml-5 mt-9">
                <a href="/" class="flex items-center">
                    <img src={Logo} class="mr-3 h-20 w-36" alt="FlowBite Logo" />
                </a>
            </div>
            <div class="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-2">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="/" class="hover:border-b-4 border-b-orange-500">Home</a>
                        </li>
                        <li class="mb-4">
                            <a href="/" class="hover:border-b-4 pb-1 border-b-orange-500">Browse</a>
                        </li>
                        <li class="mb-4">
                            <a href="/" class="hover:border-b-4 pb-1 border-b-orange-500">How it works</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:border-b-4 pb-1 border-b-orange-500">Tell a Friend</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="/" class="hover:border-b-4 pb-1 border-b-orange-500">Our Story</a>
                        </li>
                        <li class="mb-4">
                            <a href="/" class="hover:border-b-4 pb-1 border-b-orange-500">Community</a>
                        </li>
                        <li class="mb-4">
                            <a href="/" class="hover:border-b-4 pb-1 border-b-orange-500">Terms & condition</a>
                        </li>

                    </ul>
                </div>

            </div>

            <div className=''>
                <h1 className='text-center font-semibold max-sm:text-left max-sm:mt-20'>Download the App</h1>
                <div className='flex mt-20 max-sm:mt-3' >
                  <button type="button" class="text-white bg-[#DD6421] hover:bg-[#DD6421]/80 focus:ring-4 focus:outline-none focus:ring-[#DD6421]/50 font-medium rounded-lg text-sm px-2 py-2.5 text-center flex items-center dark:hover:bg-[#DD6421]/80 dark:focus:ring-[#DD6421]/40 me-2 mb-2">
                    <div>
                     <img src={applelogo} alt='' className='w-10'/>
                    </div>
                    <div>
                      <p className='text-left font-light'>Download on the </p>
                      <p className='text-left'>APP STORE</p>
                    </div>
                </button>

                <button type="button" class="text-white bg-[#DD6421] hover:bg-[#DD6421]/80 focus:ring-4 focus:outline-none focus:ring-[#DD6421]/50 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:hover:bg-[#DD6421]/80 dark:focus:ring-[#DD6421]/40 me-2 mb-2">
                 <div>
                  <img src={playstorelogo} alt='' className='w-10'/>
                 </div>
                 <div>
                      <p className='text-left font-light'>Get it on</p>
                      <p>GOOGLE PLAY</p>
                    </div>
                </button>
                </div>
            </div>



            <div >

                <h1 className='max-sm:mt-5 font-semibold'>Follow us on </h1>
                <div className='flex space-x-6 sm:justify-center mt-24 max-sm:mt-3'>
                <a href="#" class="text-[#DD6421] hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.5 2H4.1c-1 0-1.5 1.1-.8 1.8L9 9.5c1.6 1.6 4.3 1.6 5.9 0l5.7-5.7c.8-.7.3-1.8-.7-1.8h-1.4c-.8 0-1.6.3-2.2.9l-3.6 3.6c-.4.4-1.1.4-1.5 0L7.7 2.9C7.1 2.3 6.3 2 5.5 2ZM5.5 22H4.1c-.9 0-1.4-1.1-.7-1.8L9 14.5c1.6-1.6 4.3-1.6 5.9 0l5.7 5.7c.7.7.2 1.8-.7 1.8h-1.4c-.8 0-1.6-.3-2.2-.9l-3.6-3.6c-.4-.4-1.1-.4-1.5 0l-3.6 3.6c-.5.5-1.3.9-2.1.9Z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" class="text-[#DD6421] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                </a>

               <a href="#" class="text-[#DD6421] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                </a>
                </div>

        </div>

        </div>


    </div>
</footer>

    </div>
  );
}

export default App;
