// // import { useNavigate } from "react-router";
// // import { Link } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// // import { createStyles, Navbar, Group, Button } from "@mantine/core";
// // import { useMediaQuery } from "@mantine/hooks";
// // import { Logout } from "tabler-icons-react";

// // import { RootState } from "../../Redux/store";
// // import { setIsLoggedIn } from "../../Redux/userSlice";
// // import { setActiveItem } from "../../Redux/helperSlice";
// // import { UserInfo } from "../UserInfo/UserInfo";
// // import { NavigationLinkData } from "../../data/NavigationLinkData";

// // const useStyles = createStyles((theme, _params, getRef) => {
// //   const icon = getRef("icon");
// //   return {
// //     navbar: {
// //       backgroundColor: theme.colors.indigo[6],
// //       borderColor: theme.colors.indigo[6],
// //       position: "fixed",
// //       minHeight: "100%",
// //       top: 0,
// //     },
// //     version: {
// //       backgroundColor: theme.colors[theme.primaryColor][7],
// //       color: theme.white,
// //       fontWeight: 700,
// //     },
// //     header: {
// //       paddingBottom: theme.spacing.md,
// //       marginBottom: theme.spacing.md * 1.5,
// //       "@media (max-width: 1300px)": {
// //         paddingBottom: theme.spacing.sm,
// //         marginBottom: theme.spacing.sm * 1.5,
// //       },
// //     },
// //     footer: {
// //       paddingTop: theme.spacing.sm,
// //       marginTop: theme.spacing.sm,
// //       paddingBottom: theme.spacing.sm,
// //       borderTop: `1px solid ${theme.colors.blue[9]}`,
// //     },
// //     link: {
// //       ...theme.fn.focusStyles(),
// //       display: "flex",
// //       alignItems: "center",
// //       textDecoration: "none",
// //       fontSize: theme.fontSizes.md,
// //       "@media (max-width: 1300px)": {
// //         fontSize: theme.fontSizes.sm,
// //       },
// //       color: theme.white,
// //       padding: `${theme.spacing.md}px ${theme.spacing.xs}px`,
// //       borderRadius: theme.radius.sm,
// //       fontWeight: 500,

// //       "&:hover": {
// //         backgroundColor: theme.colors[theme.primaryColor][5],
// //       },
// //     },
// //     linkIcon: {
// //       ref: icon,
// //       color: theme.white,
// //       opacity: 0.75,
// //       marginRight: theme.spacing.sm,
// //     },
// //     linkActive: {
// //       "&, &:hover": {
// //         backgroundColor: theme.colors.blue[9],
// //         [`& .${icon}`]: {
// //           opacity: 0.9,
// //         },
// //       },
// //     },
// //     logoutLink: {
// //       ...theme.fn.focusStyles(),
// //       display: "flex",
// //       alignItems: "center",
// //       textDecoration: "none",
// //       fontSize: theme.fontSizes.sm,
// //       color: theme.white,
// //       padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
// //       borderRadius: theme.radius.sm,
// //       fontWeight: 500,

// //       "&:hover": {
// //         backgroundColor: theme.colors[theme.primaryColor][5],
// //       },
// //     },
// //   };
// // });

// // const Sidebar = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { navLinkData } = NavigationLinkData();

// //   //Get user data from redux store
// //   const userData = useSelector((state: RootState) => state.user.user);
// //   //const userImage = useSelector((state: RootState) => state.user.image);
// //   const { email, username, image } = userData;
// //   const imageUrlArray = image.map((image: any) => image.imageUrl);
// //   const userImage = imageUrlArray[imageUrlArray.length - 1];

// //   //Mantine custom hooks for styling
// //   const { classes, cx } = useStyles();
// //   const largeScreen = useMediaQuery("(min-width: 1300px)");

// //   //sets state for active link
// //   const active = useSelector((state: RootState) => state.helper.activeItem);
// //   //Logout function
// //   const handleLogout = () => {
// //     dispatch(setIsLoggedIn());
// //     dispatch(setActiveItem("Dashboard"));
// //     localStorage.removeItem("currentToken");
// //     localStorage.removeItem("username");
// //     localStorage.removeItem("userId");
// //   };

