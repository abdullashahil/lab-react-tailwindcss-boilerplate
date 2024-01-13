import React from 'react';

function App() {
  return (
<div >
      <div>
      <div className='bg-blue-800 h-2'></div>

      <nav className='flex justify-between bg-red-400 h-100 p-6'>

        <div className=''>
          <span className='font-bold text-xl text-white'>Kalvium</span>
          <a href="" className='ml-5 mr-5 text-red-100'>About us</a>
          <a href="" className='mr-5 text-red-100'>Contacts</a>
          <a href="" className='text-red-100'>Courses</a>
        </div>

        <button className="border border-white p-2 px-5 rounded text-white font-bold hover:bg-blue-500">Login</button>
      </nav>


      <div className='secondbox mt-10 ml-20   '>
        <button className=' bg-blue-500 p-2 px-5 rounded text-white '>Button One</button>

        <div className='alert-box bg-red-50 border border-red-500 text-red-700 p-4 mt-5 rounded'><span className='font-bold'>Alert !</span> This is awesome</div>

      </div>    

<center>
<div className='thirdbox  flex items-center p-10 mt-5 rounded-xl shadow-lg '>
        <img className='h-5 ' src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
        <div className='ml-5'>

        <h3 className='text-left'>Kalvium Store</h3>
          <p className='text-gray-500'>You have a new course!</p>

        </div>
      </div>

</center>
</div>
<footer className=' border bg-gray-200 h-100 p-6 '>
<center>
<p className='text-gray-500'>© 2021Copyright:<span className='text-black'>Kalvium</span></p> 
  </center></footer>
      
      </div>
  );
}

export default App;
