/** @format */

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Profile/SideBar/LuroundSidebar";
import Search from "./components/Profile/NavBar/LuroundSearch";
import Navbar from "./components/Profile/NavBar/LuroundSearch";

import "./style.css";
import Layout from "./Layout";
import Settings from "./components/Profile/Settings/Settings";
import Notification from "./components/Profile/NavBar/Notification";
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import One from "./components/Services/OneOff/OneoffService/OneOff";
import Retainer from "./components/Services/Retainer/Retainer";
import Program from "./components/Services/Program/Program";
import Bookings from "./components/Bookings/Bookings";
import FirstPage from "./components/StoreFront/FirstPage";
import SecondPage from "./components/StoreFront/SecondPage";
import Support from "./components/Support/Support";
import Contact from "./components/Contact/Contact";
import Financials from "./components/Financials/Financials";
import Quotes from "./components/Financials/Quotes/Quotes";
import Profile from "./components/Profile/ClientProfile/Profile/Profile";

export default function MainProfile() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [photoUrl, setPhotoUrl] = useState("");
  const [image, setImage] = useState("");
  const [logourl, setLogoUrl] = useState("");
  const [logo, setlogo] = useState("");

  const [activeComponent, setActiveComponent] = useState("profile");
  const [visible, setVisible] = useState("fade-in");
  const navigate = useNavigate();

  const [isValue, setIsValue] = useState({
    // upload2: "",
    firstName: "",
    lastName: "",
    occupation: "",
    company: "",
    logo_url: "",
  });

  const handleOneOffClick = (container) => {
    setVisible("fade-out");
    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
      navigate(`/Profile-page/${container}`);
    }, 200);
  };

  function handleEditProfile(e) {
    setIsValue({ ...isValue, [e.target.name]: e.target.value });
  }
  const location = useLocation();
  const [userData, setUserData] = useState(
    location.state || JSON.parse(localStorage.getItem("userData")) || {}
  );

  useEffect(() => {
    if (location.state) {
      setUserData(location.state);
      localStorage.setItem("userData", JSON.stringify(location.state));
    }
  }, [location.state]);

  async function handleSubmit(e) {
    e.preventDefault();

    // Retrieve token from localStorage
    const local = localStorage.getItem("Token");

    console.log("Token being sent:", local);

    const request = await axios.put(
      "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/profile/personal-details/update",
      { ...isValue, logo_url: logo },
      {
        headers: {
          Authorization: `Bearer ${local}`,
          "Content-Type": "application/json",
        },
      }
    );
    // console.log("value", isValue);
    console.log("Update successful:", request);
    console.log("logo_url", logourl);

    setIsValue({
      // upload2: "",
      firstName: "",
      lastName: "",
      company: "",
      occupation: "",
      logo_url: "",
    });

    alert("Updated");

    setPhotoUrl("");

    setRefreshKey((prevKey) => prevKey + 1);
  }

  async function handleChange(e) {
    const files = e.target.files[0];
    // console.log(e.target.files);
    console.log(files);
    setImage(files);

    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", "TestApi");
    formData.append("cloud_name", "dgwp5nnxb");
    console.log("formdata", formData);

    await axios
      .post("https://api.cloudinary.com/v1_1/dgwp5nnxb/image/upload", formData)
      .then((res) => {
        const ImageMedium = res.data.url.replace(
          "/upload/",
          "/upload/w_380,h_232,c_fill/"
        );

        console.log("Image URL to update:", ImageMedium);

        setPhotoUrl(ImageMedium);

        const local = localStorage.getItem("Token");
        axios
          .put(
            "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/profile/photo/update",
            { photoUrl: ImageMedium },
            {
              headers: {
                Authorization: `Bearer ${local}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log("put response", res.data);
            setRefreshKey((prevKey) => prevKey + 1);
          });
      });
  }

  useEffect(() => {
    console.log("photoUrl state updated:", photoUrl);
  }, [photoUrl, refreshKey]);

  async function LogoUpload(e) {
    const logo = e.target.files[0];
    // console.log(e.target.files);
    console.log(logo);
    setLogoUrl(logo);

    const logoData = new FormData();
    logoData.append("file", logo);
    logoData.append("upload_preset", "TestApi");
    logoData.append("cloud_name", "dgwp5nnxb");
    console.log("formdata", logoData);

    await axios
      .post("https://api.cloudinary.com/v1_1/dgwp5nnxb/image/upload", logoData)
      .then((res) => {
        const logoImage = res.data.url.replace("/upload/", "/upload/c_fill/");

        console.log("logo URL to update:", logoImage);

        setlogo(logoImage);
      });
  }

  useEffect(() => {
    console.log("logourl state updated:", logo);
  }, [logo, refreshKey]);
  const fileSizeInMB = (logourl.size / 1048576).toFixed(2);

  return (
    <>
      <div className='grid-container'>
        {/* Sidebar should always be present */}
        <Sidebar onComponentSwitch={handleOneOffClick} />

        <div className='profiledashboard'>
          {/* Navbar should always be present */}
          <Search
            onComponentSwitch={handleOneOffClick}
            Name={userData.displayName}
            email={userData.email}
            photoUrl={userData.photoUrl}
          />

          <Routes>
            {/* Remove this line if settings is rendered via activeComponent */}
            {/* <Route path='settings' element={<Settings />} /> */}
            {/* <Route path='/notifications' element={<Notification />} /> */}
            {/* <Route path='/editprofile' element={<EditProfile />} /> */}
            {/* <Route path='/oneoff' element={<One />} /> */}
            {/* <Route path='/retainer' element={<Retainer />} /> */}
            {/* <Route path='/program' element={<Program />} /> */}
            {/* <Route path='/bookings' element={<Bookings />} /> */}
            {/* <Route path='/storefront' element={<FirstPage />} /> */}
            {/* <Route path='/secondpage' element={<SecondPage />} /> */}
            {/* <Route path='/support' element={<Support />} /> */}
            {/* <Route path='/contact' element={<Contact />} /> */}
            {/* <Route path='/financial' element={<Financials />} /> */}
            {/* <Route path='/quotes' element={<Quotes />} /> */}
          </Routes>
          {/* Render dynamic content inside Layout */}
          <Layout
            visible={visible}
            activeComponent={activeComponent}
            refreshKey={refreshKey}
            setRefreshKey={setRefreshKey} // Ensure this is passed
            handleEditProfile={handleEditProfile}
            handleSubmit={handleSubmit}
            isValue={isValue}
            setIsValue={setIsValue}
            handleChange={handleChange}
            image={image}
            logourl={logourl}
            LogoUpload={LogoUpload}
            fileSizeInMB={fileSizeInMB}
            Name={userData.name}
            email={userData.email}
            photoUrl={userData.photoUrl}
            logo={userData.logo}
            url={userData.url}
            occupation={userData.occupation}
            company={userData.company}
            about={userData.about}
            handleOneOffClick={handleOneOffClick}
          />
        </div>
      </div>
    </>
  );
}