// //   const links = navLinkData.map((item) => (
// //     <Link
// //       className={cx(classes.link, {
// //         [classes.linkActive]: item.label === active,
// //       })}
// //       to={item.link}
// //       key={item.label}
// //       onClick={(event) => {
// //         navigate(item.link);
// //         dispatch(setActiveItem(item.label));
// //         event.preventDefault();
// //       }}
// //     >
// //       <item.icon className={classes.linkIcon} />
// //       <span>{item.label}</span>
// //     </Link>
// //   ));

// //   return (
// //     <Navbar
// //       width={{ sm: largeScreen ? 300 : 200 }}
// //       p="md"
// //       className={classes.navbar}
// //     >
// //       <Navbar.Section mt={-45}>
// //         <Group className={classes.header} position="apart"></Group>
// //         <UserInfo avatar={userImage} name={username} email={email} />
// //         {links}
// //       </Navbar.Section>
// //       <Navbar.Section className={classes.footer}>
// //         <Button
// //           variant="subtle"
// //           size="md"
// //           className={classes.logoutLink}
// //           onClick={handleLogout}
// //         >
// //           <Logout className={classes.linkIcon} />
// //           <span>Logout</span>
// //         </Button>
// //       </Navbar.Section>
// //     </Navbar>
// //   );
// // };
// // export default Sidebar;
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { createStyles, Navbar, Group, Button } from "@mantine/core";
// import { useMediaQuery } from "@mantine/hooks";
// import { Logout } from "tabler-icons-react";
// import { News }from "tabler-icons-react";
// import { RootState } from "../../Redux/store";
// import { setIsLoggedIn } from "../../Redux/userSlice";
// import { setActiveItem } from "../../Redux/helperSlice";
// import { UserInfo } from "../UserInfo/UserInfo";
// import { NavigationLinkData } from "../../data/NavigationLinkData";

// const useStyles = createStyles((theme) => ({
//   navbar: {
//     backgroundColor: theme.colors.indigo[6],
//     borderColor: theme.colors.indigo[6],
//     position: "fixed",
//     minHeight: "100%",
//     top: 0,
//   },
//   header: {
//     paddingBottom: theme.spacing.md,
//     marginBottom: theme.spacing.md * 1.5,
//   },
//   footer: {
//     paddingTop: theme.spacing.sm,
//     marginTop: theme.spacing.sm,
//     paddingBottom: theme.spacing.sm,
//     borderTop: `1px solid ${theme.colors.blue[9]}`,
//   },
//   link: {
//     display: "flex",
//     alignItems: "center",
//     textDecoration: "none",
//     fontSize: theme.fontSizes.md,
//     color: theme.white,
//     padding: `${theme.spacing.md}px ${theme.spacing.xs}px`,
//     borderRadius: theme.radius.sm,
//     fontWeight: 500,
//     "&:hover": {
//       backgroundColor: theme.colors[theme.primaryColor][5],
//     },
//   },
//   linkIcon: {
//     color: theme.white,
//     opacity: 0.75,
//     marginRight: theme.spacing.sm,
//   },
//   linkActive: {
//     "&, &:hover": {
//       backgroundColor: theme.colors.blue[9],
//     },
//   },
//   logoutLink: {
//     display: "flex",
//     alignItems: "center",
//     textDecoration: "none",
//     fontSize: theme.fontSizes.sm,
//     color: theme.white,
//     padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
//     borderRadius: theme.radius.sm,
//     fontWeight: 500,
//     "&:hover": {
//       backgroundColor: theme.colors[theme.primaryColor][5],
//     },
//   },
// }));


// const Sidebar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { navLinkData } = NavigationLinkData();

//   const userData = useSelector((state: RootState) => state.user.user);
//   const { email, username, image } = userData;
//   const imageUrlArray = image.map((image: any) => image.imageUrl);
//   const userImage = imageUrlArray[imageUrlArray.length - 1];

//   const { classes, cx } = useStyles();
//   const largeScreen = useMediaQuery("(min-width: 1300px)");
//   const active = useSelector((state: RootState) => state.helper.activeItem);

//   const handleLogout = () => {
//     dispatch(setIsLoggedIn());
//     dispatch(setActiveItem("Dashboard"));
//     localStorage.removeItem("currentToken");
//     localStorage.removeItem("username");
//     localStorage.removeItem("userId");
//   };

//   const links = navLinkData.map((item) => {
//     if (item.label === "Dashboard") {
//       return (
//         <>
//           <Link
//             className={cx(classes.link, {
//               [classes.linkActive]: item.label === active,
//             })}
//             to={item.link}
//             key={item.label}
//             onClick={(event) => {
//               navigate(item.link);
//               dispatch(setActiveItem(item.label));
//               event.preventDefault();
//             }}
//           >
//             <item.icon className={classes.linkIcon} />
//             <span>{item.label}</span>
//           </Link>
  
