export interface RouteProps {
  name: string;
  path: string;
  icon: React.ReactNode;
  element?: React.ReactNode;
  layout?: React.FC;
  routes?: SubRouteProps[];
  permissions?: string[];
}

interface BaseRoute {
  path: string;
  element: React.ReactNode;
  layout?: React.FC;
  permissions?: string[];
  hideDrawer?: boolean;
  modals?: ModalRoute[];
}

interface ModalRoute {
  path: string;
  element: React.ReactNode;
  permissions?: string[];
}

export interface SubRouteProps {
  name: string;
  path: string;
  element?: React.ReactNode;
  layout?: React.FC;
  routes?: BaseRoute[];
  permissions?: string[];
}

const routes: RouteProps[] = [
  
  
  
];

export default routes;
