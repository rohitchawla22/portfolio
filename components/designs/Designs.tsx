import React from "react";
import { designs } from "@/data/content/designs";
import steps from "@/data/content/designs";
import Item from "./Item";

function Designs() {
  // return (
    // <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
    //   {designs.map((item, index) => {
    //     return (
    //       <div
    //         className="w-full"
    //         key={index}
    //       >
    //         <a href={item.link} target="_blank" className="w-full">
    //           <img
    //             className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
    //             src={item.img}
    //           />
    //         </a>
    //       </div>
    //     );
    //   })}
    // </div>
  // );
  return (
    <>
      <div className="container-timeline">
        {steps.map((item, index) => (
          <Item data={item} key={item.title} index={index}/>
        ))}
      </div>
      <style jsx>{`
        .container-timeline {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          counter-reset: contador;
          margin: 3rem auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          margin-bottom: 8rem;
        }
      `}</style>
    </>
  );
}

export default Designs;
