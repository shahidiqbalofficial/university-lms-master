"use client"
import React, { useState, useEffect } from "react";
import data from "../../../../../data";

const calculateLanguageCounts = (data) => {
  let languageCounts = {};

  // Iterate through each object in the data array
  data.forEach((course) => {
    const language = course.language;

    // Increment the count for the language
    languageCounts[language] = (languageCounts[language] || 0) + 1;
  });

  return languageCounts;
};

const Languagecheckbox = ({ language, checked, onChange }) => {
  const [languageCounts, setLanguageCounts] = useState({});

  useEffect(() => {
    const counts = calculateLanguageCounts(data);
    setLanguageCounts(counts);
  }, [data]);

  return (
    <div>
      <label className="flex items-center justify-between my-2 text-xs">
        <div className="flex items-center gap-1 text-xs">
          <input
            type="checkbox"
            value={language}
            checked={checked}
            onChange={onChange}
          />
          {language}
        </div>
        <p className="text-xs text-gray-400">
          ({languageCounts[language] || 0})
        </p>
      </label>
    </div>
  );
};

export default Languagecheckbox;