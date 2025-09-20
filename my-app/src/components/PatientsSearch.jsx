import React from "react";

const PatientsSearch = () => {
  return (
    <form>
      <label>
        <input type="text" placeholder="Поиск по имени"></input>
      </label>
      <button type="submit">Поиск</button>
    </form>
  );
};

export default PatientsSearch;
