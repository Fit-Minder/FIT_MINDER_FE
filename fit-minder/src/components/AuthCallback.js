import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AuthCallback = () => {
  const query = useQuery();
  const code = query.get('code');

  useEffect(() => {
    if (code) {
      fetch('/api/auth/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.token);
      })
      .catch(error => {
        console.error('Error during authentication:', error);
      });
    }
  }, [code]);

  return <div>Loading...</div>;
};

export default AuthCallback;