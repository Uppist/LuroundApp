/* @format */
import "./style.css";
import { useState } from "react";
import Sidebar from "./Profile/SideBar/LuroundSidebar";
import Bookings from "./Bookings/Bookings";
import Event from "./Services/Event/Event";
import One from "./Services/OneOff/OneoffService/OneOff";
import Program from "./Services/Program/Program";
import Retainer from "./Services/Retainer/Retainer";
import AboutDetails from "./Profile/ClientProfile/Profile/AboutDetails";
import Search from "./Profile/NavBar/LuroundSearch";
import Profile from "./Profile/ClientProfile/Profile/Profile";
import EditProfile from "./Profile/EditProfile/EditProfile";
import Transaction from "./Transactions/TransactionPage";
import axios from "axios";
import React, { useEffect } from "react";
import Login from "./Login/Login";
import Support from "./Support/Support";
import Contact from "./Contact/Contact";
import Financials from "./Financials/Financials";
import Quotes from "./Financials/Quotes/Quotes";
import Invoice from "./Financials/Invioces/Invoice";
import Receipt from "./Financials/Receipts/Receipt";
import View from "./Financials/Quotes/View/View";
import Edit from "./Financials/Quotes/Edit/Edit";
import Convert from "./Financials/Quotes/Convert/Convert";
import Resend from "./Financials/Quotes/Resend/Resend";
import Settings from "./Profile/Settings/Settings";
import FirstPage from "./StoreFront/FirstPage";
import SecondPage from "./StoreFront/SecondPage";
import DetailPopup from "./StoreFront/DetailPopup";
export default function LuroundApp() {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [visible, setVisible] = useState("fade-in");
  const [Name, setName] = useState("");
  const [Company, setComapny] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [url, seturl] = useState("");
  const [logo, setlogo] = useState("");

  const [About, setAbout] = useState("");
  const [socialLink, setsocialLink] = useState([]);
  const [isOccupation, setIsOccupation] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [logindetail, setLogindetail] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);
  const [isValue, setIsValue] = useState({
    // upload2: "",
    firstName: "",
    lastName: "",
    occupation: "",
    company: "",
    logo_url: "",
  });

  //change clicks
  const handleOneOffClick = (container) => {
    setVisible("fade-out");
    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
    }, 200);
  };

  //login details
  function LoginDetail(e) {
    setLogindetail({ ...logindetail, [e.target.name]: e.target.value });
  }

  //login email and password
  const data = { email: logindetail.email, password: logindetail.password };

  //login submit button
  function Submit(e) {
    e.preventDefault();
    // setLogin(false);

    // // Login function
    axios
      .post(
        "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(data),
        }
      )
      .then((res) => {
        console.log("response:", res);

        const token = res.data.accessToken;

        localStorage.setItem("Token", token);
        console.log("Logged in token:", token);
        alert("Login");
        setLogin(true);

        axios
          .get(
            "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/profile/get",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                email: data.email, // Pass email as a query parameter
              },
            }
          )
          .then((response) => {
            console.log("Full API Response:", response.data);

            setName(response.data.displayName);
            seturl(response.data.luround_url);
            setComapny(response.data.company);
            setlogo(response.data.logo_url);
            setAbout(response.data.about);
            setsocialLink(response.data.media_links);
            setIsOccupation(response.data.occupation);
            setIsEmail(response.data.email);
            setPhotoUrl(response.data.photoUrl);
          });
      })
      .catch((err) => {
        console.log("Error", err.status);
        console.log("StatusText", err.statusText);
        alert("Unauthorized");
        setLogin(false);
      });

    // alert("Wrong details");
    setLogin(false);
    //photo update
  }

  const token = localStorage.getItem("Token");

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/profile/get",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            email: data.email, // Pass email as a query parameter
          },
        }
      );
      console.log("Full API Response:", response.data);

      setName(response.data.displayName);
      seturl(response.data.luround_url);
      setComapny(response.data.company);
      setlogo(response.data.logo_url);
      setAbout(response.data.about);
      setsocialLink(response.data.media_links);
      setIsOccupation(response.data.occupation);
      setIsEmail(response.data.email);
      setPhotoUrl(response.data.photoUrl);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else {
        console.error("Error:", error);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [refreshKey]);

  //filter social media links
  useEffect(() => {
    if (socialLink.length > 0) {
      const uniqueSocialLinks = socialLink.reduce((acc, curr) => {
        const existingIndex = acc.findIndex(
          (link) => link.name.toLowerCase() === curr.name.toLowerCase()
        );

        // If a duplicate is found, replace the existing one
        if (existingIndex !== -1) {
          acc[existingIndex] = curr; // Keep the last occurrence
        } else {
          acc.push(curr); // Otherwise, add the new link
        }
        return acc;
      }, []);

      // Update state if there are changes
      if (uniqueSocialLinks.length !== socialLink.length) {
        setsocialLink(uniqueSocialLinks);
      }
    }
  }, [socialLink]);

  function handleEditProfile(e) {
    setIsValue({ ...isValue, [e.target.name]: e.target.value });
  }

  //profile-details function
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

  //image change and logo upload

  const [image, setImage] = useState("");
  const [logourl, setLogoUrl] = useState("");

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
    <div>
      {!login ? (
        <Login
          logindetail={logindetail}
          Submit={Submit}
          LoginDetail={LoginDetail}
        />
      ) : (
        <div className='grid-container'>
          {/*Sidebar container */}
          <Sidebar onComponentSwitch={handleOneOffClick} />
          {/*Profile container */}
          <div className='profiledashboard'>
            <Search
              onComponentSwitch={handleOneOffClick}
              Name={Name}
              email={isEmail}
              photoUrl={photoUrl}
              logindetail={logindetail}
              Submit={Submit}
              LoginDetail={LoginDetail}
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
                    Name={Name}
                    company={Company}
                    url={url}
                    logo={logo}
                    Occupation={isOccupation}
                    handleEditProfile={handleEditProfile}
                    handleSubmit={handleSubmit}
                    photoUrl={photoUrl}
                  />
                  <AboutDetails about={About} socialLink={socialLink} />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
