import axios, { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import useSWR, { SWRResponse } from 'swr';

import Loteria from '../services/api';

export default function useFetch<Data = unknown, Error = unknown>(url: string) {
  const fetcher = (path: string): Promise<Data> =>
    Loteria.get(path).then((res) => res.data);

  const { data, error } = useSWR<Data, Error>(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
