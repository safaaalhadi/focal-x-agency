import { employeesType } from "../contants/employeesType";


const allEmployees = [
  {
    address: "fixed address",
    duration: 12,
    endDate: "1/1/1",
    firstName: "Majd",
    generatedId: "1",
    hardSkills: ["Wen dev", "web design"],
    isEmployee: false,
    isIntern: true,
    kpi: 1,
    lastName: "al",
    memberId: "1cae77b0-96d0-449f-aaed-621d2f2d700e",
    projects: ["project 1", "project 2"],
    softSkills: ["Wen dev", "web design"],
    specification: "WEB Back End Developer",
    startDate: "1/1/1",
    supervisor: "Alaa Drebate",
  },
  {
    address: "fixed address",
    duration: 12,
    endDate: "1/1/1",
    firstName: "Majd",
    generatedId: "1",
    hardSkills: ["Wen dev", "web design"],
    isEmployee: false,
    isIntern: true,
    kpi: 1,
    lastName: "al",
    memberId: "1cae77b0-96d0-449f-aaed-621d2f2d700e",
    projects: ["project 1", "project 2"],
    softSkills: ["Wen dev", "web design"],
    specification: "WEB Back End Developer",
    startDate: "1/1/1",
    supervisor: "Alaa Drebate",
  },
  {
    address: "fixed address",
    duration: 12,
    endDate: "1/1/1",
    firstName: "Majd",
    generatedId: "1",
    hardSkills: ["Wen dev", "web design"],
    isEmployee: false,
    isIntern: true,
    kpi: 1,
    lastName: "al",
    memberId: "1cae77b0-96d0-449f-aaed-621d2f2d700e",
    projects: ["project 1", "project 2"],
    softSkills: ["Wen dev", "web design"],
    specification: "WEB Back End Developer",
    startDate: "1/1/1",
    supervisor: "Alaa Drebate",
  },
  {
    address: "fixed address",
    duration: 12,
    endDate: "1/1/1",
    firstName: "Majd",
    generatedId: "1",
    hardSkills: ["Wen dev", "web design"],
    isEmployee: false,
    isIntern: true,
    kpi: 1,
    lastName: "al",
    memberId: "1cae77b0-96d0-449f-aaed-621d2f2d700e",
    projects: ["project 1", "project 2"],
    softSkills: ["Wen dev", "web design"],
    specification: "WEB Back End Developer",
    startDate: "1/1/1",
    supervisor: "Alaa Drebate",
  },
  {
    address: "fixed address",
    duration: 12,
    endDate: "1/1/1",
    firstName: "Majd",
    generatedId: "1",
    hardSkills: ["Wen dev", "web design"],
    isEmployee: false,
    isIntern: true,
    kpi: 1,
    lastName: "al",
    memberId: "1cae77b0-96d0-449f-aaed-621d2f2d700e",
    projects: ["project 1", "project 2"],
    softSkills: ["Wen dev", "web design"],
    specification: "WEB Back End Developer",
    startDate: "1/1/1",
    supervisor: "Alaa Drebate",
  },
  {
    address: "fixed address",
    duration: 12,
    endDate: "1/1/1",
    firstName: "Majd",
    generatedId: "1",
    hardSkills: ["Wen dev", "web design"],
    isEmployee: false,
    isIntern: true,
    kpi: 1,
    lastName: "al",
    memberId: "1cae77b0-96d0-449f-aaed-621d2f2d700e",
    projects: ["project 1", "project 2"],
    softSkills: ["Wen dev", "web design"],
    specification: "WEB Back End Developer",
    startDate: "1/1/1",
    supervisor: "Alaa Drebate",
  },
  {
    address: "fixed address",
    duration: 12,
    endDate: "1/1/1",
    firstName: "Majd",
    generatedId: "1",
    hardSkills: ["Wen dev", "web design"],
    isEmployee: false,
    isIntern: true,
    kpi: 1,
    lastName: "al",
    memberId: "1cae77b0-96d0-449f-aaed-621d2f2d700e",
    projects: ["project 1", "project 2"],
    softSkills: ["Wen dev", "web design"],
    specification: "WEB Back End Developer",
    startDate: "1/1/1",
    supervisor: "Alaa Drebate",
  },
  {
    address: "fixed address",
    duration: 12,
    endDate: "1/1/1",
    firstName: "Majd",
    generatedId: "1",
    hardSkills: ["Wen dev", "web design"],
    isEmployee: false,
    isIntern: true,
    kpi: 1,
    lastName: "al",
    memberId: "1cae77b0-96d0-449f-aaed-621d2f2d700e",
    projects: ["project 1", "project 2"],
    softSkills: ["Wen dev", "web design"],
    specification: "WEB Back End Developer",
    startDate: "1/1/1",
    supervisor: "Alaa Drebate",
  },
];

export const SetEmployeesReducer = (state = allEmployees,{ type, payload }) => {
  switch (type) {
    case employeesType.SET_EMPLOYEES:
      return [...payload];

    default:
      return state;
  }
};




