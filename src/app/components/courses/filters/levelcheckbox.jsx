"use client"
import React,{useState,useEffect} from "react";
import data from "../../../../../data";

const calculateLevelCounts = (data) => {
  let levelCounts = {};

  // Iterate through each object in the data array
  data.forEach((course) => {
    const level = course.level;

    // Increment the count for the language
    levelCounts[level] = (levelCounts[level] || 0) + 1;
  });

  return levelCounts;
};


const Levelcheckbox = ({ level, checked, onChange }) => {
  const [levelCounts, setLevelCounts] = useState({});

  useEffect(() => {
    const counts = calculateLevelCounts(data);
    setLevelCounts(counts);
  }, [data]);

  

  
  return (
    <div>
      <label className="flex items-center justify-between  my-2 text-xs">
       <div className="flex items-center gap-1">
       <input
          type="checkbox"
          value={level}
          checked={checked}
          onChange={onChange}
        />
        {level}
       </div>
       <p className="text-xs text-gray-400">
         ({levelCounts[level] || 0})
        </p>
      </label>
    </div>
  );
};

export default Levelcheckbox;
