/** @format */
import "../style.css";
import Luround from "../elements/LuroundApp.jpg";

export default function Sidebar() {
  {
    /*functionality of arrowdown and arrowup for more div */
  }
  function arrowDown() {
    var arrowdown = document.querySelector(".vector2");
    var arrowup = document.querySelector(".vector");
    var moreDown = document.querySelector(".moreDown");

    if (arrowdown.style.display === "none") {
      arrowdown.style.display = "block"; //show arrowdwn
      arrowup.style.visibility = "hidden"; //hide arrowup
      moreDown.style.visibility = "visible"; //show content when arrowdown is clicked
    } else {
      //vice versa
      arrowdown.style.display = "none";
      arrowup.style.visibility = "visible";
      moreDown.style.visibility = "hidden";
    }
  }

  function arrowService() {
    var arrowdownservice = document.querySelector(".vector2service");
    var arrowupservice = document.querySelector(".vectorservice");
    var moreDownservice = document.querySelector(".moreDownservice");

    if (arrowdownservice.style.display === "none") {
      arrowdownservice.style.display = "block"; //show arrowdwn
      arrowupservice.style.visibility = "hidden"; //hide arrowup
      moreDownservice.style.visibility = "visible"; //show content when arrowdown is clicked
      moreDownservice.style.position = "relative";
    } else {
      //vice versa
      arrowdownservice.style.display = "none";
      arrowupservice.style.visibility = "visible";
      moreDownservice.style.visibility = "hidden";
      moreDownservice.style.position = "absolute";
    }
  }

  function OneOff() {
    var profilenone = document.querySelector(".reviewprofile");
    var about = document.querySelector(".about");
    var details = document.querySelector(".details");
    var oneoff = document.querySelector(".oneoff");
    var program = document.querySelector(".program");
    var retainer = document.querySelector(".retainer");
    var event = document.querySelector(".event");
    var profile = document.querySelector(".profile");
    profilenone.style.display = "none";
    profile.style.backgroundColor = "white";
    profile.style.borderLeft = "none";
    profile.style.color = "rgba(29, 46, 46, 0.8)";
    oneoff.style.display = "grid";
    about.style.display = "none";
    details.style.display = "none";
    program.style.display = "ngridone";
    retainer.style.display = "none";
    event.style.display = "none";
  }

  function Retainer() {
    var profilenone = document.querySelector(".reviewprofile");
    var about = document.querySelector(".about");
    var details = document.querySelector(".details");
    var oneoff = document.querySelector(".oneoff");
    var retainer = document.querySelector(".retainer");
    var program = document.querySelector(".program");
    var event = document.querySelector(".event");
    var profile = document.querySelector(".profile");
    profilenone.style.display = "none";
    profile.style.backgroundColor = "white";
    retainer.style.display = "grid";
    about.style.display = "none";
    details.style.display = "none";
    oneoff.style.display = "none";
    program.style.display = "none";
    event.style.display = "none";
  }

  function Program() {
    var profilenone = document.querySelector(".reviewprofile");
    var about = document.querySelector(".about");
    var details = document.querySelector(".details");
    var program = document.querySelector(".program");
    var oneoff = document.querySelector(".oneoff");
    var retainer = document.querySelector(".retainer");
    var event = document.querySelector(".event");
    var profile = document.querySelector(".profile");
    profilenone.style.display = "none";
    profile.style.backgroundColor = "white";
    program.style.display = "grid";
    about.style.display = "none";
    details.style.display = "none";
    oneoff.style.display = "none";
    retainer.style.display = "none";
    event.style.display = "none";
  }

  function Event() {
    var profilenone = document.querySelector(".reviewprofile");
    var about = document.querySelector(".about");
    var details = document.querySelector(".details");

    var oneoff = document.querySelector(".oneoff");
    var retainer = document.querySelector(".retainer");
    var program = document.querySelector(".program");
    var event = document.querySelector(".event");
    var profile = document.querySelector(".profile");
    profilenone.style.display = "none";
    profile.style.backgroundColor = "white";
    about.style.display = "none";
    details.style.display = "none";
    oneoff.style.display = "none";
    retainer.style.display = "none";
    program.style.display = "none";
    event.style.display = "grid";
  }

  function Profile() {
    var profilenone = document.querySelector(".reviewprofile");
    var about = document.querySelector(".about");
    var details = document.querySelector(".details");
    var profile = document.querySelector(".profile");
    var oneoff = document.querySelector(".oneoff");
    var event = document.querySelector(".event");
    var retainer = document.querySelector(".retainer");
    var program = document.querySelector(".program");
    profilenone.style.display = "grid";
    profile.style.backgroundColor = "rgba(235, 255, 255, 1)";

    profile.style.borderLeft = "2px solid hsla(180, 100%, 40%, 1)";
    profile.style.color = "hsla(180, 100%, 32%, 1)";
    about.style.display = "block";
    details.style.display = "grid";
    oneoff.style.display = "none";
    event.style.display = "none";
    program.style.display = "none";
    retainer.style.display = "none";
  }
  return (
    <div className='sidebar'>
      <img className='luround' src={Luround} />
      <ul className='list'>
        <li className='profilelist profile' onClick={Profile}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.579 12.056C14.2178 12.056 16.357 9.91682 16.357 7.278C16.357 4.63918 14.2178 2.5 11.579 2.5C8.94018 2.5 6.80099 4.63918 6.80099 7.278C6.80099 9.91682 8.94018 12.056 11.579 12.056Z'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M3.99999 18.7014C3.99872 18.3655 4.07384 18.0338 4.21968 17.7312C4.67735 16.8158 5.96796 16.3307 7.0389 16.111C7.81126 15.9462 8.59429 15.8361 9.38215 15.7815C10.8408 15.6534 12.3079 15.6534 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1098 16.111C17.1808 16.3307 18.4714 16.7701 18.9291 17.7312C19.2224 18.348 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0813 16.1098 21.2918C15.3384 21.4635 14.5551 21.5767 13.7666 21.6305C12.5794 21.7311 11.3866 21.7495 10.1968 21.6854C9.9222 21.6854 9.65675 21.6854 9.38215 21.6305C8.59662 21.5773 7.8163 21.4641 7.04806 21.2918C5.96796 21.0813 4.6865 20.6419 4.21968 19.6808C4.07458 19.3748 3.99954 19.0402 3.99999 18.7014Z'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='sidebarspan'> Profile</span>
        </li>
        <li>
          <div className='iconservice'>
            <div className='moreservice' onClick={arrowService}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.1667 7.00004H11.1667C9.60433 7.00004 8.33333 5.72904 8.33333 4.16671C8.33333 2.60437 9.60433 1.33337 11.1667 1.33337H20.1667C21.729 1.33337 23 2.60437 23 4.16671C23 5.72904 21.729 7.00004 20.1667 7.00004ZM11.1667 2.66671C10.3397 2.66671 9.66667 3.33971 9.66667 4.16671C9.66667 4.99371 10.3397 5.66671 11.1667 5.66671H20.1667C20.9937 5.66671 21.6667 4.99371 21.6667 4.16671C21.6667 3.33971 20.9937 2.66671 20.1667 2.66671H11.1667ZM20.1667 22.6667H11.1667C9.60433 22.6667 8.33333 21.3957 8.33333 19.8334C8.33333 18.271 9.60433 17 11.1667 17H20.1667C21.729 17 23 18.271 23 19.8334C23 21.3957 21.729 22.6667 20.1667 22.6667ZM11.1667 18.3334C10.3397 18.3334 9.66667 19.0064 9.66667 19.8334C9.66667 20.6604 10.3397 21.3334 11.1667 21.3334H20.1667C20.9937 21.3334 21.6667 20.6604 21.6667 19.8334C21.6667 19.0064 20.9937 18.3334 20.1667 18.3334H11.1667ZM20.1667 15H11.1667C9.60433 15 8.33333 13.729 8.33333 12.1667C8.33333 10.6044 9.60433 9.33337 11.1667 9.33337H20.1667C21.729 9.33337 23 10.6044 23 12.1667C23 13.729 21.729 15 20.1667 15ZM11.1667 10.6667C10.3397 10.6667 9.66667 11.3397 9.66667 12.1667C9.66667 12.9937 10.3397 13.6667 11.1667 13.6667H20.1667C20.9937 13.6667 21.6667 12.9937 21.6667 12.1667C21.6667 11.3397 20.9937 10.6667 20.1667 10.6667H11.1667ZM4.16667 7.00004H3.83333C2.271 7.00004 1 5.72904 1 4.16671C1 2.60437 2.271 1.33337 3.83333 1.33337H4.16667C5.729 1.33337 7 2.60437 7 4.16671C7 5.72904 5.729 7.00004 4.16667 7.00004ZM3.83333 2.66671C3.00633 2.66671 2.33333 3.33971 2.33333 4.16671C2.33333 4.99371 3.00633 5.66671 3.83333 5.66671H4.16667C4.99367 5.66671 5.66667 4.99371 5.66667 4.16671C5.66667 3.33971 4.99367 2.66671 4.16667 2.66671H3.83333ZM4.16667 22.6667H3.83333C2.271 22.6667 1 21.3957 1 19.8334C1 18.271 2.271 17 3.83333 17H4.16667C5.729 17 7 18.271 7 19.8334C7 21.3957 5.729 22.6667 4.16667 22.6667ZM3.83333 18.3334C3.00633 18.3334 2.33333 19.0064 2.33333 19.8334C2.33333 20.6604 3.00633 21.3334 3.83333 21.3334H4.16667C4.99367 21.3334 5.66667 20.6604 5.66667 19.8334C5.66667 19.0064 4.99367 18.3334 4.16667 18.3334H3.83333ZM4.16667 15H3.83333C2.271 15 1 13.729 1 12.1667C1 10.6044 2.271 9.33337 3.83333 9.33337H4.16667C5.729 9.33337 7 10.6044 7 12.1667C7 13.729 5.729 15 4.16667 15ZM3.83333 10.6667C3.00633 10.6667 2.33333 11.3397 2.33333 12.1667C2.33333 12.9937 3.00633 13.6667 3.83333 13.6667H4.16667C4.99367 13.6667 5.66667 12.9937 5.66667 12.1667C5.66667 11.3397 4.99367 10.6667 4.16667 10.6667H3.83333Z'
                  fill='currentColor'
                  fillOpacity='0.8'
                />
              </svg>

              <span className='sidebarspan'> Services</span>
            </div>
            <svg
              onClick={arrowService}
              className='vectorservice'
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 11L6 6L1 1'
                stroke='#1D2E2E'
                strokeOpacity='0.8'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>{" "}
            <svg
              onClick={arrowService}
              className='vector2service'
              width='25'
              height='25'
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
            </svg>{" "}
          </div>
        </li>

        <ul className='moreDownservice'>
          <hr />
          <li className='downlist' onClick={OneOff}>
            One-Off
          </li>
          <li className='downlist' onClick={Retainer}>
            Retainer
          </li>
          <li className='downlist' onClick={Program}>
            Program
          </li>
          <li className='downlist' onClick={Event}>
            Events
          </li>
        </ul>

        <li className='profilelist'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_96_1822)'>
              <path
                d='M19.2 2.32258V0H17.6V2.32258H6.4V0H4.8V2.32258H0V24H24V13.1613V2.32258H19.2ZM1.6 3.87097H4.8V6.19355H6.4V3.87097H17.6V6.19355H19.2V3.87097H22.4V10.0645H1.6V3.87097ZM22.4 22.4516H1.6V11.6129H22.4V22.4516Z'
                fill='#1D2E2E'
                fillOpacity='0.8'
              />
              <path
                d='M10.7622 21.6V14.9348L11.7108 15.9158L12.2968 15.3102L10.3484 13.2978L8.39999 15.3102L8.986 15.9158L9.93454 14.9348V21.6H10.7622Z'
                fill='#1D2E2E'
                fillOpacity='0.8'
              />
              <path
                d='M13.8313 13.2V19.8652L12.8828 18.8842L12.2968 19.4897L14.2452 21.5022L16.1935 19.4897L15.6075 18.8842L14.659 19.8652V13.2H13.8313Z'
                fill='#1D2E2E'
                fillOpacity='0.8'
              />
            </g>
            <defs>
              <clipPath id='clip0_96_1822'>
                <rect width='24' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>

          <span className='sidebarspan'> Bookings</span>
        </li>
        <li>
          <div className='moreicon'>
            <div className='more' onClick={arrowDown}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.8 19.2C16.8 19.8365 17.0529 20.447 17.5029 20.8971C17.953 21.3472 18.5635 21.6 19.2 21.6C19.8365 21.6 20.447 21.3472 20.8971 20.8971C21.3471 20.447 21.6 19.8365 21.6 19.2C21.6 18.5635 21.3471 17.9531 20.8971 17.503C20.447 17.0529 19.8365 16.8 19.2 16.8C18.5635 16.8 17.953 17.0529 17.5029 17.503C17.0529 17.9531 16.8 18.5635 16.8 19.2ZM2.39999 19.2C2.39999 19.8365 2.65285 20.447 3.10294 20.8971C3.55303 21.3472 4.16347 21.6 4.79999 21.6C5.43651 21.6 6.04696 21.3472 6.49705 20.8971C6.94714 20.447 7.19999 19.8365 7.19999 19.2C7.19999 18.5635 6.94714 17.9531 6.49705 17.503C6.04696 17.0529 5.43651 16.8 4.79999 16.8C4.16347 16.8 3.55303 17.0529 3.10294 17.503C2.65285 17.9531 2.39999 18.5635 2.39999 19.2ZM16.8 4.80002C16.8 5.43654 17.0529 6.04699 17.5029 6.49708C17.953 6.94717 18.5635 7.20002 19.2 7.20002C19.8365 7.20002 20.447 6.94717 20.8971 6.49708C21.3471 6.04699 21.6 5.43654 21.6 4.80002C21.6 4.1635 21.3471 3.55306 20.8971 3.10297C20.447 2.65288 19.8365 2.40002 19.2 2.40002C18.5635 2.40002 17.953 2.65288 17.5029 3.10297C17.0529 3.55306 16.8 4.1635 16.8 4.80002ZM2.39999 4.80002C2.39999 5.43654 2.65285 6.04699 3.10294 6.49708C3.55303 6.94717 4.16347 7.20002 4.79999 7.20002C5.43651 7.20002 6.04696 6.94717 6.49705 6.49708C6.94714 6.04699 7.19999 5.43654 7.19999 4.80002C7.19999 4.1635 6.94714 3.55306 6.49705 3.10297C6.04696 2.65288 5.43651 2.40002 4.79999 2.40002C4.16347 2.40002 3.55303 2.65288 3.10294 3.10297C2.65285 3.55306 2.39999 4.1635 2.39999 4.80002Z'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span className='sidebarspan'> More</span>
            </div>
            <svg
              onClick={arrowDown}
              className='vector'
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 11L6 6L1 1'
                stroke='#1D2E2E'
                strokeOpacity='0.8'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg
              onClick={arrowDown}
              className='vector2'
              width='25'
              height='25'
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
            </svg>{" "}
          </div>
        </li>
      </ul>

      <ul className='moreDown'>
        <hr />
        <li className='downlist'>Calendar</li>
        <li className='downlist'>Transactions</li>
        <li className='downlist'>Financials</li>
        <li className='downlist'>Contacts</li>
        <li className='downlist'>Support</li>
      </ul>
    </div>
  );
}
