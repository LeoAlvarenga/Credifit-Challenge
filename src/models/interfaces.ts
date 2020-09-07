export interface IUsers {
  id: string;
  cpf: string;
  email: string;
  name: string;
  salary: string;
  value: string;
  companyId: string;
}

export interface ICompanies {
  id: string;
  fantasyName: string;
  selected: boolean;
}