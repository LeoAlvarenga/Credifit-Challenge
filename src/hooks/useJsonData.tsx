import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { IUsers, ICompanies } from "../models/interfaces";

interface IJsonDataContext {
  users: IUsers[];
  renderUsers: IUsers[];
  setRenderUsers(value: IUsers[]): void;
  companies: ICompanies[];
  checkedIdList: string[];
  handleCheck(value: string): void;
  handleConfirm(value: string): void;
  option: string;
  setOption(value: string): void;
  modalVisibility: boolean;
  setModalVisibility(value: boolean): void;
}

const JsonDataContext = createContext<IJsonDataContext>({} as IJsonDataContext);

const JsonDataProvider: React.FC = ({ children }) => {
  const [usersData, setUsersData] = useState<IUsers[]>([]);
  const [users, setUsers] = useState<IUsers[]>([]);
  const [renderUsers, setRenderUsers] = useState<IUsers[]>([]);
  const [companies, setCompanies] = useState<ICompanies[]>([]);
  const [checkedIdList, setCheckedIdList] = useState<string[]>([]);

  const [option, setOption] = useState<string>("");
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  useEffect(() => {
    fetch("./users.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const dataArr: IUsers[] = res.data;
        dataArr.map((user) => (user.status = null));
        setUsersData(res.data);
      });

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
        (user) => user.companyId === company?.id && user.status === null
      );

      setUsers(usersArr);
    }
  }, [usersData, companies]);

  const handleCheck = useCallback(
    (userId: string) => {
      if (checkedIdList.find((id) => id === userId)) {
        setCheckedIdList((state) => state.filter((id) => id !== userId));
      } else {
        setCheckedIdList((state) => [...state, userId]);
      }

      console.log(users.find((user) => user.id === userId));
    },
    [checkedIdList, setCheckedIdList]
  );

  const handleConfirm = useCallback(
    (status: string) => {
      checkedIdList.forEach((id) => {
        setUsersData((state) =>
          state.map((user) => {
            if (user.id === id) {
              user.status = status;
            }
            return user;
          })
        );
      });
    },
    [checkedIdList, setUsersData]
  );

  return (
    <JsonDataContext.Provider
      value={{
        companies,
        users,
        renderUsers,
        setRenderUsers,
        checkedIdList,
        handleCheck,
        handleConfirm,
        modalVisibility,
        option,
        setModalVisibility,
        setOption,
        
      }}
    >
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
