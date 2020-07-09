// import React, { useState, useContext } from "react";
// import { FacilityContext } from "../providers/FacilityProvider";
// import FacilityList from "../containers/FacilityList";

// function Search() {
//   const [facilities, setFacilities] = useContext(FacilityContext);
//   const [results, setResults] = useState("");
//   const [displayedItems, setDisplayedItems] = useState(facilities);

//   const handleChange = (event) => {
//     let items = facilities.forEach((facility) => facility.name);
//     console.log("Items", items);
//     if (event !== "") {
//       let newItems = [];
//       setResults(event);
//       newItems = items.filter((facility) =>
//         facility.includes(results.toLowerCase())
//       );

//       setDisplayedItems(newItems);
//     } else {
//       setDisplayedItems(facilities);
//     }
//   };

//   return (
//     <div>
//       <h1>Search for dispersed camping</h1>

//       <form>
//         <input onChange={(event) => handleChange(event.target.value)} />
//         {displayedItems.map((facility) => (
//           <div key={facility.id}>
//             <li>{facility}</li>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// }

// export default Search;
// // import React, { useState, useReducer, useContext } from "react";
// // import { FacilityContext } from "../providers/FacilityProvider";
// // import Facility from "../components/Facility";

// // const ACTIONS = {
// // //   SHOW_FACILITIES: "show-facilities",
// // };

// // function reducer(state, action) {
// //     switch (action.type) {
// //         case ACTIONS.SHOW_FACILITIES:
// //             return
// //     }
// // }

// // function reduceFacilities(displayed) {}

// // function Search() {
// //   //   const [facilities, setFacilities] = useContext(FacilityContext);
// //   //   const [state, dispatch] = useReducer(reducer, {
// //   //     visibleFacilities: facilities,
// //   //   });
// //   //   const displayed = facilities.forEach((facility) => {
// //   //     return console.log([<FacilityList facility={facility} />]);
// //   //   });

// //   return (
// //     <form>
// //       <input text="text"></input>
// //     </form>
// //   );
// // }

// // export default Search;
