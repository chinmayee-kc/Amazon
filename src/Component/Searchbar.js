
// import React, {useState} from "react";

// export const Searchbar = () => {
//   const [query, setQuery] = useState("");
//   console.log(query);
//   return (
//     <div>
//     <input 
//     type="text"
//     placeholder="Search here..."
//     className="search"
//     onChange={(e) => setQuery(e.target.value)}
//     />
    
//     </div>
//   )
// }




import React, {useState} from "react";

export const Searchbar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); // Call the onSearch function provided as a prop with the new query value
    };

    return (
        <div>
            <input 
                type="text"
                placeholder="Search here..."
                className="search"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
}





















// export const Searchbar = () => {
//   // const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

// const handleSubmit = (e) =>[
//   e.preventDefault(),
//   navigate(`/search/${searchTerm}`)
// ]
    
//   return (
//     <>
//      <div className="templateContainer">
//         <form  className="searchInput_Container">
//           <input 
//            value={searchTerm}
//            type="text"
//             placeholder="Search here..."
//              onChange={(event) => {
//             setSearchTerm(event.target.value);
//           }} />
//         </form>
//         <div className="template_Container">
//           {/* {
//             Data
//               .filter((val) => {
//                 if(searchTerm == ""){
//                   return val;
//                 }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
//                   return val;
//                 }
//               })
//               .map((val) => {
//                 return(
//                   <div className="template" key={val.id}>
//                       <img src={val.image} alt="" />
//                       <h3>{val.title}</h3>
//                       <p className="price">${val.price}</p>
//                   </div> 
//                 )
//               })
//           } */}
//         </div>
//       </div>
//     </>
//   )
// }



// // import React, { useState, useEffect } from "react";

// // export const Searchbar = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch("https://dummyjson.com/products");
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch data");
// //         }
// //         const jsonData = await response.json();
// //         setData(jsonData);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <>
// //       <div className="templateContainer">
// //         <div className="searchInput_Container">
// //           <input
// //             id="searchInput"
// //             type="text"
// //             placeholder="Search here..."
// //             value={searchTerm}
// //             onChange={(event) => setSearchTerm(event.target.value)}
// //           />
// //         </div>
// //         <div className="template_Container">
// //           {data
// //             .filter((val) =>
// //               val.title.toLowerCase().includes(searchTerm.toLowerCase())
// //             )
// //             .map((val) => (
// //               <div className="template" key={val.id}>
// //                 <img src={val.image} alt="" />
// //                 <h3>{val.title}</h3>
// //                 <p className="price">${val.price}</p>
// //               </div>
// //             ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };






// // import React, { useState, useEffect } from "react";

// // export const Searchbar = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch("https://dummyjson.com/products");
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch data");
// //         }
// //         const jsonData = await response.json();
// //         setData(jsonData);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <>
// //       <div className="templateContainer">
// //         <div className="searchInput_Container">
// //           <input
// //             id="searchInput"
// //             type="text"
// //             placeholder="Search here..."
// //             value={searchTerm}
// //             onChange={(event) => setSearchTerm(event.target.value)}
// //           />
// //         </div>
// //         <div className="template_Container">
// //           {data &&
// //             data
// //               .filter((val) =>
// //                 val.title.toLowerCase().includes(searchTerm.toLowerCase())
// //               )
// //               .map((val) => (
// //                 <div className="template" key={val.id}>
// //                   <img src={val.image} alt="" />
// //                   <h3>{val.title}</h3>
// //                   <p className="price">${val.price}</p>
// //                 </div>
// //               ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };





