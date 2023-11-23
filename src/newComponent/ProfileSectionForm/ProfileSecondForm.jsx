import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Profile/Input';
import InputSelect from '../Profile/Select';
import { BiEdit } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addToast } from '../../store/features/toastSlice';
import { axiosInstance } from '../../http';
import { setFamilyDetail } from '../../store/features/familyDetailSlice';
import { ActionIcon, Button, Group, NumberInput, Paper, Select, TextInput, Title, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    formWrapper: {
      backgroundColor: 'white'
    },
    button: {
      backgroundColor: 'var(--seondary)'
    }
}))
function ProfileSecondForm({secondFormValues, setSecondFormValues, isMe}) {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [profileEdit, setProfileEdit] = useState(false);
   const {classes} = useStyles();
  const largeDesktop = useMediaQuery('(min-width: 1750px)')
  const mediumDesktop = useMediaQuery('(max-width: 1440px)')


  const handleSubmit = (event) => {
        event.preventDefault();
         if(!secondFormValues.familyType || !secondFormValues.noOfSiblings || !secondFormValues.noOfFamilyMember || !secondFormValues.noOfUnmarried || !secondFormValues.familyValues || !secondFormValues.parentStatus || !secondFormValues.familyAddress || !secondFormValues.nativePlace || !secondFormValues.motherTongue) {
          return dispatch(addToast({kind: 'ERROR', msg: 'Please fill all fields.'}))
        }
         axiosInstance.post('/users/family-detail', secondFormValues)
          .then((response) => {
            console.log('updated successfully')
            console.log(response.data);
            dispatch(
              setFamilyDetail(response.data)
            )
            // navigate('/contactdetails')
            dispatch(
              addToast({kind: 'SUCCESS', msg: 'Family details updated!'})
            )
         }).catch((error) => {
           console.log(error);
            dispatch(addToast({kind: 'ERROR', msg: 'Failed to update!'}))
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

 const handleInputChange = (e) => {
      setSecondFormValues({...secondFormValues, [e.target.name]: e.target.value})
   }

   const handleFamilyTypeChange = (values) => {
       setSecondFormValues({...secondFormValues, familyType: values.value})
   }

   const handleYouLiveWithFamilyChange = (values) => {
      setSecondFormValues({...secondFormValues, liveWithFamily: values.value})
   }

   const handleFamilyValuesChange = (values) => {
    setSecondFormValues({...secondFormValues, familyValues: values.value});
   }
   
   const handleParentStatusChange = (values) => {
    setSecondFormValues({...secondFormValues, parentStatus: values.value})
   }
  return (

    <div className="lg:mt-8 lg:mb-8 px-2 py-4 w-[100%] lg:w-[100%] xl:w-[100%] rounded-lg mx-auto ">
      {/* <h1 className="text-2xl w-full text-center font-semibold xl:text-4xl my-4">Some Personal details</h1> */}
      
         <Paper className={classes.formWrapper} withBorder radius={2} py={30} px={30}>
          <form className=" mx-auto" onSubmit={handleSubmit}>

            <Group position='apart' mb={largeDesktop ? 'xl' : (mediumDesktop ? 'md' : 'lg')}>
             <Title order={largeDesktop ? 1 : (mediumDesktop ? 3:2)}>Family Information</Title>
             {isMe && <ActionIcon  onClick={() => setProfileEdit((prev) => !prev)}><BiEdit size={30}  className={`${!profileEdit ?  'text-[var(--secondary)]' : 'text-[var(--primary)]'} hover:text-[var(--primary)] cursor-pointer`} /></ActionIcon>}
             </Group>
           <Group grow mb={largeDesktop ? 'xl' : (mediumDesktop ? 'md' : 'ld')}>
              <Select size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleFamilyTypeChange} value={secondFormValues.familyType} readOnly={profileEdit ? false : true} label="Family Type"  data={familytypeOptions}  />
               <NumberInput size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleInputChange} value={Number(secondFormValues.noOfFamilyMember)} disabled={profileEdit ? false : true} label="No of family Members"  placeholder="Family Member Number" />
               {/* <InputSelect label="Father's Status" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[40%]" /> */}
           </Group>

            <Group grow mb={largeDesktop ? 'md' : 'sm'} className="w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row lg:justify-around items-center">
               {/* <Input label="No of sibling" type="number" classes1="block text-2xl my-2" classes2="xl:w-[60%] basis-[40%]" options={genderOptions} /> */}
                <NumberInput size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleInputChange} value={Number(secondFormValues.noOfSiblings)} disabled={profileEdit ? false : true} label="No of Sibling" classes3="w-full lg:w-[40%]" classes="px-2" classes2="block text-md xl:text-xl lg:text-lg font-semibold" type="number" placeholder="Enter full Name" />
                <Select size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleYouLiveWithFamilyChange} value={secondFormValues.liveWithFamily} readOnly={profileEdit ? false : true} label="Do you live with your family" classes1="block text-md lg:text-lg xl:text-xl my-1 font-semibold" classes2="w-full lg:w-[40%] basis-[40%]" data={liveWithFamilyOptions} />
           </Group>

          

           <Group grow mb={largeDesktop ? 'md' : 'sm'} className="w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row lg:justify-around items-center">
              {/* <InputSelect label="N" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[40%]" options={familytypeOptions}  /> */}
              {secondFormValues.nativePlace && <TextInput size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleInputChange} disabled={profileEdit ? false : true} value={secondFormValues.nativePlace} label="Native/Ancestors Place" classes3="w-full lg:w-[40%]" classes="px-2" classes2="block xl:text-xl lg:text-lg text-md font-semibold" type="text" placeholder="Native Place" /> }
               {/* <InputSelect label="Father's Status" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[40%]" /> */}
               {secondFormValues.motherTongue &&  <TextInput size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleInputChange} disabled={profileEdit ? false : true} label="Mother Tongue" value={secondFormValues.motherTongue} classes3="w-full lg:w-[40%]" classes="px-2" classes2="block text-md lg:text-lg xl:text-xl text-md font-semibold" type="text" placeholder="Enter your mother tongue" />}
           </Group>

           <Group grow mb={largeDesktop ? 'md' : 'sm'} className="w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row lg:justify-around items-center">
               {/* <Input label="Enter your Gotra" type="text" classes1="block text-2xl my-2" classes2="xl:w-[60%] basis-[40%]" options={genderOptions} /> */}
               <TextInput size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleInputChange} value={secondFormValues.gotra} disabled={profileEdit ? false : true} label="Enter your gotra" classes3="w-full lg:w-[40%]" classes="px-2" classes2="block text-md lg:text-lg xl:text-xl font-semibold" type="text" placeholder="Enter your gotra (if applied)" />
                <Select size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleFamilyValuesChange} value={secondFormValues.familyValues} readOnly={profileEdit ? false : true} label="Family Values" classes1="block text-md lg:text-lg xl:text-xl my-1 font-semibold" classes2="w-full lg:w-[40%] basis-40%]" data={familyValueOptions}/>
               </Group>

               <Group grow mb={largeDesktop ? 'md' : 'sm'} className='w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row lg:justify-around items-center'>
                   <Select size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleParentStatusChange} value={secondFormValues.parentStatus} readOnly={profileEdit ? false : true} label="Parent Status" classes1="block text-md lg:text-lg xl:text-xl my-1 font-semibold" classes2="w-full lg:w-[40%] basis-[40%]" data={parentStatusOptions}/>
                   <NumberInput size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')}  onChange={handleInputChange} value={Number(secondFormValues.noOfUnmarried)} disabled={profileEdit ? false : true} label="No of Unmarried Sibling" classes3="w-full lg:w-[40%]" classes="px-2" classes2="block xl:text-xl lg:text-lg font-semibold" type="number" placeholder="Enter Number of unmarried Siblings" />
               </Group>

               <Group grow mb={largeDesktop ? 'md' : 'sm'}>
               
                 <TextInput size={largeDesktop ? 'xl': (mediumDesktop ? 'sm' : 'lg')} onChange={handleInputChange} value={secondFormValues.familyAddress} disabled={profileEdit ? false : true} label="Where do your family live ?" type="text" placeholder="Enter your family location" />
               </Group>


           {profileEdit && (<Group position='right'>
             {/* <Button label="Previous" classes="px-16 py-3 rounded-xl btnnext text-white" classes2="w-full flex justify-center py-4" onClick={() => handlePrevClick()} /> */}
             <Button className={classes.button} style={{backgroundColor: 'var(--secondary)'}} type="submit" >Save</Button>
          </Group>)}

          {/* <button className="btnprev" onClick={() => handlePrevClick()}>
            <HiChevronDoubleLeft /> Prev
          </button>
    
          <button type="submit" className="btnnext">
            Next <HiChevronDoubleRight /> */}
          {/* </button> */}
              
          </form>
          </Paper>
        </div>
  )
}

export default ProfileSecondForm;