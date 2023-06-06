import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Profile/Input';
import InputSelect from '../Profile/Select';
import Button from '../Profile/Button';

function ProfileFirstForm({currentFormCount, setCurrentFormCount}) {

    const navigate = useNavigate(); 

      const profileOptions = [
    { value: 'myself', label: 'MySelf' },
    { value: 'brother', label: 'Brother' },
    { value: 'sister', label: 'Sister' },
    { value: 'son', label: 'Son' },
    { value: 'daughter', label: 'Daughter' },
    { value: 'friend', label: 'Friend' },
    { value: 'relative', label: 'Relative' },
  ]

  const religionOptions = [
    { value: 'hindu', label: 'Hinduism' },
    { value: 'buddhist', label: 'Buddhism' },
    { value: 'islam', label: 'Islam' },
    { value: 'christianity', label: 'Christianity' },
    { value: 'sikh', label: 'Sikhism' },
    { value: 'Jain', label: 'Jainism' },
    { value: 'kirat', label: 'Kirat' },
    { value: 'no', label: 'Non-Religious'},
    {value: 'other', label: 'Other'},
  ]


  const genderOptions = [
     {value: 'Man', label: "Man"},
      {value: "woman", label: "Woman"},
      {value: "other", label: "Other"},
  ]

  const casteOptions = [
    {value: "brahmin", label: "Brahmin"},
    {value: "chhetri", label: "chhetri"},
    {value: 'thakuri', label: "Thakuri"},
    {value: 'magar', label: 'Magar'},
    {value: 'tamang', label: 'Tamang'},
    {value: 'sherpa', label: "Sherpa"},
    {value: "newar", label: "Newar"},
  ]

  const maritalStatusOptions = [
     {value: "unmarried", label: "Unmarried"},
     {value: "awatingdivorce", label: 'Awating Divorce'},
     { value: 'divorced', label: "Divorced"},
  ]

     const heightOptions = [
      {value: '4ft 5in - 134cm', label: '4ft 5in - 134cm'},
      {value: '4ft 6in - 137cm', label: '4ft 6in - 137cm'},
      {value: '4ft 7in - 139cm', label: '4ft 7in - 139cm'},
      {value: '4ft 8in - 142cm', label: '4ft 8in - 142cm'},
      {value: '4ft 9in - 144cm', label: '4ft 9in - 144cm'},
      {value: '4ft 10in - 147cm', label: '4ft 10in - 147cm'},
      {value: '4ft 11in - 149cm', label: '4ft 11in - 149cm'},
      {value: '5ft 0in - 152cm', label: '5ft 0in - 152cm'},
      {value: '5ft 1in - 154cm', label: '5ft 1in - 154cm'},
      {value: '5ft 2in - 157cm', label: '5ft 2in - 157cm'},
      {value: '5ft 3in - 159cm', label: '5ft 3in - 159cm'},
      {value: '5ft 4in - 162cm', label: '5ft 4in - 162cm'},
      {value: '5ft 5in - 164cm', label: '5ft 5in - 164cm'},
      {value: '5ft 6in - 167cm', label: '5ft 6in - 167cm'},
      {value: '5ft 7in - 169cm', label: '5ft 7in - 169cm'},
      {value: '5ft 8in - 172cm', label: '5ft 8in - 172cm'},
      {value: '5ft 9in - 174cm', label: '5ft 9in - 174cm'},
      {value: '5ft 10in - 177cm', label: '5ft 10in - 177cm'},
      {value: '5ft 11in - 179cm', label: '5ft 11in - 179cm'},
      {value: '6ft 0in - 182cm', label: '6ft 0in - 182cm'},
      {value: '6ft 1in - 184cm', label: '6ft 1in - 184cm'},
      {value: '6ft 2in - 187cm', label: '6ft 2in - 187cm'},
      {value: '6ft 3in - 189cm', label: '6ft 3in - 189cm'},
      {value: '6ft 4in - 192cm', label: '6ft 4in - 192cm'},
   ]

  const disabilityOptions = [
    {value: "no", label: "No"},
    {value: "physicalDisability", label: "Physical Disability"}
  ]


      const handleSubmit = (event) => {
        event.preventDefault();

         axiosInstance.post('/users/personal-detail', values)
          .then((response) => {
            console.log('updated successfully')
            console.log(response.data);
            dispatch(
              setPersonalDetail(response.data)
            )
            navigate('/contactdetails')
         }).catch((error) => {
           console.log(error);
         })
  };

  const handlePrevClick = () => {
     setCurrentFormCount((prev) => prev-1)
  }

  const handleNextClick = () => {
    setCurrentFormCount((prev) => prev+1)
  }


  return (

         <div className="md:mt-8 min-h-full md:mb-8 px-2 py-4 w-[100%] md:w-[90%] lg:w-[100%] xl:w-[100%] bg-white rounded-lg mx-auto">
           {/* <h1 className="text-2xl w-full text-center font-semibold xl:text-3xl my-4">Let's setup your account.</h1> */}
      
        
          <form className=" mx-auto">
             <h1 className='text-2xl w-[90%] font-bold mx-auto'>Basic Information</h1>

             <div className="w-full flex  justify-around items-center">
               <Input label="Full Name" classes3="w-[40%]" classes="px-2" classes2="block lg:text-lg xl:text-xl" type="text" placeholder="Enter full Name" />
               <InputSelect label="Profile for " classes1="block text-md lg:text:lg xl:text-xl my-2" classes2="xl:w-[40%] basis-[40%]" options={profileOptions}/>
             </div>

           <div className="w-full flex  justify-around items-center">
              <InputSelect label="Gender " classes1="block text-xl my-2" classes2="xl:w-[40%] basis-[40%]" options={genderOptions} />
               {/* <Input label="Religo" classes3="basis-[40%]" classes="px-2" classes2="block 2xl:text-2xl lg:text-2xl" type="text" placeholder="Enter full Name" /> */}
               <InputSelect label="Religion " classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[70%] basis-[40%]" options={religionOptions}/>
           </div>

           <div className="w-full flex justify-around  items-center">
               {/* <Input label="Enter your Date of Birth" type="text" classes1="block text-2xl my-2" classes2="xl:w-[60%] basis-[40%]" options={genderOptions} /> */}
               
               <InputSelect label="Caste" classes1="block text-xl my-2" classes2="xl:w-[40%] basis-[40%]" options={casteOptions}/>
               {/* <Input label="Sub Caste" type="text" classes3="w-[70%]" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[70%]" /> */}
                <Input label="Sub Caste" classes3="w-[40%]" classes="px-2" classes2="block xl:text-xl lg:text-xl" type="text" placeholder="Enter your Sub Caste" />
           </div>

           <div className="w-full flex item-center justify-start">
            <div className='w-[90%] flex justify-between mx-auto'>
               <InputSelect label="Day" classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[30%] basis-[30%]" options={maritalStatusOptions}/>
               <InputSelect label="Month" classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[25%] basis-[25%]" options={maritalStatusOptions}/>
               <InputSelect label="Year" classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[30%] basis-[30%]" options={maritalStatusOptions}/>
               </div>
          </div>
        
           <div className="w-full flex justify-around  items-center"> 
               <Input label="Where do you live ?" classes3="w-[40%]" classes="px-2" classes2="block xl:text-xl xl:text-xl lg:text-lg" type="text" placeholder="Enter your current address" />
               <InputSelect label="Marital Status" classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[40%] basis-[40%]" options={maritalStatusOptions}/>
           </div>

             <div className="w-full flex justify-around  items-center"> 
              <InputSelect label="Your Height " classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[40%] basis-[40%]" options={heightOptions} />

               {/* <Input label="Where do you live ?" classes3="w-[70%]" classes="px-2" classes2="block 2xl:text-2xl lg:text-2xl" type="text" placeholder="Enter your current address" /> */}
               {/* <InputSelect label="Blood Group" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[70%]" options={bloodGroupOptions} /> */}
               <InputSelect label="Any Disability" classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[40%] basis-[40%]" options={disabilityOptions} />
           </div>

          <div className="w-[90%] mx-auto flex justify-end">
             {/* <Button label="Previous" classes="px-16 py-3 rounded-xl btnnext text-white" classes2="w-full flex justify-center py-4" onClick={() => handlePrevClick()} /> */}
             <Button onClick={() => handleNextClick()} label="Save" classes="px-8 py-2 rounded-xl btnnext text-white" classes2="w-full flex justify-end py-2" />
          </div>

          {/* <button className="btnprev" onClick={() => handlePrevClick()}>
            <HiChevronDoubleLeft /> Prev
          </button>
    
          <button type="submit" className="btnnext">
            Next <HiChevronDoubleRight /> */}
          {/* </button> */}
              
          </form>
        </div>
  )
}

export default ProfileFirstForm;