/** @format */

import program from "../program.json";
export default function Program() {
  function Dropdown() {
    alert("Hello");
  }
  return (
    <div className='program'>
      <div className='retainerservice'>
        <div className='numberofservice'>
          <span className='one-offservice'>Program</span>
          <span className='number'>3</span>
        </div>
        <div className='add-service'>
          <a href='/'>
            <svg
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

            <span className='addservice'>Add services</span>
          </a>
        </div>
      </div>
      <div className='dataretainer'>
        {program.map((data) => (
          <div className='retainercontainer'>
            <div className='days-time'>
              <span>{data.firstday}</span>
              <hr className='linedays' />
              <span>{data.secondday}</span>
            </div>
            <hr className='containerline' />
            <div className='personal-training'>
              <div className='content-type1'>
                <div className='personal-service'>
                  <span className='personal'>{data.Title}</span>
                  <div className='service-one'>
                    <span className='servicetype'>{data.servicetype}</span>
                    <span className='oneofftext'>{data.oneoff}</span>
                  </div>
                </div>
                <div className='textvector1'>
                  <div className='overallvector'>
                    <div className='service-one'>
                      <span className='servicetype'>Duration:</span>
                      <span className='oneofftext'>{data.Duration}</span>
                    </div>
                    <div className='service-one'>
                      <span className='servicetype'>Reoccurence:</span>
                      <span className='oneofftext'>{data.reoccurence}</span>
                    </div>
                    <div className='service-one'>
                      <span className='servicetype'>
                        Max no. of participation:
                      </span>
                      <span className='oneofftext'>{data.participation}</span>
                    </div>
                    <div className='service-one'>
                      <span className='servicetype'>Start Date:</span>
                      <span className='oneofftext'>{data.startdate}</span>
                    </div>

                    <div className='service-one'>
                      <span className='servicetype'>End Date:</span>
                      <span className='oneofftext'>{data.enddate}</span>
                    </div>
                  </div>
                  <span className='text'>{data.text}</span>
                </div>
              </div>
              <div className='price-session'>
                <div className='pricing'>
                  <span>{data.pricing}</span>
                  <div className='mins-arrow'>
                    {" "}
                    <span className='mins'>{data.minutes}</span>
                  </div>
                </div>
                <div className='virtual'>
                  <div className='virtual-arrow'>
                    {" "}
                    <span className='virtualtext'>{data.virtual}</span>
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

                  <div className='naira-session'>
                    <span className='naira'>{data.amount}</span>
                    <span className='session'>{data.session}</span>
                  </div>
                </div>
                <svg
                  width='38'
                  height='38'
                  viewBox='0 0 24 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z'
                    fill='#1D2E2E'
                  />
                  <path
                    d='M12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16Z'
                    fill='#1D2E2E'
                  />
                  <path
                    d='M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z'
                    fill='#1D2E2E'
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
