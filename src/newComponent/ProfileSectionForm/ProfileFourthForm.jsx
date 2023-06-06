import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Profile/Input';
import InputSelect from '../Profile/Select';
import Button from '../Profile/Button';

function ProfileFourthForm({setCurrentFormCount, currentFromCount}) {

  const handleSubmit = (event) => {
        event.preventDefault();

         axiosInstance.post('/users/personal-detail', values)
          .then((response) => {
            console.log('updated successfully');
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


   const fromheightOptions = [
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

   const toheightOptions = [
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

   
  const maritalStatusOptions = [
    {value: "unmarried", label: "Unmarried"},
    {value: "awatingdivorce", label: 'Awating Divorce'},
    { value: 'divorced', label: "Divorced"},
 ]

 const fromAgeOptions = [
  {value: 22, label: 22},
  {value: 23, label: 23}, 
  {value: 24, label: 24},
  {value: 25, label: 25},
  {value: 26, label: 26},
  {value: 27, label: 27},
  {value: 28, label: 28},
  {value: 29, label: 29},
  {value: 30, label: 30},
  {value: 31, label: 31},
  {value: 32, label: 32},
  {value: 33, label: 33},
  {value: 34, label: 34},
  {value: 35, label: 35},
  {value: 36, label: 36},
  {value: 37, label: 37},
  {value: 38, label: 38},
  {value: 39, label: 39},
  {value: 40, label: 40},
  {value: 41, label: 41},
  {value: 42, label: 42},
 ]

 const toAgeOptions = [
  {value: 22, label: 22},
  {value: 23, label: 23}, 
  {value: 24, label: 24},
  {value: 25, label: 25},
  {value: 26, label: 26},
  {value: 27, label: 27},
  {value: 28, label: 28},
  {value: 29, label: 29},
  {value: 30, label: 30},
  {value: 31, label: 31},
  {value: 32, label: 32},
  {value: 33, label: 33},
  {value: 34, label: 34},
  {value: 35, label: 35},
  {value: 36, label: 36},
  {value: 37, label: 37},
  {value: 38, label: 38},
  {value: 39, label: 39},
  {value: 40, label: 40},
  {value: 41, label: 41},
  {value: 42, label: 42},
 ]


 const annualIncomeOptions = [
  { value: "2L", label: "Upto 2L"},
  {value: '3L', label: "Upto 3L"},
  {value: '3L-4L', label: '3L-4L'},
   {value: '4L-5L', label: '4L-5L'},
   {value: '5L-6L', label: '5L-6L'},
   {value: '6L-7L', label: '6L-7L'},
   {value: '7L-8L', label: '7L-8L'},
   {value: '8L-9L', label: '8L-9L'},
   {value: '9L-10L', label: '9L-10L'},
   {value: '10L-15L', label: '10L-15L'},
   {value: '15L-20L', label: '15L-20L'},
   {value: '20L-30L', label: '20L-30L'},
   {value: 'abover30L', label: 'Above 30L'},
]
const subjectOptions = [
  {value: "engineering", label: 'Engineering/'},
  {value: "medical", label: "Medical"},
   {value: "business", label: "Business"},
   {value: "law", label: 'Law'},
   {value: "socialScience", label: "Social Science"},
   {value: "commerce", label: "Commerce/Finance"},
   {value: "agriculture", label: "Agriculture"}
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

const educationQualificationOptions = [
  {value: "undergraduate", label: "Undergraduate"},
  {value: "graduate", label: "Graduate"},
  {value: "doctarate", label: "P.h.d/Doctorate"},
  {value: "highSchool", label: "High School"},
  {value: "literate", label: "Literate"},
  {value: "illiterate", label: "Illiterate"}
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


   const sectorOptions = [
    {value: 'private', label: 'Private Company'},
    {value: 'government', label: 'Government'},
    {value: 'ngo', label: "NGO's/INGO's"},
    {value: 'selfEmployed', label: "Self Employed"},
    {value: "unEmployed", label: 'Unemployed'},
  ]


  return (

    <div className="md:mt-8 md:mb-8 px-2 py-4  w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] bg-white rounded-lg mx-auto">
      {/* <h1 className="text-2xl w-full text-center font-semibold xl:text-4xl my-4">Some Personal details</h1> */}
      
        
          <form className=" mx-auto" onSubmit={handleSubmit}>
            <h1 className='text-2xl w-[90%] mx-auto mb-1 font-bold'>Partner Preferance detail </h1>

            <div className='w-[90%] mx-auto flex flex-col justify-start items-center'>
                <h1 className='w-full mx-auto mt-1 text-md lg:text-lg 2xl:text-xl'>Age Range</h1>

                <div className='flex w-[100%] justify-between mt-0'>
                 <InputSelect placeholder="From" classes2="xl:w-[45%] basis-[45%]" options={fromAgeOptions}  />
                 <InputSelect placeholder="To"   classes2="xl:w-[45%] basis-[45%]" options={toAgeOptions} />    
                </div>
            
            </div>

            <div className='w-[90%] mx-auto flex flex-col justify-start items-center'>
                <h1 className='w-full mx-auto text-md lg:text-lg 2xl:text-xl mt-1'>Height Range</h1>

                <div className='flex w-full justify-between'>
                 <InputSelect placeholder="From" classes2="xl:w-[45%] basis-[45%] " options={fromheightOptions}  />
                 <InputSelect placeholder="To"  classes2="xl:w-[45%] basis-[45%] " options={toheightOptions} />    
                </div>
            
            </div>

           <div className="w-full flex justify-around items-center">
              {/* <Input label="No of family Members" classes3="w-[70%]" classes="px-2" classes2="block 2xl:text-2xl lg:text-2xl" type="number" placeholder="Family Member Number" /> */}
               <InputSelect label="Religion" classes1="block text-md lg:text-lg 2xl:text-xl my-1" classes2="xl:w-[40%] basis-[40%]" options={religionOptions} />
               <InputSelect label="Caste" classes1="block text-md lg:text-lg 2xl:text-xl my-1" classes2="xl:w-[40%] basis-[40%]" options={casteOptions} />
            </div>
{/* 

            <div className="w-full flex justify-between flex-col items-center">
               {/* <Input label="No of sibling" type="number" classes1="block text-2xl my-2" classes2="xl:w-[60%] basis-[40%]" options={genderOptions} /> */}
                {/* <Input label="No of Sibling" classes3="w-[70%]" classes="px-2" classes2="block 2xl:text-2xl lg:text-2xl" type="number" placeholder="Enter full Name" />
                 <Input label="No of Unmarried Sibling" classes3="w-[70%]" classes="px-2" classes2="block 2xl:text-2xl lg:text-2xl" type="number" placeholder="Enter full Name" />
                <InputSelect label="Do you live with your family" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[70%]" options={liveWithFamilyOptions} />
                */}
        
           {/* </div> */}

           <div className="w-full flex justify-around items-center">
                <InputSelect label="Educational Qualification" classes1="block text-md lg:text-lg 2xl:text-xl my-1" classes2="xl:w-[40%] basis-[40%]" options={educationQualificationOptions}  />
             
                 <InputSelect label="Subject" classes1="block text-md lg:text-lg 2xl:text-xl my-1" classes2="xl:w-[40%] basis-[40%]" options={subjectOptions} />
                
           </div>

       

           <div className="w-full flex justify-around items-center">
               {/* <Input label="Enter your Gotra" type="text" classes1="block text-2xl my-2" classes2="xl:w-[60%] basis-[40%]" options={genderOptions} /> */}
               {/* <Input label="Enter your gotra" classes3="w-[70%]" classes="px-2" classes2="block 2xl:text-2xl lg:text-2xl" type="text" placeholder="Enter your gotra (if applied)" />
                <InputSelect label="Family Values" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-70%]" options={familyValueOptions}/>
                <InputSelect label="Parent Status" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[70%]" options={parentStatusOptions}/>
                  */}
                 {/* <Input label="Where do your family live ?" classes3="w-[70%]" classes="px-2" classes2="block 2xl:text-2xl lg:text-2xl" type="text" placeholder="Enter your family location" /> */}
                 <InputSelect label="Sector working in" classes1="block text-md lg:text-lg 2xl:text-xl my-1" classes2="xl:w-[40%] basis-[40%]" options={sectorOptions}/>
                 <InputSelect label="Annual Income" classes1="block text-md lg:text-lg 2xl:text-xl my-1" classes2="xl:w-[40%] basis-[40%]" options={annualIncomeOptions}/>
               </div>

               <div className='w-[90%] mx-auto flex justify-start items-center'>
                  <Input label="Mother Tongue" classes3="w-[45%]" classes="px-2" classes2="block text-md lg:text-lg 2xl:text-xl" type="text" placeholder="Enter your mother tongue" />
               </div>

           <div className="w-[90%] mx-auto flex justify-end">
             {/* <Button label="Previous" classes="px-16 py-3 rounded-xl btnnext text-white" classes2="w-full flex justify-center py-4" onClick={() => handlePrevClick()} /> */}
             <Button onClick={() => handleNextClick()} label="Save" classes="px-8 py-3 rounded-xl btnnext text-white" classes2="w-full flex justify-end py-2" />
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

export default ProfileFourthForm;