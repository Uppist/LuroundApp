/** @format */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles2 from "../../../AccountOwner/Services/Retainer/Retainer.module.css";
import image from "../../../elements/gallery.png";

import styles from "../Program/programview.module.css";
import ProgramRegister from "./ProgramRegister"; // Adjust the import path based on your file structure
import { ServiceContext } from "../../../Context";
import EmptyState from "../../../AccountOwner/Services/Program/EmptyState";
import VirtualContainer from "../../../AccountOwner/Services/OneOff/OneoffService/VirtualContainer";
import { ViewerServiceContext } from "../../../ViewerContext";

export default function ProgramView() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [selectedOption, setSelectedOption] = useState("virtual"); // Default to 'virtual'

  const handleRegisterClick = () => {
    setIsRegistered(true);
  };

  const handleBackClick = () => {
    setIsRegistered(false);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const optionToggleStyle = {
    backgroundColor: selectedOption === "in-person" ? "#072D3C" : "#F8FAFA",
    transition: "background-color 0.3s ease", // Smooth transition for background color
  };

  const priceText = selectedOption === "in-person" ? "N/A" : "₦120,000";
  const priceColor = selectedOption === "in-person" ? "#FFFFFF" : undefined;

  const [userViewerService, setUserViewerService] =
    useContext(ViewerServiceContext);

  console.log(userViewerService);
  return (
    <div className={styles2.retainer2}>
      <div className={styles2.dataretainer2}>
        {userViewerService.some(
          (service) => service.service_type === "program"
        ) ? (
          <>
            {userViewerService.map((data, index) => (
              <div className={styles2.eachretainercontainer} key={index}>
                <div
                  className={styles2.retainercontainer}
                  key={data.service_name}
                >
                  <div className={styles2.titlecontainer}>
                    <div className={styles2.daystimeline}>
                      <div className={styles2.daystime}>
                        {/* <span>{data.firstday}</span>
                          <hr className={styles2.linedays} />
                          <span>{data.secondday}</span> */}
                        <img src={data.image || image} alt='' />
                      </div>
                      {/* <hr className={styles2.containerline} /> */}
                    </div>
                    <div className={styles2.personaltrainingdetails}>
                      <div className={styles2.personaltraining}>
                        <div className={styles2.contenttype}>
                          <div className='personal-service'>
                            <span className={styles2.personal}>
                              {data.service_name}
                            </span>
                            {/* <div className='service-one'>
                                <span className={styles2.servicetype}>
                                  {data.servicetype}
                                </span>
                                <span className={styles2.oneofftext}>
                                  {data.oneoff}
                                </span>
                              </div> */}
                          </div>
                          <div className={styles2.textvector}>
                            <span className={styles2.text}>
                              {data.description.slice(0, 50)}
                              {data.description.length > 50 ? "..." : ""}
                              <Link to='/details' state={{ data }}>
                                <div className={styles2.oneoffdetails}>
                                  {" "}
                                  <span>see more</span>
                                  <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M13.1666 7.81706L3.16663 7.81706'
                                      stroke='#00CCCC'
                                      strokeWidth='1.5'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                    <path
                                      d='M9.13342 3.80083L13.1668 7.81683L9.13342 11.8335'
                                      stroke='#00CCCC'
                                      strokeWidth='1.5'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                </div>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link to='/booknow' state={{ data }}>
                        <div className={styles2.book}>
                          <span>Register now</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className={styles2.virtualinperson}>
                    <hr />
                    <VirtualContainer data={data} />
                  </div>{" "}
                </div>
              </div>
            ))}
          </>
        ) : (
          <span>No Services yet</span>
        )}
      </div>
    </div>
  );
}
