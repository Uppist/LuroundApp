/** @format */

import React from "react";
import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import timeImage from "../../../elements/services/timebased.svg";

export default function Share({ Close, data }) {
  function copyText() {
    navigator.clipboard.writeText(data.service_link);

    toast.success("copied");
  }
  return (
    <div className='popupcancel'>
      <div className='overlay' onClick={Close}></div>
      <div className={styles.share}>
        <div>
          <div className={styles.cancelbooking}>
            <label>Share Service</label>
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
        <div className={styles.container}>
          <div className={styles.shareservice}>
            <span className={styles.titleshare}>{data.service_name}</span>
            <div className={styles.serviceType}>
              <span className={styles.type}> Service type:</span>
              <span className={styles.text}> {data.service_type} </span>
              {data?.one_off_type === "time-based" ? (
                <img src={timeImage} alt='' />
              ) : (
                <>{/* <img src={time} alt='' /> */}</>
              )}
            </div>
          </div>
          <div className={styles.cancelshare}>
            <div className={styles.sharecontainer} onClick={copyText}>
              <svg
                width='25'
                height='24'
                viewBox='0 0 25 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.4622 16.0611H7.53C6.27667 16.0611 5.20852 15.6196 4.32556 14.7367C3.44259 13.8537 3.00074 12.7852 3 11.5311C2.99926 10.277 3.44111 9.20852 4.32556 8.32556C5.21 7.44259 6.27815 7.00074 7.53 7H11.4622V8.11111H7.53C6.58926 8.11111 5.78445 8.44593 5.11556 9.11556C4.44593 9.78593 4.11111 10.5911 4.11111 11.5311C4.11111 12.4711 4.44593 13.2759 5.11556 13.9456C5.78519 14.6152 6.59 14.95 7.53 14.95H11.4622V16.0611ZM9.11111 12.0867V10.9756H16.8889V12.0867H9.11111ZM14.5389 16.0611V14.95H18.47C19.4107 14.95 20.2156 14.6152 20.8844 13.9456C21.5541 13.2759 21.8889 12.4711 21.8889 11.5311C21.8889 10.5911 21.5541 9.7863 20.8844 9.11667C20.2148 8.44704 19.41 8.11222 18.47 8.11222H14.5389V7.00111H18.47C19.7233 7.00111 20.7919 7.44259 21.6756 8.32556C22.5593 9.20852 23.0007 10.277 23 11.5311C22.9993 12.7852 22.5574 13.8537 21.6744 14.7367C20.7915 15.6196 19.7233 16.0615 18.47 16.0622L14.5389 16.0611Z'
                  fill='currentColor'
                />
              </svg>

              <span>copy link</span>
            </div>

            <div className={styles.sharecontainer}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.15789 4H18.8421C19.6796 4 20.4829 4.33271 21.0751 4.92493C21.6673 5.51715 22 6.32037 22 7.15789V16.6316C22 17.4691 21.6673 18.2723 21.0751 18.8645C20.4829 19.4568 19.6796 19.7895 18.8421 19.7895H5.15789C4.32037 19.7895 3.51715 19.4568 2.92493 18.8645C2.33271 18.2723 2 17.4691 2 16.6316V7.15789C2 6.32037 2.33271 5.51715 2.92493 4.92493C3.51715 4.33271 4.32037 4 5.15789 4ZM5.15789 5.05263C4.63158 5.05263 4.16842 5.23158 3.81053 5.54737L12 10.8421L20.1895 5.54737C19.8316 5.23158 19.3684 5.05263 18.8421 5.05263H5.15789ZM12 12.1158L3.18947 6.4C3.10526 6.63158 3.05263 6.89474 3.05263 7.15789V16.6316C3.05263 17.1899 3.27444 17.7254 3.66925 18.1202C4.06406 18.515 4.59954 18.7368 5.15789 18.7368H18.8421C19.4005 18.7368 19.9359 18.515 20.3308 18.1202C20.7256 17.7254 20.9474 17.1899 20.9474 16.6316V7.15789C20.9474 6.89474 20.8947 6.63158 20.8105 6.4L12 12.1158Z'
                  fill='currentColor'
                />
              </svg>

              <span>Email</span>
            </div>

            <div className={styles.sharecontainer}>
              <svg
                width='25'
                height='24'
                viewBox='0 0 25 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17.7527 2.14802C16.792 2.04636 15.8263 1.99695 14.8602 2.00015C11.6571 2.00015 9.66683 4.03969 9.66683 7.32377V9.5531H6.97619C6.71333 9.55293 6.50012 9.76591 6.5 10.0288V13.6965C6.49983 13.9593 6.71281 14.1725 6.97566 14.1727H9.66683V21.5238C9.66666 21.7867 9.87964 21.9998 10.1425 22H13.9311C14.194 22.0002 14.4071 21.7872 14.4073 21.5243V14.1727H17.0896C17.3289 14.1726 17.5311 13.9952 17.5621 13.7579L18.0355 10.0907C18.0695 9.83003 17.8858 9.59112 17.6251 9.55712C17.6045 9.55444 17.5838 9.5531 17.563 9.5531H14.4073V7.68742C14.4073 6.76388 14.5933 6.3779 15.7484 6.3779L17.6904 6.37697C17.9533 6.37709 18.1664 6.16417 18.1666 5.90131V2.62049C18.1666 2.38147 17.9896 2.17941 17.7527 2.14802ZM17.2142 5.4246L15.7484 5.42553C13.693 5.42553 13.4549 6.71644 13.4549 7.68742V10.0293C13.4548 10.2921 13.6677 10.5054 13.9306 10.5055H17.0217L16.6711 13.2203H13.9311C13.6683 13.2202 13.4551 13.4331 13.4549 13.696V21.0476H10.6192V13.6965C10.6194 13.4336 10.4064 13.2205 10.1436 13.2203H7.45237V10.5055H10.143C10.4059 10.5057 10.619 10.2927 10.6192 10.0298V7.32377C10.6192 4.58662 12.2049 2.95252 14.8602 2.95252C15.821 2.95252 16.6887 3.0046 17.2142 3.05018V5.4246Z'
                  fill='currentColor'
                />
              </svg>

              <span>Whatsapp</span>
            </div>

            <div className={styles.sharecontainer}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.81289 8.86531C6.81265 8.86531 6.81307 8.86531 6.81289 8.86531H2.89288C2.62244 8.86513 2.40313 9.08426 2.40295 9.35464C2.40295 9.35446 2.40295 9.35488 2.40295 9.35464V21.1135C2.40277 21.3839 2.6219 21.6032 2.89228 21.6034C2.8921 21.6034 2.89252 21.6034 2.89228 21.6034H6.81229C7.08273 21.6036 7.30203 21.3844 7.30221 21.114C7.30221 21.1138 7.30221 21.1142 7.30221 21.114V9.35524C7.30239 9.0848 7.08327 8.86549 6.81289 8.86531ZM6.32236 20.6235H3.3828V9.84516H6.32236V20.6235ZM17.1007 8.86531C16.0378 8.86537 15.0045 9.21619 14.1612 9.86334V9.35524C14.1614 9.0848 13.9422 8.86549 13.6719 8.86531C13.6716 8.86531 13.672 8.86531 13.6719 8.86531H9.75184C9.4814 8.86513 9.2621 9.08426 9.26192 9.35464C9.26192 9.35446 9.26192 9.35488 9.26192 9.35464V21.1135C9.26174 21.3839 9.48087 21.6032 9.75131 21.6034C9.75113 21.6034 9.75149 21.6034 9.75131 21.6034H13.6713C13.9417 21.6036 14.161 21.3844 14.1612 21.114C14.1612 21.1138 14.1612 21.1142 14.1612 21.114V15.7243C14.1612 14.9125 14.8192 14.2545 15.631 14.2545C16.4427 14.2545 17.1007 14.9125 17.1007 15.7243V21.1135C17.1006 21.3839 17.3197 21.6032 17.5901 21.6034C17.5899 21.6034 17.5903 21.6034 17.5901 21.6034H21.5101C21.7805 21.6036 21.9998 21.3844 22 21.114C22 21.1138 22 21.1142 22 21.114V13.7646C21.9968 11.0601 19.8052 8.86848 17.1007 8.86531ZM21.0201 20.6235H18.0806V15.7243C18.0806 14.3714 16.9839 13.2746 15.631 13.2746C14.278 13.2746 13.1813 14.3714 13.1813 15.7243V20.6235H10.2418V9.84516H13.1813V11.024C13.1813 11.2322 13.313 11.4176 13.5096 11.4862C13.7057 11.5569 13.9251 11.4941 14.0541 11.3303C15.3892 9.63824 17.8431 9.34896 19.5351 10.6841C20.4776 11.4279 21.0254 12.564 21.0201 13.7646V20.6235ZM5.21315 2.00814C5.0979 2.00007 4.98224 1.99947 4.86694 2.00635C3.38807 1.90533 2.10733 3.02232 2.00632 4.50119C2.00226 4.5607 2.00022 4.62026 2.0001 4.67989C1.98736 6.1462 3.16571 7.34518 4.63202 7.35792C4.69189 7.35845 4.75169 7.3569 4.81144 7.35337H4.83919C6.31524 7.45665 7.5955 6.34379 7.69878 4.86774C7.80207 3.39168 6.68921 2.11142 5.21315 2.00814ZM5.1793 6.37633C5.06615 6.38673 4.95216 6.38584 4.83919 6.37352H4.81144C3.87458 6.44552 3.0568 5.74448 2.9848 4.80763C2.91279 3.87084 3.61383 3.053 4.55068 2.98099C4.65606 2.97292 4.76192 2.97466 4.86694 2.9862C5.80307 2.89996 6.63191 3.58892 6.71821 4.52505C6.80445 5.46125 6.11549 6.29009 5.1793 6.37633Z'
                  fill='currentColor'
                />
              </svg>

              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