//           {/* Portfolio added below Dashboard */}
//           <Link
//             className={cx(classes.link, {
//               [classes.linkActive]: "Portfolio" === active,
//             })}
//             to={`/portfolio/${username}`}
//             key={"Portfolio"}
//             onClick={(event) => {
//               navigate(`/portfolio/${username}`);
//               dispatch(setActiveItem("Portfolio"));
//               event.preventDefault();
//             }}
//           >
//             <item.icon className={classes.linkIcon} />
//             <span>Portfolio</span>
//           </Link>
//         </>
//       );
//     } else if (item.label === "Expense" || item.label === "Budget") {
//       return (
//         <Link
//           className={cx(classes.link, {
//             [classes.linkActive]: item.label === active,
//           })}
//           to={item.link}
//           key={item.label}
//           onClick={(event) => {
//             navigate(item.link);
//             dispatch(setActiveItem(item.label));
//             event.preventDefault();
//           }}
//         >
//           <item.icon className={classes.linkIcon} />
//           <span>{item.label}</span>
//         </Link>
//       );
//     }
//     return null;
//   });
  
//   links.push(
//     <Link
//       className={cx(classes.link, {
//         [classes.linkActive]: "News" === active,
//       })}
//       to={`/news/${username}`}
//       key={"News"}
//       onClick={(event) => {
//         navigate(`/news/${username}`);
//         dispatch(setActiveItem("News"));
//         event.preventDefault();
//       }}
//     >
//       <News className={classes.linkIcon} /> {/* Use a specific icon */}
//       <span>News</span>
//     </Link>
//   );
  
  

//   return (
//     <Navbar
//       width={{ sm: largeScreen ? 300 : 200 }}
//       p="md"
//       className={classes.navbar}
//     >
//       <Navbar.Section mt={-45}>
//         <Group className={classes.header} position="apart"></Group>
//         <UserInfo avatar={userImage} name={username} email={email} />
//         {links}
//       </Navbar.Section>
//       <Navbar.Section className={classes.footer}>
//         <Button
//           variant="subtle"
//           size="md"
//           className={classes.logoutLink}
//           onClick={handleLogout}
//         >
//           <Logout className={classes.linkIcon} />
//           <span>Logout</span>
//         </Button>
//       </Navbar.Section>
//     </Navbar>
//   );
// };
// export default Sidebar;
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { createStyles, Navbar, Group, Button } from "@mantine/core";
// import { useMediaQuery } from "@mantine/hooks";
// import { Logout } from "tabler-icons-react";
// import { News } from "tabler-icons-react";
// import { RootState } from "../../Redux/store";
// import { setIsLoggedIn } from "../../Redux/userSlice";
// import { setActiveItem } from "../../Redux/helperSlice";
// import { UserInfo } from "../UserInfo/UserInfo";
// import { NavigationLinkData } from "../../data/NavigationLinkData";

// const useStyles = createStyles((theme) => ({
//   navbar: {
//     backgroundColor: theme.colors.indigo[6],
//     borderColor: theme.colors.indigo[6],
//     position: "fixed",
//     minHeight: "100%",
//     top: 0,
//   },
//   brand: {
//     fontSize: 28,
//     fontWeight: 700,
//     color: theme.white,
//     marginBottom: theme.spacing.md,
//     textAlign: "center",
//     fontFamily: "Montserrat, sans-serif",
//   },
//   header: {
//     paddingBottom: theme.spacing.md,
//     marginBottom: theme.spacing.md * 1.5,
//   },
//   footer: {
//     paddingTop: theme.spacing.sm,
//     marginTop: theme.spacing.sm,
//     paddingBottom: theme.spacing.sm,
//     borderTop: `1px solid ${theme.colors.blue[9]}`,
//   },
//   link: {
//     display: "flex",
//     alignItems: "center",
//     textDecoration: "none",
//     fontSize: theme.fontSizes.md,
//     color: theme.white,
//     padding: `${theme.spacing.md}px ${theme.spacing.xs}px`,
//     borderRadius: theme.radius.sm,
//     fontWeight: 500,
//     "&:hover": {
//       backgroundColor: theme.colors[theme.primaryColor][5],
//     },
//   },
//   linkIcon: {
//     color: theme.white,
//     opacity: 0.75,
//     marginRight: theme.spacing.sm,
//   },
//   linkActive: {
//     "&, &:hover": {
//       backgroundColor: theme.colors.blue[9],
//     },
//   },
//   logoutLink: {
//     display: "flex",
//     alignItems: "center",
//     textDecoration: "none",
//     fontSize: theme.fontSizes.sm,
//     color: theme.white,
//     padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
//     borderRadius: theme.radius.sm,
//     fontWeight: 500,
//     "&:hover": {
//       backgroundColor: theme.colors[theme.primaryColor][5],
//     },
//   },
// }));

