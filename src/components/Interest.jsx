import React from "react";
import { useState } from "react";

const Interest = () => {
    const [interest] = useState([
        'Internet of Things', 'Software Development Engineer', 'Data Analyst' 
    ])
  return (
    <>
      <div className="languages" id="int">
        <h1>Interested Fields</h1>
        <div className="interest" data-aos="fade-right">
            {
                interest.map((elem) => {
                    return (
                        <>
                            <div className="inBlock">{elem}</div>
                        </>
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default Interest;
