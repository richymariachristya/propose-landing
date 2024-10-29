import React from 'react';
import { useRouter } from 'next/router';
import { useContextData } from '@/service/dataContext';

export default function CongratsPage() {
  const router = useRouter();
  const { values } = useContextData();
  const navigateBack = () => {
    router.push(`/proposal/${values.camp}?token=${values.token}`);
  };

  return (
    <div>
      <h1>Congrats Page</h1>
      <p>Your proposal was successful!</p>
      <button onClick={navigateBack}>Back to Home Page</button>
    </div>
  );
}