// const Sidebar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { navLinkData } = NavigationLinkData();

//   const userData = useSelector((state: RootState) => state.user.user);
//   const { email, username, image } = userData;
//   const imageUrlArray = image.map((image: any) => image.imageUrl);
//   const userImage = imageUrlArray[imageUrlArray.length - 1];

//   const { classes, cx } = useStyles();
//   const largeScreen = useMediaQuery("(min-width: 1300px)");
//   const active = useSelector((state: RootState) => state.helper.activeItem);

//   const handleLogout = () => {
//     dispatch(setIsLoggedIn());
//     dispatch(setActiveItem("Dashboard"));
//     localStorage.removeItem("currentToken");
//     localStorage.removeItem("username");
//     localStorage.removeItem("userId");
//   };

//   const links = navLinkData.map((item) => {
//     if (item.label === "Dashboard") {
//       return (
//         <>
//           <Link
//             className={cx(classes.link, {
//               [classes.linkActive]: item.label === active,
//             })}
//             to={item.link}
//             key={item.label}
//             onClick={(event) => {
//               event.preventDefault();
//               navigate(item.link);
//               dispatch(setActiveItem(item.label));
//             }}
//           >
//             <item.icon className={classes.linkIcon} />
//             <span>{item.label}</span>
//           </Link>

//           {/* Portfolio added below Dashboard */}
//           <Link
//             className={cx(classes.link, {
//               [classes.linkActive]: "Portfolio" === active,
//             })}
//             to={`/portfolio/${username}`}
//             key={"Portfolio"}
//             onClick={(event) => {
//               event.preventDefault();
//               navigate(`/portfolio/${username}`);
//               dispatch(setActiveItem("Portfolio"));
//             }}
//           >
//             <item.icon className={classes.linkIcon} />
//             <span>Portfolio</span>
//           </Link>
//         </>
//       );
//     } else if (item.label === "Expense" || item.label === "Budget") {
//       return (
//         <Link
//           className={cx(classes.link, {
//             [classes.linkActive]: item.label === active,
//           })}
//           to={item.link}
//           key={item.label}
//           onClick={(event) => {
//             event.preventDefault();
//             navigate(item.link);
//             dispatch(setActiveItem(item.label));
//           }}
//         >
//           <item.icon className={classes.linkIcon} />
//           <span>{item.label}</span>
//         </Link>
//       );
//     }
//     return null;
//   });

//   // Add News link manually
//   links.push(
//     <Link
//       className={cx(classes.link, {
//         [classes.linkActive]: "News" === active,
//       })}
//       to={`/news/${username}`}
//       key={"News"}
//       onClick={(event) => {
//         event.preventDefault();
//         navigate(`/news/${username}`);
//         dispatch(setActiveItem("News"));
//       }}
//     >
//       <News className={classes.linkIcon} />
//       <span>News</span>
//     </Link>
//   );
  

//   return (
//     <Navbar
//       width={{ sm: largeScreen ? 300 : 200 }}
//       p="md"
//       className={classes.navbar}
//     >
//       <Navbar.Section mt={-45}>
//         <Group className={classes.header} position="apart" />
//         <div className={classes.brand}>FinTrack</div>
//         <UserInfo avatar={userImage} name={username} email={email} />
//         {links}
//       </Navbar.Section>

//       <Navbar.Section className={classes.footer}>
//         <Button
//           variant="subtle"
//           size="md"
//           className={classes.logoutLink}
//           onClick={handleLogout}
//         >
//           <Logout className={classes.linkIcon} />
//           <span>Logout</span>
//         </Button>
//       </Navbar.Section>
//     </Navbar>
//   );
// };

