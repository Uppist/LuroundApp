/** @format */
import { useState } from "react";
import AddService from "./AddService";

export default function Create({
  onTime,
  onProject,
  onRetainer,
  onProgram,
  onEvent,
}) {
  const [isService, setisService] = useState(false);

  const openModal = () => {
    setisService(true);
  };

  const closeModal = () => {
    setisService(false);
  };

  return (
    <>
      <button className='add-service'>
        <svg
          className={`arrow ${isService ? "open" : ""}`}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.7755 20.5714V13.2245H3.42859V10.7755H10.7755V3.42859H13.2245V10.7755H20.5714V13.2245H13.2245V20.5714H10.7755Z'
            fill='#00CCCC'
          />
        </svg>

        <span className='addservice' onClick={openModal}>
          Create service
        </span>
        {isService && (
          <AddService
            onClose={closeModal}
            onTime={onTime}
            onProject={onProject}
            onRetainer={onRetainer}
            onProgram={onProgram}
            onEvent={onEvent}
          />
        )}
      </button>
    </>
  );
}
