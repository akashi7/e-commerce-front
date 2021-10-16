import { useEffect } from 'react';

export const NotFound = () => {

  useEffect(() => {
    document.title = "Page not found";
  }, []);
  return (
    <div style={{ display: 'flex', justifyContent: "center" }}>
      <h1>404  Page not found!</h1>
    </div>
  );
};
