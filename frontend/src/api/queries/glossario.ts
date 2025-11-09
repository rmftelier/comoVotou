import { comoVotouApi } from "../api";
import { QueryKey, useQuery, UseQueryResult } from "@tanstack/react-query";

//Interfaces e Tipos:-----------------------------------------------------------

export interface ITermo {
  id: string,
  sigla: string,
  termo: string,
  descricao: string,
  url: string
}

//Axios Requests:---------------------------------------------------------------

export const getAllTermos = (): Promise<ITermo[]> =>
  comoVotouApi.get<ITermo[]>(`glossario`).then((res) => res.data);


//Querys Keys:------------------------------------------------------------------
export const getAllTermosQueryKey: QueryKey = ['/glossario'];

//Querys:-----------------------------------------------------------------------
export const useGetAllTermos = (): UseQueryResult<ITermo[]> =>
  useQuery<ITermo[]>({
    queryKey: getAllTermosQueryKey,
    queryFn: getAllTermos,
    staleTime: Infinity
  });

