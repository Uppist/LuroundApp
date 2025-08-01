/** @format */

import React from "react";
import styles from "../Contact/Contact.module.css";
import { Link } from "react-router-dom";

export default function SocialMedia({ socialLinks }) {
  // return (
  //   <section className={styles.contact}>
  //     <div className={styles.contacts}>
  //       {/*Linkedin icon*/}
  //       {socialLinks.linkedIn?.link?.trim() && (
  //         <Link
  //           to={socialLinks.linkedIn?.link?.trim()}
  //           target='_blank'
  //           rel='noopener noreferrer'
  //         >
  //           <svg
  //             width='16'
  //             height='17'
  //             viewBox='0 0 16 17'
  //             fill='none'
  //             xmlns='http://www.w3.org/2000/svg'
  //           >
  //             <path
  //               d='M13.6328 14.2847H11.2621V10.6087C11.2621 9.73209 11.2463 8.60365 10.0291 8.60365C8.79431 8.60365 8.6054 9.55873 8.6054 10.5449V14.2845H6.23468V6.72503H8.51056V7.75811H8.54242C8.77018 7.37252 9.09931 7.05532 9.49473 6.84028C9.89016 6.62525 10.3371 6.52043 10.7879 6.537C13.1907 6.537 13.6338 8.1019 13.6338 10.1377L13.6328 14.2847ZM3.55975 5.69171C3.28765 5.69176 3.02165 5.61192 2.79538 5.46228C2.56911 5.31264 2.39275 5.09992 2.28858 4.85103C2.18441 4.60214 2.15711 4.32825 2.21014 4.064C2.26318 3.79975 2.39417 3.55701 2.58653 3.36647C2.7789 3.17593 3.02401 3.04615 3.29087 2.99354C3.55773 2.94093 3.83435 2.96786 4.08575 3.07091C4.33715 3.17397 4.55205 3.34853 4.70326 3.57251C4.85447 3.7965 4.9352 4.05985 4.93525 4.32927C4.93529 4.50816 4.89973 4.6853 4.83062 4.85058C4.76151 5.01586 4.66021 5.16604 4.53249 5.29256C4.40476 5.41907 4.2531 5.51944 4.0862 5.58792C3.9193 5.65641 3.74042 5.69168 3.55975 5.69171ZM4.7451 14.2847H2.37193V6.72503H4.7451V14.2847ZM14.8147 0.787456H1.18066C0.871207 0.783999 0.573012 0.902329 0.351627 1.11644C0.130241 1.33056 0.00377671 1.62294 0 1.92934V15.4851C0.00364745 15.7916 0.130038 16.0842 0.351416 16.2985C0.572793 16.5129 0.871053 16.6314 1.18066 16.6282H14.8147C15.1249 16.632 15.424 16.5138 15.6462 16.2995C15.8685 16.0851 15.9957 15.7922 16 15.4851V1.92837C15.9956 1.62136 15.8683 1.32864 15.646 1.11453C15.4237 0.900421 15.1247 0.782429 14.8147 0.786478'
  //               fill='#0A66C2'
  //             />
  //           </svg>
  //         </Link>
  //       )}
  //       Facebook icon
  //       {socialLinks.facebook?.link?.trim() && (
  //         <Link to={socialLinks.facebook?.link?.trim()}>
  //           <svg
  //             width='16'
  //             height='17'
  //             viewBox='0 0 16 17'
  //             fill='none'
  //             xmlns='http://www.w3.org/2000/svg'
  //           >
  //             <g clip-path='url(#clip0_11200_5438)'>
  //               <path
  //                 d='M16 8.70729C16 4.28901 12.4183 0.707294 8 0.707294C3.58172 0.707294 0 4.28901 0 8.70729C0 12.7003 2.92548 16.0099 6.75 16.6101V11.0198H4.71875V8.70729H6.75V6.94479C6.75 4.93979 7.94434 3.83229 9.77172 3.83229C10.647 3.83229 11.5625 3.98854 11.5625 3.98854V5.95729H10.5537C9.55992 5.95729 9.25 6.57397 9.25 7.20662V8.70729H11.4688L11.1141 11.0198H9.25V16.6101C13.0745 16.0099 16 12.7003 16 8.70729Z'
  //                 fill='#1877F2'
  //               />
  //               <path
  //                 d='M11.1141 11.0198L11.4688 8.70728H9.25V7.2066C9.25 6.57395 9.55992 5.95728 10.5537 5.95728H11.5625V3.98853C11.5625 3.98853 10.647 3.83228 9.77172 3.83228C7.94434 3.83228 6.75 4.93978 6.75 6.94478V8.70728H4.71875V11.0198H6.75V16.6101C7.1573 16.674 7.57475 16.7073 8 16.7073C8.42525 16.7073 8.8427 16.674 9.25 16.6101V11.0198H11.1141Z'
  //                 fill='white'
  //               />
  //             </g>
  //             <defs>
  //               <clipPath id='clip0_11200_5438'>
  //                 <rect
  //                   width='16'
  //                   height='16'
  //                   fill='white'
  //                   transform='translate(0 0.707275)'
  //                 />
  //               </clipPath>
  //             </defs>
  //           </svg>
  //         </Link>
  //       )}
  //       {/*Twitter icon */}
  //       {socialLinks.twitter?.link?.trim() && (
  //         <Link to={socialLinks.twitter?.link?.trim()}>
  //           <svg
  //             width='16'
  //             height='15'
  //             viewBox='0 0 16 15'
  //             fill='none'
  //             xmlns='http://www.w3.org/2000/svg'
  //           >
  //             <g clip-path='url(#clip0_11200_5443)'>
  //               <path
  //                 d='M12.5944 0.478394H15.0361L9.70281 6.61494L16 14.9362H11.0522L7.19679 9.89205L2.76305 14.9362H0.321285L6.04016 8.38201L0 0.478394H5.07631L8.57831 5.1049L12.5944 0.478394ZM11.7269 13.4583H13.0763L4.33735 1.85992H2.85944L11.7269 13.4583Z'
  //                 fill='black'
  //               />
  //             </g>
  //             <defs>
  //               <clipPath id='clip0_11200_5443'>
  //                 <rect
  //                   width='16'
  //                   height='14.4578'
  //                   fill='white'
  //                   transform='translate(0 0.478394)'
  //                 />
  //               </clipPath>
  //             </defs>
  //           </svg>
  //         </Link>
  //       )}
  //     </div>
  //     {socialLinks.instagram?.link?.trim() && (
  //       <Link to={socialLinks.instagram?.link?.trim()}>
  //         <svg
  //           width='16px'
  //           height='16px'
  //           viewBox='0 0 3364.7 3364.7'
  //           xmlns='http://www.w3.org/2000/svg'
  //           fill='#000000'
  //         >
  //           <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
  //           <g
  //             id='SVGRepo_tracerCarrier'
  //             strokeLinecap='round'
  //             strokeLinejoin='round'
  //           ></g>
  //           <g id='SVGRepo_iconCarrier'>
  //             <defs>
  //               <radialGradient
  //                 id='0'
  //                 cx='217.76'
  //                 cy='3290.99'
  //                 r='4271.92'
  //                 gradientUnits='userSpaceOnUse'
  //               >
  //                 <stop offset='.09' stopColor='#fa8f21'></stop>
  //               </radialGradient>
  //               <radialGradient
  //                 id='1'
  //                 cx='2330.61'
  //                 cy='3182.95'
  //                 r='3759.33'
  //                 gradientUnits='userSpaceOnUse'
  //               >
  //                 <stop offset='.64' stopColor='#8c3aaa' stopOpacity='0'></stop>
  //                 <stop offset='1' stopColor='#8c3aaa'></stop>
  //               </radialGradient>
  //             </defs>
  //             <path
  //               d='M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9'
  //               fill='url(#0)'
  //             ></path>
  //             <path
  //               d='M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9'
  //               fill='url(#1)'
  //             ></path>
  //             <path
  //               d='M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57'
  //               fill='#ffffff'
  //             ></path>
  //           </g>
  //         </svg>
  //       </Link>
  //     )}
  //   </section>
  // );
}
