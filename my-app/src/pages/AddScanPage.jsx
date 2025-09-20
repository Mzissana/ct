import React, { useState } from "react";
import PatientsSearch from "../components/ui/PatientsSearch/PatientsSearch";
import MyButton from "../components/ui/MyButton/MyButton";
import Dropzone from "../components/ui/Dropzone/Dropzone";
import clsx from "clsx";

const AddScanPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="add-scan-page">
      <header className="page__header">
        <h1 className="page__title">Добавить исследование</h1>
        <PatientsSearch />
        <MyButton
          className="page__header-buttons"
          onClick={() => setIsFormVisible((prev) => !prev)}>
          {isFormVisible ? "Скрыть форму" : "Новый пациент"}
        </MyButton>
      </header>

      <main className="page__body">
        {isFormVisible && (
          <form
            className={clsx(
              "add-scan-page__form",
              isFormVisible && "add-scan-page__form--active"
            )}>
            <label htmlFor="name">Имя пациента:</label>
            <input type="text" id="name" placeholder="Имя пациента" />
            <label htmlFor="surname">Фамилия пациента:</label>
            <input type="text" id="surname" placeholder="Фамилия пациента" />
            <label htmlFor="birth">Дата рождения:</label>
            <input type="date" id="birth" />

            <MyButton
              onClick={(e) => {
                e.preventDefault();
                console.log("Добавить пользователя");
              }}>
              Добавить
            </MyButton>
          </form>
        )}

        <input type="text" placeholder="Название исследования" />
        <Dropzone />
        <MyButton>Проанализировать</MyButton>
      </main>
    </div>
  );
};

export default AddScanPage;
