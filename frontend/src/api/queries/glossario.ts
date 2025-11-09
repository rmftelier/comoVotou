import { comoVotouApi } from "../api";
import { QueryKey, useQuery, UseQueryResult } from "@tanstack/react-query";
import ApiError from "../apiError";

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
export const useGetAllTermos = (): UseQueryResult<ITermo[], ApiError> =>
  useQuery<ITermo[], ApiError>({
    queryKey: getAllTermosQueryKey,
    queryFn: getAllTermos,
    staleTime: Infinity
});

