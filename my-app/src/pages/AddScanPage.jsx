import React from "react";
import PatientsSearch from "../components/PatientsSearch";

const AddScanPage = () => {
  return (
    <div className="add-scan-page">
      <h1>Добавление скана</h1>
      <PatientsSearch />
      <button>Новый пациент</button>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "flex-start",
        }}>
        <label htmlFor="name">Имя пациента:</label>
        <input type="text" id="name" placeholder="Имя пациента" />
        <label htmlFor="surname">Фамилия пациента:</label>
        <input type="text" id="surname" placeholder="Фамилия пациента" />
        <label htmlFor="birth">Дата рождения:</label>
        <input type="date" id="birth" />

        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Добавить пользователя");
          }}>
          Добавить
        </button>

        {/* {TODO добавить addToPatientsList, которая закидывает данные в базу (пока в console.log)} */}
      </form>
      <input type="text" placeholder="Название исследования" />
      <div className="dropzone">
        {/* Тут дропзона для dicom файлов */}
        <p>Перетащите файлы сюда</p>
        <button>Добавить из файлов</button>
      </div>
      <button>Проанализировать</button>
    </div>
  );
};

export default AddScanPage;
