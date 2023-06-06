import debounce from 'debounce-promise';
import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterSearchUserThunk } from '../../store/thunk/searchUserThunk';
import { axiosInstance } from '../../http';
import { RiArrowDownSFill } from 'react-icons/ri';
import '../../styles/Filter.css';

function NewFilter() {


    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [showFilter, setShowFilter] = useState(false);

    const {loading} = useSelector((state) => state.search);

    const [value, setValue] = useState({
        minHeight: '',
        maxHeight: '',
        minAge: '',
        maxAge: '',
        maritalStatus: '',
        annualIncome: '',
        religion: '',
        caste: '',
    })

    const filterOption = [
            {
            key: '6',
            value: 'religion',
            label: 'Religion',
            options: [
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
        },
        {
            key: '8',
            value: 'caste',
            label: 'Caste',
            options: [
    {value: "brahmin", label: "Brahmin"},
    {value: "chhetri", label: "chhetri"},
    {value: 'thakuri', label: "Thakuri"},
    {value: 'magar', label: 'Magar'},
    {value: 'tamang', label: 'Tamang'},
    {value: 'sherpa', label: "Sherpa"},
    {value: "newar", label: "Newar"},
            ]
        },

        {
           key: '9',
           value: 'gender',
           label: 'Gender',
           options: [
            {value: 'male', label: 'Male'},
            {value: 'female', label: 'Female'},
           ]
        },
               {
            key: '5',
            value: 'maritalStatus',
            label: 'Marital Status',
            options: [
                {
                    label: 'Divorced',
                    value: 'divored'
                },
                {
                    label: 'Unmarried',
                    value: 'Unmarried'
                },
                {
                    label: 'Awaiting Divorce',
                    value: 'Awaition Divorce'
                }
            ]
        },
        {
            key: '1',
            value: 'minHeight',
            label: 'Height',
            options: [
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
        },
    //             {
    //         key: '2',
    //         value: 'aget',
    //         label: 'Age',
    //         options: [
    //                {value: '4ft 5in - 134cm', label: '4ft 5in - 134cm'},
    //   {value: '4ft 6in - 137cm', label: '4ft 6in - 137cm'},
    //   {value: '4ft 7in - 139cm', label: '4ft 7in - 139cm'},
    //   {value: '4ft 8in - 142cm', label: '4ft 8in - 142cm'},
    //   {value: '4ft 9in - 144cm', label: '4ft 9in - 144cm'},
    //   {value: '4ft 10in - 147cm', label: '4ft 10in - 147cm'},
    //   {value: '4ft 11in - 149cm', label: '4ft 11in - 149cm'},
    //   {value: '5ft 0in - 152cm', label: '5ft 0in - 152cm'},
    //   {value: '5ft 1in - 154cm', label: '5ft 1in - 154cm'},
    //   {value: '5ft 2in - 157cm', label: '5ft 2in - 157cm'},
    //   {value: '5ft 3in - 159cm', label: '5ft 3in - 159cm'},
    //   {value: '5ft 4in - 162cm', label: '5ft 4in - 162cm'},
    //   {value: '5ft 5in - 164cm', label: '5ft 5in - 164cm'},
    //   {value: '5ft 6in - 167cm', label: '5ft 6in - 167cm'},
    //   {value: '5ft 7in - 169cm', label: '5ft 7in - 169cm'},
    //   {value: '5ft 8in - 172cm', label: '5ft 8in - 172cm'},
    //   {value: '5ft 9in - 174cm', label: '5ft 9in - 174cm'},
    //   {value: '5ft 10in - 177cm', label: '5ft 10in - 177cm'},
    //   {value: '5ft 11in - 179cm', label: '5ft 11in - 179cm'},
    //   {value: '6ft 0in - 182cm', label: '6ft 0in - 182cm'},
    //   {value: '6ft 1in - 184cm', label: '6ft 1in - 184cm'},
    //   {value: '6ft 2in - 187cm', label: '6ft 2in - 187cm'},
    //   {value: '6ft 3in - 189cm', label: '6ft 3in - 189cm'},
    //   {value: '6ft 4in - 192cm', label: '6ft 4in - 192cm'},
    //         ]
    //     },
                {
            key: '3',
            value: 'agege',
            label: 'Age',
            options: [
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
        },
    
        {
            key: '7',
            value: 'annualIncome',
            label: 'Annual Income',
            options: [
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
   {value: 'above30L', label: 'Above 30L'},
            ]
        },
    ]

      const searchUser = async () => {
         console.log('filter search user thunk');
         console.log(value);
        //  dispatch(filterSearchUserThunk(value.minAge, value.maxAge, value.minHeight, value.maxHeight, value.religion, value.caste, value.annualIncome));
          axiosInstance.get(`/users/filter?minAge=${value.minAge}&&maxAge=${value.maxAge}&&minHeight=${value.minHeight}&&maxHeight=${value.maxHeight}&&maritalStatus=${value.maritalStatus}&&religion=${value.religion}&&caste=${value.caste}&&annualIncome=${value.annualIncome}`)
          .then((res) => {
            console.log(res.data);
          })
      };

    const delayFetchUser = useCallback(debounce(searchUser, 500), []);

    

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })

       fetchUser();
    }

    const fetchUser = () => {
        console.log(value)
        searchUser()
        // delayFetchUser();
    }

    console.log(value);

  return (

    <div className='filter z-20 mr-0 shadow-md'>
      <div className='refine-text py-3 flex justify-between px-2 ' onClick={() => setShowFilter((prev) => !prev)}>
        <h6>Refine your search</h6>
        {/* <span className=''><RiArrowDownSFill size={25} /></span> */}
      </div>
    <div className='refine-body w-full h-[80vh] overflow-y-auto'>
      <Accordion allowZeroExpanded allowMultipleExpanded className={`accordion ${showFilter ? 'block' : 'hidden'}  md:block`}>
         {
            filterOption && filterOption.map((option) => {
                return (
                    <AccordionItem className='accordionItem' uuid={option.key}>
                <AccordionItemHeading className='accordionItemHeading border-b-2 border-[rgba(0 ,0, 0, 0.8)] rounded-none md:border-none'>
                    <AccordionItemButton className="accordionItemButton hover:bg-screen rounded-xl w-full  border-[rgba(0, 0, 0)] font-bold text-sm text-[rgba(0, 0, 0, 0.6)]">
                        {option.label}
                    </AccordionItemButton>
                </AccordionItemHeading>
                    <AccordionItemPanel className='accordion-body'>
                        <div>
                            {
                                option.options && option.options.map((item, index) => {
                                   return ( 
                                   <div className='w-full' key={index}>
                                       {/* <input
                                        className="form-check-input"
                                        type="radio"
                                        id="flexCheckDefault"
                                        name={option.value}
                                        value={item.value}
                                        onChange={(e) => handleChange(e)}
                                        /> */}
                                         <h4 className='font-semibold py-2 px-3 rounded-xl hover:bg-screen '>
                                             {item.label}
                                        </h4>
                                    </div>
                                   )
                                })
                            }
                        </div>
                    </AccordionItemPanel>
                 </AccordionItem>
                )
            })
         }
         </Accordion>
         <div>
      </div>
      </div>
    </div>
  )
}

export default NewFilter