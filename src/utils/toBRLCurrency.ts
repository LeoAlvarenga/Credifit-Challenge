export const toBRLCurrency = (value: string): string =>
  Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
