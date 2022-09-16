// import React from 'react';
// import Downshift from 'downshift';

// const SearchBox = ({ items, placeholder, onChange }) => {
//     return (
//       <Downshift
//         onChange={onChange}
//         render={({
//           getInputProps,
//           getItemProps,
//           isOpen,
//           inputValue,
//           selectedItem,
//           highlightedIndex,
//         }) => (
//           <div>
//             <input {...getInputProps({ placeholder })} />
//             {isOpen ? (
//               <div style={{border: '1px solid #ccc'}}>
//                 {items
//                   .filter(
//                     i =>
//                       !inputValue ||
//                       i.toLowerCase().includes(inputValue.toLowerCase()),
//                   )
//                   .map((item, index) => (
//                     <div
//                       {...getItemProps({item})}
//                       key={item}
//                       style={{
//                         backgroundColor:
//                           highlightedIndex === index ? 'gray' : 'white',
//                         fontWeight: selectedItem === item ? 'bold' : 'normal',
//                       }}
//                     >
//                       {item}
//                     </div>
//                   ))}
//               </div>
//             ) : null}
//           </div>
//         )}
//       />
//     )
//   }

//   export default SearchBox;

import  React,{ useState } from 'react'
import data from "../ListData.json"

function SearchBox(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return '';
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default SearchBox