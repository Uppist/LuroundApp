/** @format */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Settings from "./components/Profile/Settings/Settings";
import One from "./components/Services/OneOff/OneoffService/OneOff";
import Retainer from "./components/Services/Retainer/Retainer";
import Program from "./components/Services/Program/Program";
import Bookings from "./components/Bookings/Bookings";
import FirstPage from "./components/StoreFront/FirstPage";
import SecondPage from "./components/StoreFront/SecondPage";
import DetailPopup from "./components/StoreFront/DetailPopup";
import Transaction from "./components/Transactions/TransactionPage";
import Support from "./components/Support/Support";
import Contact from "./components/Contact/Contact";
import Financials from "./components/Financials/Financials";
import Quotes from "./components/Financials/Quotes/Quotes";
import Edit from "./components/StoreFront/Edit";
import Invoice from "./components/Financials/Invioces/Invoice";
import Receipt from "./components/Financials/Receipts/Receipt";
import Profile from "./components/Profile/ClientProfile/Profile/Profile";
import AboutDetails from "./components/Profile/ClientProfile/Profile/AboutDetails";
import Sidebar from "./components/Profile/SideBar/LuroundSidebar";
import Search from "./components/Profile/NavBar/LuroundSearch";
import Event from "./components/Services/Event/Event";
import EditProfile from "./components/Profile/EditProfile/EditProfile";

export default function MainProfile() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [photoUrl, setPhotoUrl] = useState("");
  const [image, setImage] = useState("");
  const [logourl, setLogoUrl] = useState("");
  const [logo, setlogo] = useState("");

  const [activeComponent, setActiveComponent] = useState("profile");
  const [visible, setVisible] = useState("fade-in");

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
    }, 200);
  };

  function handleEditProfile(e) {
    setIsValue({ ...isValue, [e.target.name]: e.target.value });
  }
  const location = useLocation();
  const userData = location.state || {};
  console.log("User Data:", userData);

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
    <div className='grid-container'>
      {/*Sidebar container */}
      <Sidebar onComponentSwitch={handleOneOffClick} />
      {/*Profile container */}
      <div className='profiledashboard'>
        <Search
          onComponentSwitch={handleOneOffClick}
          Name={userData.displayName}
          email={userData.email}
          photoUrl={userData.photoUrl}
          // logindetail={logindetail}
          // Submit={Submit}
          // LoginDetail={LoginDetail}
          // photoUrlSmaller={photoUrlSmaller}
        />
        <div className={`profile-details ${visible}`}>
          {activeComponent === "editprofile" && (
            <EditProfile
              handleEditProfile={handleEditProfile}
              handleSubmit={handleSubmit}
              isValue={isValue}
              setIsValue={setIsValue}
              setRefreshKey={setRefreshKey}
              handleChange={handleChange}
              image={image}
              logourl={logourl}
              LogoUpload={LogoUpload}
              fileSizeInMB={fileSizeInMB}
            />
          )}
          {activeComponent === "settings" && <Settings />}
          {activeComponent === "oneoff" && <One />}
          {activeComponent === "retainer" && <Retainer />}
          {activeComponent === "program" && <Program />}
          {activeComponent === "event" && <Event />}
          {activeComponent === "bookings" && <Bookings />}
          {activeComponent === "storefront" && (
            <FirstPage onComponentSwitch={handleOneOffClick} />
          )}
          {activeComponent === "secondpage" && (
            <SecondPage onComponentSwitch={handleOneOffClick} />
          )}

          {activeComponent === "detail" && <DetailPopup />}
          {activeComponent === "transaction" && <Transaction />}
          {activeComponent === "support" && <Support />}
          {activeComponent === "contact" && <Contact />}
          {activeComponent === "financial" && (
            <Financials onComponentSwitch={handleOneOffClick} />
          )}
          {activeComponent === "quotes" && (
            <Quotes onComponentSwitch={handleOneOffClick} />
          )}
          {/* {activeComponent === "view" && <View />} */}
          {activeComponent === "edit" && (
            <Edit onComponentSwitch={handleOneOffClick} />
          )}

          {activeComponent === "invoices" && (
            <Invoice onComponentSwitch={handleOneOffClick} />
          )}
          {activeComponent === "receipts" && (
            <Receipt onComponentSwitch={handleOneOffClick} />
          )}

          {activeComponent === "profile" && (
            <>
              <Profile
                refreshKey={refreshKey}
                Name={userData.name}
                company={userData.company}
                url={userData.luround_url}
                logo={userData.logo_url}
                Occupation={userData.occupation}
                // handleEditProfile={handleEditProfile}
                // handleSubmit={handleSubmit}
                photoUrl={userData.photoUrl}
              />
              <AboutDetails
                about={userData.about}
                socialLink={userData.media_links}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
