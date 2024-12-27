import { Route, Routes } from 'react-router-dom';
import { useRoutePaths } from '@/hooks/useRoutePaths';
import { Purchases } from '@/components/Purchases';


function Router() {
  const { ROOT_PATH, PURCHASES_PATH } = useRoutePaths();
  return (
    <Routes>
      <Route path={PURCHASES_PATH} element={<Purchases />} />
    </Routes>
  );
}

export default Router;
