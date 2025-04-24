import { FormatoData } from "../types/FormatoData.js";

export function formatarMoeda(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatarData(data: Date, formato: FormatoData=FormatoData.PADRAO): string {
    if( formato==FormatoData.DIA_SEMANA_DIA_MES_ANO){
        return data.toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            weekday: "long",
        });
    }
    else if (formato==FormatoData.DIA_MES){
        return data.toLocaleDateString("pt-BR", {
            month: "2-digit",
            day: "2-digit",
        });
    }
    return data.toLocaleDateString("pt-BR");

}
