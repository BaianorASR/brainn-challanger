import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { memo } from 'react';

import useFetch from '../shared/hooks/ useFetch';

import type { NextPage } from 'next';

type LoteriasData = {
  id: number;
  nome: string;
};

const Home: NextPage = (props) => {
  const router = useRouter();
  const { isError, isLoading, data } = useFetch<LoteriasData[]>('loterias');

  const handleSelectOptions = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    router.push({
      href: '/[loteria]/[id]',
      pathname: '/[loteria]/[id]',
      query: { loteria: data && data[+value].nome, id: value },
    });
  };

  if (isError) return <h1>Ops! Ocorreu um error</h1>;

  if (isLoading) return <h1>Carregando...</h1>;

  return (
    <div>
      <select onChange={handleSelectOptions} name="loterias">
        {data?.map((each) => (
          <option key={each.id} value={each.id}>
            {each.nome}
          </option>
        ))}
      </select>
      <h1>Bem Vindo ao Desafio Brainn</h1>
    </div>
  );
};

export default memo(Home);
