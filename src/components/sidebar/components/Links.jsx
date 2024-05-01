import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./../../../redux/slices/auth";

export function SidebarLinks(props) {
  const { routes } = props;

  let location = useLocation();
  const isAuth = useSelector(selectIsAuth);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if(isAuth) { 
      const endIndex = isAuth ? routes.length - 1 : routes.length;
      const linkArrayAuth = routes.slice(0, endIndex);
      setLinks(linkArrayAuth);
    } 
    if(!isAuth) {
      const linkArrayAuth = [routes[0], routes[routes.length - 1]]
      setLinks(linkArrayAuth);
    }
  }, [isAuth, routes]);

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {

    return links.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <Link key={index} to={route.layout + "/" + route.path}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li className="my-[3px] flex cursor-pointer items-center px-8" key={index}>
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };

  return createLinks(routes);
}

export default SidebarLinks;
