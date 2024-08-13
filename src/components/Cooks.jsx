import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Cooks = () => {
  const [cook, useCook] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => console.log(res.data.meals));
  }, []);
  return (
    <ul className="cook">
      <Card />
    </ul>
  );
};

export default Cooks;
