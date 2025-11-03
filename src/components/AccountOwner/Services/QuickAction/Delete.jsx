/** @format */

import styles from "./styles.module.css";
import time from "../../../elements/services/timebased.svg";
import axios from "axios";
import {
  ServiceContext,
  StorefrontContext,
  userContext,
} from "../../../Context";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
/** @format */
export default function Delete({
  data,
  backdelete,
  showContainer,
  dataretainer,
  Close,
}) {
  const [userService, setUserService] = useContext(ServiceContext);

  const [storeFront, setStoreFront] = useContext(StorefrontContext);

  const navigate = useNavigate();
  const location = useLocation();

  const store = location.pathname.includes("storefront");

  function handleDelete() {
    const token = localStorage.getItem("Token");
    axios
      .delete(
        `https://api.luround.com/v1/services/delete?serviceId=${data._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log("Data deleted");
        toast.success("Service Deleted");

        setUserService((prev) => prev.filter((item) => item._id !== data._id));
        setTimeout(() => {
          if (location.pathname.includes("one-off")) {
            navigate("/oneoff");
          } else if (location.pathname.includes("retainer")) {
            navigate("/retainer");
          } else if (location.pathname.includes("program")) {
            navigate("/program");
          } else if (location.pathname.includes("event")) {
            navigate("/event");
          }
        }, 3000);
      });

    if (store) {
      axios
        .delete(
          `https://api.luround.com/v1/storefront/delete-product?productId=${data._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log("Product deleted");
          toast.success("Product Deleted");
          setStoreFront((prev) => prev.filter((item) => item._id !== data._id));
          setTimeout(() => {
            navigate("/storefront");
          }, 1000);
          Close();
        })
        .catch((err) => {
          // toast.error("Failed to delete product");
          console.log(err);
        });
    }
  }

  return (
    <div>
      <div className='popupcancel'>
        <div className='overlay' onClick={Close}></div>
        <div className={styles.body}>
          <div>
            <div className={styles.cancelbooking}>
              <label>Delete {store ? <>Product</> : <>Service</>} </label>
              <svg
                onClick={Close}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                  stroke='currentColor'
                  strokeOpacity='0.8'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            {/* <hr /> */}
          </div>

          {store ? (
            <div className={styles.container}>
              {/* <div className={styles.titleservice}>
                <span className={styles.title}>{data.product_name}</span>
              </div> */}
              <p className={styles.paragraph}>
                Are you sure you want to delete this product?
              </p>
            </div>
          ) : showContainer ? (
            <div className={styles.container}>
              <div className={styles.titleservice}>
                <span className={styles.title}>{data.service_name}</span>
                <div>
                  <span className={styles.type}>
                    service type: {data.service_type}{" "}
                    {data?.one_off_type === "time-based" && (
                      <img src={time} alt='' />
                    )}
                  </span>
                </div>
              </div>
              <p className={styles.paragraph}>
                Are you sure you want to delete this service?
              </p>
            </div>
          ) : (
            <div className='cancel-container'>
              <div className='titleservice cancel-title'>
                <span className='title title-service'>
                  {dataretainer.Title}
                </span>
                <div className='service-one'>
                  <span className='servicetype'>
                    {dataretainer.servicetype}
                  </span>
                  <span className='oneofftext'>{dataretainer.oneoff}</span>
                </div>
              </div>
              <p className='title-p'>
                Are you sure you want to delete this service?
              </p>
            </div>
          )}

          <div className={styles.docancel}>
            <button className={styles.cancel} onClick={Close}>
              Cancel
            </button>
            <button className={styles.delete} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
}
