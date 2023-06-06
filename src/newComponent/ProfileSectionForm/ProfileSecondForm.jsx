import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Profile/Input';
import InputSelect from '../Profile/Select';
import Button from '../Profile/Button';

function ProfileSecondForm({setCurrentFormCount, currentFromCount}) {

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

   const familytypeOptions = [
     {value: 'nuclear', label: "Nuclear"},
     {value: "joint", label: 'Joint'},
     {value: 'nofamily', label: 'No Family/Orphan'},
   ]

   const familyMemberOptions = [
      {value: '1' , label: '1'}
   ]

 const liveWithFamilyOptions = [
    {value: 'yes', label: 'Yes'},
    {value: 'no', label: 'No'}
   ]

   const smokeDrinkOptions = [
     {value: "neitherSmokeNorDrink", label: "Neither Somke nor Drink"},
     {value: "onlySmoke", label: "Only Smoke"},
     {value: "onlyDrink", label: "Only Drink"},
     {value: "bothSmokeAndDrink", label: "Both Smoke and Drink"}
   ]

   const familyValueOptions = [
     {value: "traditional", label: "Traditional"},
      {value: "moderate", label: "Moderate"},
      {value: "liberal", label: "Liberal" },
   ]

   const parentStatusOptions = [
    {value: "bothAlive", label: "Both Alive"},
    {value: "fatherPassedAway", label: "Father Passed Away"},
    {value: "motherPassedAway", label: "Mother Passed Away"},
    {value: "bothPassedAway", label: "Both Passed Away"},
   ]
  return (

    <div className="md:mt-8 md:mb-8 px-2 py-4  w-[100%] md:w-[1000%] lg:w-[100%] xl:w-[100%] bg-white rounded-lg mx-auto">
      {/* <h1 className="text-2xl w-full text-center font-semibold xl:text-4xl my-4">Some Personal details</h1> */}
      
        
          <form className=" mx-auto" onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold w-[90%] mx-auto'>Family Information</h1>

           <div className="w-full flex justify-around items-center">
              <InputSelect label="Family Type" classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[40%] basis-[40%]" options={familytypeOptions}  />
               <Input label="No of family Members" classes3="w-[40%]" classes="px-2" classes2="block xl:text-xl lg:text-lg" type="number" placeholder="Family Member Number" />
               {/* <InputSelect label="Father's Status" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[40%]" /> */}

           </div>

            <div className="w-full flex justify-around items-center">
               {/* <Input label="No of sibling" type="number" classes1="block text-2xl my-2" classes2="xl:w-[60%] basis-[40%]" options={genderOptions} /> */}
                <Input label="No of Sibling" classes3="w-[40%]" classes="px-2" classes2="block xl:text-xl lg:text-lg" type="number" placeholder="Enter full Name" />
                <InputSelect label="Do you live with your family" classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[40%] basis-[40%]" options={liveWithFamilyOptions} />
           </div>

          

           <div className="w-full flex justify-around items-center">
              {/* <InputSelect label="N" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[40%]" options={familytypeOptions}  /> */}
               <Input label="Native/Ancestors Place" classes3="w-[40%]" classes="px-2" classes2="block xl:text-xl lg:text-lg" type="number" placeholder="Native Place" />
               {/* <InputSelect label="Father's Status" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[40%]" /> */}
                <Input label="Mother Tongue" classes3="w-[40%]" classes="px-2" classes2="block text-md lg:text-lg xl:text-xl" type="number" placeholder="Enter your mother tongue" />
           </div>

           <div className="w-full flex justify-around items-center">
               {/* <Input label="Enter your Gotra" type="text" classes1="block text-2xl my-2" classes2="xl:w-[60%] basis-[40%]" options={genderOptions} /> */}
               <Input label="Enter your gotra" classes3="w-[40%]" classes="px-2" classes2="block text-md lg:text-lg xl:text-xl" type="text" placeholder="Enter your gotra (if applied)" />
                <InputSelect label="Family Values" classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[40%] basis-40%]" options={familyValueOptions}/>
               
               </div>

               <div className='w-full flex justify-around items-center'>
                   <InputSelect label="Parent Status" classes1="block text-md lg:text-lg xl:text-xl my-2" classes2="xl:w-[40%] basis-[40%]" options={parentStatusOptions}/>
                   <Input label="No of Unmarried Sibling" classes3="w-[40%]" classes="px-2" classes2="block xl:text-xl lg:text-lg" type="number" placeholder="Enter full Name" />
                
               </div>

               <div className='w-[90%] mx-auto flex justify-between items-center'>
               
                 <Input label="Where do your family live ?" classes3="w-[40%]" classes="px-2" classes2="block xl:text-xl lg:text-lg" type="text" placeholder="Enter your family location" />
               </div>


            <div className="w-[90%] mx-auto flex justify-around">
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

export default ProfileSecondForm;