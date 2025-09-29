/** @format */
import { useContext, useEffect, useState } from "react";
import styles from "./Project.module.css";

import ProjectSvg from "./ProjectSvg";
import Upload from "./Upload";
import { Link, useNavigate } from "react-router-dom";
import Pricing from "./Pricing";
import Delivery from "./Delivery";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { userContext } from "../../../../Context";

export default function Projectbased({
  projectBased,
  setProjectBased,
  serviceType,
  Type,
}) {
  const [createService, setCreateService] = useState({
    service_name: "",
    description: "",
    service_type: serviceType,
    one_off_type: Type,
    // photoURL: "",
  });

  const [delivery_timeline, setDeliveryTime] = useState("");

  const [project_pricing, setPricingTime] = useState("");

  const details = { ...createService, delivery_timeline, project_pricing };

  function Details(e) {
    setCreateService((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const navigate = useNavigate();

  const [Image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleImage(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
      console.log("Selected file:", selectedFile);
      setTimeout(() => {
        toast.success("Please upload your image");
      }, 400);
    }
  }

  async function UploadImage() {
    if (!Image) return alert("Please select a file first");

    const formData = new FormData();
    formData.append("file", Image);
    formData.append("upload_preset", "TimeBased");
    formData.append("cloud_name", "dxyzeiigv");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxyzeiigv/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = res.data;
      setImageUrl(data.secure_url);
      setTimeBased({ photoURL: data.secure_url });
      console.log(timebased);
      toast.success("Image uploaded successfully!");

      console.log("Uploaded image URL:", data.secure_url);
    } catch (error) {
      console.error("Upload error:", error);
    }
  }

  function handlePricing(e) {
    setPricingTime(e.target.value);
  }

  function handleSubmit() {
    console.log(createService, project_pricing);

    const token = localStorage.getItem("Token");

    axios
      .post("https://api.luround.com/v1/services/create", details, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setProjectBased(details);
        console.log(res.data);
        toast.success("Project sucessfully added!");
        setTimeout(() => {
          navigate("/oneoff", { state: details });
        }, 2000);
      });
  }

  useEffect(() => {
    if (Object.keys(projectBased).length > 0) {
    }
  }, [projectBased]);

  const submitProject = Object.values(details).every((val) => {
    if (typeof val === "string") {
      return val.trim() !== "";
    }
    return val !== null && val !== undefined && val !== "";
  });

  return (
    <>
      <div className={styles.projectbasedcontainer}>
        <Link to='/oneoff'>
          <button className={styles.projectbasedback}>
            {" "}
            <svg
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 1L1 6L6 11'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span>Back</span>
          </button>{" "}
        </Link>

        <div className={styles.projectbasedgrid}>
          <div>
            <Upload
              Image={Image}
              handleImage={handleImage}
              UploadImage={UploadImage}
            />
          </div>

          <div className={styles.section}>
            <div className={styles.createservice}>
              <span>Create One-off service </span>
              <ProjectSvg />
            </div>
            <div className={styles.project}>
              <div className={styles.projectservice}>
                <span>Service name</span>
                <input
                  type='text'
                  name='service_name'
                  value={createService.service_name}
                  onChange={Details}
                  placeholder='e.g CV writing'
                />
              </div>

              <div className={styles.projectdescription}>
                <span>Description</span>
                <textarea
                  name='description'
                  value={createService.description}
                  onChange={Details}
                  maxLength={500}
                  rows={7}
                  cols={40}
                  placeholder='Write a brief descriptive summary of the service you provide'
                ></textarea>
              </div>

              <div className={styles.span}>
                {" "}
                <span>{createService.description.length}/500</span>
              </div>
            </div>

            <div className={styles.pricingproject}>
              <Pricing
                project_pricing={project_pricing}
                handlePricing={handlePricing}
              />
            </div>
            <div className={styles.deliverytime}>
              <Delivery setDeliveryTime={setDeliveryTime} />
            </div>

            <div className={styles.done}>
              <Link to='/oneoff'>
                <button className={styles.canceltime}>Cancel</button>
              </Link>
              <button
                className={styles.donetime}
                onClick={handleSubmit}
                disabled={!submitProject}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
