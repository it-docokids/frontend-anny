export interface Route {
  name: string;
  to: any;
}

const HEADERLINKS: Array<Route> = [
  {
    name: "Inicio",
    to: "/",
  },
  {
    name: "¿Como funciona?",
    to: {
      pathname: "/como-funciona",
    },
  },
  {
    name: "Blog",
    to: {
      pathname: "/blog",
    },
  },
  {
    name: "Contacto",
    to: {
      pathname: "/contacto",
    },
  },
];

export default HEADERLINKS;
