import { useRoutes } from 'react-router-dom';
import routes from './routes'; 
import anotherRoutes from './routes/anotherRoutes';

function AppRoutes() {
  const element = useRoutes([...routes, ...anotherRoutes]);
  return element;
}

export default AppRoutes;
 