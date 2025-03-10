/* @format */
import "./style.css";
import { useState } from "react";

import axios from "axios";
import React, { useEffect } from "react";
import Login from "./Login/Login/Login";

import MainProfile from "../MainProfile";
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
          setName={setName}
          setIsEmail={setIsEmail}
          setImage={setImage}
          setComapny={setComapny}
          seturl={seturl}
          setAbout={setAbout}
          setLogoUrl={setLogoUrl}
          setIsOccupation={setIsOccupation}
          setPhotoUrl={setPhotoUrl}
          setsocialLink={setsocialLink}
          setLogin={setLogin}
        />
      ) : (
        <MainProfile
          handleChange={handleChange}
          handleEditProfile={handleEditProfile}
          handleOneOffClick={handleOneOffClick}
          handleSubmit={handleSubmit}
          Submit={Submit}
          Name={Name}
          isEmail={isEmail}
          photoUrl={photoUrl}
          logindetail={logindetail}
          LoginDetail={LoginDetail}
          isValue={isValue}
          setIsValue={setIsValue}
          image={image}
          refreshKey={refreshKey}
          logourl={logourl}
          LogoUpload={LogoUpload}
          fileSizeInMB={fileSizeInMB}
          socialLink={socialLink}
          About={About}
          Company={Company}
          isOccupation={isOccupation}
          visible={visible}
          activeComponent={activeComponent}
          setRefreshKey={setRefreshKey}
          url={url}
          logo={logo}
        />
      )}
    </div>
  );
}
