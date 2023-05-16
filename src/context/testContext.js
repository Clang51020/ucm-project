import React, { useState, createContext } from 'react';

export const context = createContext();

export const TestContext = (props) => {
  const [usersList, setUsersList] = useState([
    {
      email: "clang@chrislang.tech",
      firstName: "Chris",
      lastName: "Lang",
      mainOffice: "Admissions",
      role: "Admin",
      officePhone: "660-543-4673",
      workCell: "816-401-4338",
      position: "AVP Admissions"
    },
    {
      email: "cshannon@ucmo.edu",
      firstName: "Christine",
      lastName: "Shannon",
      mainOffice: "Admissions",
      role: "User",
      officePhone: "660-543-4290",
      workCell: "816-401-4338",
      position: "Admissions Counselor"
    },
    {
      email: "marcuson@ucmo.edu",
      firstName: "Jared",
      lastName: "Marcuson",
      mainOffice: "Admissions",
      role: "Admin",
      officePhone: "660-543-4290",
      workCell: "816-401-4338",
      position: "Assistant Director - Transfer Recruitment"
    },
    {
      email: "cswoboda@ucmo.edu",
      firstName: "Courtney",
      lastName: "Swoboda",
      mainOffice: "Mil Vet Center",
      role: "User",
      officePhone: "660-543-8848",
      workCell: "816-401-4338",
      position: "Director - Military & Veteran Services"
    }
  ]);

  function handleSignIn() {
    return "Signed In";
  }

  const exportValues = { usersList, setUsersList, handleSignIn };

  return (
    <context.Provider value={exportValues}>
      {props.children}
    </context.Provider>
  );
};