// export default Sidebar;
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createStyles, Navbar, Group, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Logout, News, Help } from "tabler-icons-react"; // ✅ Correct icons
import { RootState } from "../../Redux/store";
import { setIsLoggedIn } from "../../Redux/userSlice";
import { setActiveItem } from "../../Redux/helperSlice";
import { UserInfo } from "../UserInfo/UserInfo";
import { NavigationLinkData } from "../../data/NavigationLinkData";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.indigo[6],
    borderColor: theme.colors.indigo[6],
    position: "fixed",
    minHeight: "100%",
    top: 0,
  },
  brand: {
    fontSize: 28,
    fontWeight: 700,
    color: theme.white,
    marginBottom: theme.spacing.md,
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
  },
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: theme.spacing.md * 1.5,
  },
  footer: {
    paddingTop: theme.spacing.sm,
    marginTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    borderTop: `1px solid ${theme.colors.blue[9]}`,
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.md,
    color: theme.white,
    padding: `${theme.spacing.md}px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][5],
    },
  },
  linkIcon: {
    color: theme.white,
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.colors.blue[9],
    },
  },
  logoutLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][5],
    },
  },
}));

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { navLinkData } = NavigationLinkData();

  const userData = useSelector((state: RootState) => state.user.user);
  const { email, username, image } = userData;
  const imageUrlArray = image.map((image: any) => image.imageUrl);
  const userImage = imageUrlArray[imageUrlArray.length - 1];

  const { classes, cx } = useStyles();
  const largeScreen = useMediaQuery("(min-width: 1300px)");
  const active = useSelector((state: RootState) => state.helper.activeItem);

  const handleLogout = () => {
    dispatch(setIsLoggedIn());
    dispatch(setActiveItem("Dashboard"));
    localStorage.removeItem("currentToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
  };

  const links = navLinkData.map((item) => {
    if (item.label === "Dashboard") {
      return (
        <>
          <Link
            className={cx(classes.link, {
              [classes.linkActive]: item.label === active,
            })}
            to={item.link}
            key={item.label}
            onClick={(event) => {
              event.preventDefault();
              navigate(item.link);
              dispatch(setActiveItem(item.label));
            }}
          >
            <item.icon className={classes.linkIcon} />
            <span>{item.label}</span>
          </Link>

          {/* Portfolio added below Dashboard */}
          <Link
            className={cx(classes.link, {
              [classes.linkActive]: "Portfolio" === active,
            })}
            to={`/portfolio/${username}`}
            key={"Portfolio"}
            onClick={(event) => {
              event.preventDefault();
              navigate(`/portfolio/${username}`);
              dispatch(setActiveItem("Portfolio"));
            }}
          >
            <item.icon className={classes.linkIcon} />
            <span>Portfolio</span>
          </Link>
        </>
      );
    } else if (item.label === "Expense" || item.label === "Budget") {
      return (
        <Link
          className={cx(classes.link, {
            [classes.linkActive]: item.label === active,
          })}
          to={item.link}
          key={item.label}
          onClick={(event) => {
            event.preventDefault();
            navigate(item.link);
            dispatch(setActiveItem(item.label));
          }}
        >
          <item.icon className={classes.linkIcon} />
          <span>{item.label}</span>
        </Link>
      );
    }
    return null;
  });

  // Add News link manually
  links.push(
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: "News" === active,
      })}
      to={`/news/${username}`}
      key={"News"}
      onClick={(event) => {
        event.preventDefault();
        navigate(`/news/${username}`);
        dispatch(setActiveItem("News"));
      }}
    >
      <News className={classes.linkIcon} />
      <span>News</span>
    </Link>
  );

  // Add Help link manually
  links.push(
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: "Help" === active,
      })}
      to={`/help/${username}`}
      key={"Help"}
      onClick={(event) => {
        event.preventDefault();
        navigate(`/help/${username}`);
        dispatch(setActiveItem("Help"));
      }}
    >
      <Help className={classes.linkIcon} />
      <span>Help</span>
    </Link>
  );

  return (
    <Navbar
      width={{ sm: largeScreen ? 300 : 200 }}
      p="md"
      className={classes.navbar}
    >
      <Navbar.Section mt={-45}>
        <Group className={classes.header} position="apart" />
        <div className={classes.brand}>FinTrack</div>
        <UserInfo avatar={userImage} name={username} email={email} />
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Button
          variant="subtle"
          size="md"
          className={classes.logoutLink}
          onClick={handleLogout}
        >
          <Logout className={classes.linkIcon} />
          <span>Logout</span>
        </Button>
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
