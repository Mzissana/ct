import React from "react";
import MyButton from "./ui/MyButton/MyButton";

const PatientCard = ({
  name,
  age,
  birth,
  status,
  scans,
  openPatientPage,
  className,
}) => {
  return (
    <div className={className}>
      <div className="patient-card__info">
        <h2 className="patient-card__title">{name}</h2>
        <div className="patient-card__info-block">{status}</div>
        <ul className="patient-card__info-block patient-card__list">
          <li>
            Возраст: <span>{age}</span>
          </li>
          <li>
            Дата рождения: <span>{birth}</span>
          </li>
          <li>
            Сканирований: <span>{scans}</span>
          </li>
        </ul>
      </div>

      <MyButton className="patient-card__button" onClick={openPatientPage}>
        Просмотреть
      </MyButton>
    </div>
  );
};

export default PatientCard;
