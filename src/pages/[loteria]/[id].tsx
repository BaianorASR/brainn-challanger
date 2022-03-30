import { useRouter } from 'next/router';
import React, { memo } from 'react';

import type { NextPage } from 'next';

type ConcursoProps = {};

const Concurso: NextPage<ConcursoProps> = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.id}</h1>
    </div>
  );
};

export default memo(Concurso);
