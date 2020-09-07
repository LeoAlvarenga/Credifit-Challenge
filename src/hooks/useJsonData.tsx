import React, { createContext, useContext, useState, useEffect } from "react";
import { IUsers, ICompanies } from "../models/interfaces";

interface IJsonDataContext {
  users: IUsers[];
  renderUsers: IUsers[];
  setRenderUsers(value: IUsers[]): void;
  companies: ICompanies[];
}


const JsonDataContext = createContext<IJsonDataContext>({} as IJsonDataContext);

const JsonDataProvider: React.FC = ({ children }) => {
  const [usersData, setUsersData] = useState<IUsers[]>([]);
  const [users, setUsers] = useState<IUsers[]>([]);
  const [renderUsers, setRenderUsers] = useState<IUsers[]>([]);
  const [companies, setCompanies] = useState<ICompanies[]>([]);

  useEffect(() => {
    fetch("./users.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setUsersData(res.data));

    fetch("./companies.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setCompanies(res.data));
  }, []);

  useEffect(() => {
    if (usersData.length > 0 && companies.length > 0) {
      const company = companies.find((company) => company.selected === true);
      const usersArr = usersData.filter(
        (user) => user.companyId === company?.id
      );

      setUsers(usersArr);
    }
  }, [usersData, companies]);
  return (
    <JsonDataContext.Provider value={{ companies, users, renderUsers, setRenderUsers }}>
      {children}
    </JsonDataContext.Provider>
  );
};

const useJsonData = (): IJsonDataContext => {
  const context = useContext(JsonDataContext);

  if (!context) {
    throw new Error("useJsonData must be used within a JsonDataProvider");
  }

  return context;
};

export { JsonDataProvider, useJsonData };
