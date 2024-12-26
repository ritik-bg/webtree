import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [profile, setprofile] = useState('j')
  
  const process = async()=>{
    try {
      let res = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
      
      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }

      let data = await res.json(); // Await the parsed JSON data
      let b = data.results[0];

      console.log("Fetched Data:", b);

      // Assuming setProfile is a state setter function
      setprofile({
          nameTitle: b.name.title,
          firstName: b.name.first,
          lastName: b.name.last,
          gender: b.gender,
          number: `+353 ${b.phone}`,
          imgurl : b.picture.large,
      });

      // Log the profile after state update (use effect for proper logging if needed)
      console.log("Profile state updated!");

  }
  catch (error) {
    console.error("Error fetching or processing data:", error);
}
};
    
    
   
  

 
  useEffect(() => {
    
   process();
  
  }, [])
  
  

  return (
    <>
   <div className="card flex place-self-center   items-center mt-32 bg-black h-[50vh] w-[70vw] rounded-full z-10  ">
    <div className="border flex justify-between mx-auto  w-[70%] h-[88%]  bg-green-600 ">
<div className="left w-[35%]   "><img className='ml-5  mt-8 h-[75%] border-2 shadow-green-600 shadow-' src={profile.imgurl}/></div>
<div className="right text-blue-900  w-[65%] p-11"> 
  <h2 className='text-xl font-bold'>{profile.nameTitle} {profile.firstName} {profile.lastName}
    <br/><br/>
    {profile.gender}
    <br/><br/>
    {profile.number}
  </h2>

</div>
    </div>
    
     </div>
    </>
  )
}

export default App
