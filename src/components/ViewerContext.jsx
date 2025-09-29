/** @format */

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UserViewerContext = createContext({});
export const ViewerServiceContext = createContext({});
export const ViewerStoreContext = createContext({});

export default function ViewerContext({ children }) {
  const [userViewer, setUserViewer] = useState({});
  const [userViewerService, setUserViewerService] = useState({});
  const [userViewerStore, setUserViewerStore] = useState([]);
  //get profile
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const username = pathParts[2];

  let type = "one-off"; // default type
  const pathname = location.pathname.toLowerCase();
  if (pathname.includes("retainer")) type = "retainer";
  else if (pathname.includes("program")) type = "program";
  else if (pathname.includes("event")) type = "event";

  useEffect(() => {
    if (!username) return;

    //get profile
    axios
      .get(
        `https://api.luround.com/v1/profile/get-user-profile-link?url=https://luround.com/profile/${username}`
      )
      .then((res) => {
        console.log(res.data);
        setUserViewer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //get services
    axios
      .get(
        `https://api.luround.com/v1/services/get-user-services?url=https://luround.com/profile/${username}&service_type=${type}`
      )
      .then((res) => setUserViewerService(res.data))
      .catch(console.log);
  }, [username, type]);

  //get storefront

  useEffect(() => {
    if (!userViewer._id) return;
    console.log(userViewer._id);
    axios
      .get(
        `https://api.luround.com/v1/storefront/user-products-web?userId=${userViewer._id}`
      )
      .then((res) => {
        console.log(res.data);
        setUserViewerStore(res.data);
      })
      .catch(console.log);
  }, [userViewer._id]);

  return (
    <UserViewerContext.Provider value={[userViewer, setUserViewer]}>
      <ViewerServiceContext.Provider
        value={[userViewerService, setUserViewerService]}
      >
        <ViewerStoreContext.Provider
          value={[userViewerStore, setUserViewerStore]}
        >
          {children}
        </ViewerStoreContext.Provider>
      </ViewerServiceContext.Provider>
    </UserViewerContext.Provider>
  );
}
