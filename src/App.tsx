/// <reference types="vite-plugin-svgr/client" />
import { MainLayout } from './layouts/MainLayout.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = `Map Viewer`;
  }, []);
  return (
    <MainLayout>
      <MainPage />
    </MainLayout>
  );
}

export default App;
