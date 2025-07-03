/** @format */
import { useState } from "react";
import One from "../OneoffService/OneOff";
import styles from "./Project.module.css";
import image from "../../../../elements/gallery.png";

import nigeria from "../../../../elements/nigeria.png";
import ProjectSvg from "./ProjectSvg";

export default function Projectbased({ handleClick, closeProjectBased }) {
  const [isBack, setIsBack] = useState(false);

  function BackOneOff() {
    setIsBack(true);
  }

  const [isCancel, setIsCancel] = useState(false);
  function Cancel() {
    setIsCancel(true);
  }

  function Done() {
    handleClick("oneoffService");
    closeProjectBased();
  }
  return (
    <>
      <div className={styles.projectbasedcontainer}>
        <button className={styles.projectbasedback} onClick={BackOneOff}>
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
        </button>

        <div className={styles.projectbasedgrid}>
          <div>
            <img src={image} className={styles.img} alt='' />
            <div className={styles.choose}>
              <div className={styles.gallery}>
                <label htmlFor='photo-edit'>Choose from Gallery</label>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.8337 1.66675H4.16699C2.78689 1.66827 1.66852 2.78664 1.66699 4.16675V11.7237V15.8334C1.66852 17.2135 2.78689 18.3319 4.16699 18.3334H15.8337C15.9856 18.3332 16.1354 18.3151 16.2833 18.2876C16.3384 18.2776 16.3909 18.2624 16.4447 18.2487C16.533 18.2261 16.6197 18.1998 16.7051 18.1677C16.7671 18.1445 16.8277 18.1201 16.8873 18.0922C16.9573 18.0592 17.0242 18.021 17.091 17.9815C17.1537 17.9447 17.217 17.9102 17.276 17.8682C17.2809 17.8648 17.2863 17.8625 17.2912 17.859C17.2974 17.8545 17.3027 17.8489 17.3087 17.8441C17.3201 17.8349 17.3344 17.8304 17.3448 17.82C17.3503 17.8144 17.3521 17.807 17.3572 17.8012C17.9466 17.3439 18.3328 16.637 18.3337 15.8334V13.392V4.16675C18.3321 2.78664 17.2138 1.66827 15.8337 1.66675ZM16.3128 17.4212C16.1573 17.4694 15.9966 17.5 15.8337 17.5001H4.16699C3.24699 17.4989 2.5015 16.7534 2.50033 15.8334V11.8962L5.6359 8.76066C6.20592 8.19263 7.12806 8.19263 7.69808 8.76066L10.5355 11.5978C10.537 11.5994 10.5374 11.6016 10.5391 11.6032L16.3466 17.4107C16.3354 17.4144 16.3241 17.4178 16.3128 17.4212ZM17.5003 15.8334C17.4998 16.2637 17.332 16.6519 17.0641 16.9476L11.4238 11.3077L12.3034 10.4281C12.8794 9.87638 13.7879 9.87638 14.3639 10.4281L17.5003 13.5645V15.8334ZM17.5003 12.3861L14.9531 9.83895C14.0583 8.94539 12.609 8.94539 11.7142 9.83895L10.8346 10.7186L8.28727 8.17147C7.39189 7.27791 5.9421 7.27791 5.04671 8.17147L2.50033 10.7179V4.16675C2.5015 3.24674 3.24699 2.50125 4.16699 2.50008H15.8337C16.7537 2.50125 17.4992 3.24674 17.5003 4.16675V12.3861ZM11.2503 5.00008C10.56 5.00008 10.0003 5.55972 10.0003 6.25008C10.0003 6.94044 10.56 7.50008 11.2503 7.50008C11.9404 7.49932 12.4996 6.94013 12.5003 6.25008C12.5003 5.55972 11.9407 5.00008 11.2503 5.00008ZM11.2503 6.66675C11.0202 6.66675 10.8337 6.48018 10.8337 6.25008C10.8337 6.01998 11.0202 5.83341 11.2503 5.83341C11.4803 5.83387 11.6665 6.02013 11.667 6.25008C11.667 6.48018 11.4804 6.66675 11.2503 6.66675Z'
                    fill='white'
                  />
                </svg>
                <input
                  type='file'
                  // ref={inputRef}
                  name='upload2'
                  // onChange={handleChange}
                  className={styles.photo}
                  id='photo-edit'
                  accept='image/png, image/jpeg, image/img'
                />
              </div>
              <div className={styles.gallery}>
                <label>Upload</label>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.3337 11.3844C18.3337 13.5 16.6135 15.2209 14.4972 15.2209C14.4964 15.2209 14.4956 15.2209 14.4956 15.2209H12.5789C12.3187 15.2209 12.1072 15.0094 12.1072 14.7492C12.1072 14.489 12.3187 14.2775 12.5789 14.2775H14.4964H14.498C16.0931 14.2767 17.3903 12.9796 17.3903 11.3844C17.3903 9.93396 16.3085 8.70283 14.8753 8.52123C14.7448 8.50472 14.6277 8.43475 14.5514 8.32783C14.4744 8.22091 14.4461 8.08726 14.472 7.95833C14.5271 7.68632 14.5546 7.43082 14.5546 7.17767C14.5546 5.11871 12.8785 3.4434 10.8195 3.4434C9.04042 3.4434 7.5019 4.70519 7.1607 6.44418C7.1151 6.67846 6.91306 6.83805 6.66463 6.82469C6.5585 6.81682 6.45158 6.80896 6.34545 6.80896C4.28649 6.80896 2.61039 8.48428 2.61039 10.5432C2.61039 12.6014 4.2857 14.2767 6.34388 14.2775H7.42171C7.68193 14.2775 7.89341 14.489 7.89341 14.7492C7.89341 15.0094 7.68193 15.2209 7.42171 15.2209H6.34702C6.34624 15.2209 6.34545 15.2209 6.34545 15.2209C3.76526 15.2209 1.66699 13.1226 1.66699 10.5432C1.66699 7.96855 3.75819 5.87264 6.33209 5.86478C6.90363 3.8923 8.72989 2.5 10.8203 2.5C13.3997 2.5 15.498 4.59827 15.498 7.17767C15.498 7.34277 15.4893 7.50865 15.4712 7.67689C17.1324 8.10849 18.3337 9.625 18.3337 11.3844ZM12.2991 12.4678L10.3337 10.5024C10.2904 10.4583 10.2377 10.4237 10.1804 10.4002C10.0656 10.3522 9.93586 10.3522 9.82029 10.4002C9.76212 10.4245 9.71023 10.4591 9.66699 10.5024L7.70158 12.4678C7.51762 12.6517 7.51762 12.9505 7.70158 13.1352C7.88555 13.32 8.1835 13.3192 8.36825 13.1352L9.52941 11.9748V16.9733C9.52941 17.2343 9.74089 17.445 10.0011 17.445C10.2613 17.445 10.4728 17.2335 10.4728 16.9733V11.9748L11.634 13.1352C11.726 13.2272 11.847 13.2736 11.9673 13.2736C12.0876 13.2736 12.2087 13.2272 12.3006 13.1352C12.483 12.9513 12.483 12.6525 12.2991 12.4678Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.createservice}>
              <span>Create One-off service </span>
              <ProjectSvg />
            </div>
            <div className={styles.project}>
              <div className={styles.projectservice}>
                <span>Service name</span>
                <input type='text' />
              </div>

              <div className={styles.projectdescription}>
                <span>Description</span>
                <textarea></textarea>
              </div>
            </div>

            <div className={styles.pricingproject}>
              <span>Pricing</span>
              <div className={styles.nigeriaprice}>
                <button>
                  <div className={styles.nigeriadown}>
                    <img src={nigeria} />
                    <div className={styles.ngndown}>
                      <span>NGN</span>
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                          stroke='#1D2E2E'
                          strokeOpacity='0.8'
                          strokeMiterlimit='10'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <input type='text' placeholder='0.00' />
              </div>
            </div>
            <div className={styles.deliverytime}>
              <div className={styles.delivery}>
                <label htmlFor=''>Delivery Timeline</label>
                <span>Starts counting from the day of booking</span>
              </div>
              <div className={styles.date}>
                <textarea name='' id='' placeholder='3 days'></textarea>
              </div>
            </div>

            <div className={styles.done}>
              <button className={styles.canceltime}>Cancel</button>
              <button className={styles.donetime} onClick={Done}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
