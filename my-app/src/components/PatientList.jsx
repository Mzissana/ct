import React from "react";
import PatientCard from "./PatientCard";
import patients from "../data/patients";
import { useNavigate } from "react-router-dom";

const PatientList = ({ className }) => {
  const navigate = useNavigate();

  const openPatientPage = (id) => {
    navigate(`/patient/${id}`);
  };

  return (
    <div className={className}>
      <h1>Пациенты</h1>
      <div className="dashboard__patient-list">
        {patients.map((patient) => (
          <PatientCard
            className="patient-list__card"
            key={patient.id}
            name={patient.name}
            age={patient.age}
            birth={patient.birth}
            status={patient.status}
            openPatientPage={() => openPatientPage(patient.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
