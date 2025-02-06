// import { useNavigate, useLocation } from 'react-router-dom';
// import { routesPath } from '@routes/routesPath';

// import {
//   NavBarLayout,
//   // AnchorLink,
//   MainPageNavRight,
// } from '@/components/NavigationBar/NavBarStyled';
// import LargeOutlinedButton from '../Buttons/LargeOutlined/LargeOutlinedButton';

// const NavBar = props => {
//   const location = useLocation();
//   const currentPage = location.pathname;
//   const { $navBarType, isvisible } = props;

//   const navigate = useNavigate();

//   const handleHomePageOpen = () => {
//     navigate(routesPath.HOME_PAGE);
//   };

//   const handleAboutOpen = () => {
//     navigate(routesPath.ABOUT);
//   };

//   const handlePriceOpen = () => {
//     navigate(routesPath.PRICE);
//   };

//   const handleEventsOpen = () => {
//     navigate(routesPath.EVENTS);
//   };

//   return (
//     <NavBarLayout $navBarType={$navBarType} $isvisible={isvisible}>
//       {/* <AnchorLink href="#about">About chat</AnchorLink> */}
//       {/* <AnchorLink href="#benefits">Benefits</AnchorLink> */}
//       <MainPageNavRight>
//         <LargeOutlinedButton
//           $mobilestyles="
//           margin-right: 10px;
//           line-height: 16px;
//           font-size: 12px;"
//           $desktopstyles="
//           font-size: 16px;
//           margin-right: 24px;"
//           text="Home"
//           handleClick={handleHomePageOpen}
//           $isActive={currentPage === routesPath.HOME_PAGE}
//         />
//         <LargeOutlinedButton
//           $mobilestyles="
//           margin-right: 10px;
//           line-height: 16px;
//           font-size: 12px;"
//           $desktopstyles="
//           font-size: 16px;
//           margin-right: 24px;"
//           text="About me"
//           handleClick={handleAboutOpen}
//           $isActive={currentPage === routesPath.ABOUT}
//         />
//         <LargeOutlinedButton
//           $mobilestyles="
//           margin-right: 10px;
//           line-height: 16px;
//           font-size: 12px;"
//           $desktopstyles="
//           font-size: 16px;
//           margin-right: 24px;"
//           text="Services"
//           // handleClick={handleServicesOpen}
//           $isActive={currentPage === routesPath.BODY_CARE}
//         />
//         <LargeOutlinedButton
//           $mobilestyles="
//           margin-right: 10px;
//           line-height: 16px;
//           font-size: 12px;"
//           $desktopstyles="
//           font-size: 16px;
//           margin-right: 24px;"
//           text="Events"
//           handleClick={handleEventsOpen}
//           $isActive={currentPage === routesPath.EVENTS}
//         />
//         <LargeOutlinedButton
//           $mobilestyles="
//           margin-right: 10px;
//           line-height: 16px;
//           font-size: 12px;"
//           $desktopstyles="
//           font-size: 16px;
//           margin-right: 24px;"
//           text="Price"
//           handleClick={handlePriceOpen}
//           $isActive={currentPage === routesPath.PRICE}
//         />
//         <LargeOutlinedButton
//           $mobilestyles="
//           margin-right: 10px;
//           line-height: 16px;
//           font-size: 12px;"
//           $desktopstyles="
//           font-size: 16px;
//           margin-right: 24px;"
//           text="Contacts"
//           // handleClick={handleLoginOpen}
//         />
//       </MainPageNavRight>
//     </NavBarLayout>
//   );
// };

// export default NavBar;
