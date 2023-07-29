"use client";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const currPath = usePathname();

  return (
    <nav className={`${styles.navbar} bg-neutral-100 box-shadow`}>
      <div className={`${styles.navbar__header} flex`}>
        <div className={styles.logo}>
          <Link href={`/`}>
            <img src="/assets/logo.svg" alt="logo" draggable="false" />
          </Link>
        </div>
        <button className={styles.nav__toggle}>
          <span className="visually-hidden">Menu</span>
          <img src="/assets/arrows.svg" alt="arrows" draggable="false" />
        </button>
      </div>
      <ul className={styles.nav_list}>
        <li>
          <Link
            href={`/projects`}
            className={
              currPath === "/projects"
                ? `${styles.nav_link} ${styles.current}`
                : `${styles.nav_link}`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
            >
              <g
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                clipPath="url(#Link)"
              >
                <path d="M1.5 12.75 9 16.5l7.5-3.75M1.5 9 9 12.75 16.5 9M9 1.5 1.5 5.25 9 9l7.5-3.75L9 1.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h18v18H0z" />
                </clipPath>
              </defs>
            </svg>
            <span className={styles.nav_link__text}>Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/clients`}
            className={
              currPath === "/clients"
                ? `${styles.nav_link} ${styles.current}`
                : `${styles.nav_link}`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
            >
              <path
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1.688 15.75h14.624m-13.5-13.5v13.5m7.876-13.5v13.5m4.5-10.125V15.75M5.062 5.062h.563m-.563 2.25h.563m-.563 2.25h.563m2.25-4.5h.563m-.563 2.25h.563m-.563 2.25h.563M5.062 15.75v-2.531c0-.466.378-.844.844-.844h1.688c.466 0 .843.378.843.844v2.531M2.25 2.25h9m-.563 3.375h5.063m-2.813 2.813h.006v.005h-.005v-.005Zm0 2.25h.006v.005h-.005v-.005Zm0 2.25h.006v.005h-.005v-.005Z"
              />
            </svg>
            <span className={styles.nav_link__text}>Clients</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/inbox`}
            className={
              currPath === "/inbox"
                ? `${styles.nav_link} current`
                : `${styles.nav_link}`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
            >
              <path
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16.5 9H12l-1.5 2.25h-3L6 9H1.5"
              />
              <path
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.088 3.833 1.5 9v4.5A1.5 1.5 0 0 0 3 15h12a1.5 1.5 0 0 0 1.5-1.5V9l-2.588-5.168A1.5 1.5 0 0 0 12.57 3H5.43a1.5 1.5 0 0 0-1.342.833v0Z"
              />
            </svg>
            <span className={styles.nav_link__text}>Inbox</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/teams`}
            className={
              currPath === "/teams"
                ? `${styles.nav_link} ${styles.current}`
                : `${styles.nav_link}`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
            >
              <g
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                clipPath="url(#a)"
              >
                <path d="M17.25 15.75v-1.5A3 3 0 0 0 15 11.348M12.75 15.75v-1.5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1.5M12 2.348a3 3 0 0 1 0 5.812M6.75 8.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h18v18H0z" />
                </clipPath>
              </defs>
            </svg>
            <span className={styles.nav_link__text}>Teams</span>
          </Link>
        </li>
        <li className={styles.lg_display_none}>
          <img src="/assets/user-profile.png" alt="demo account" />
        </li>
      </ul>
      <div className={`${styles.navbar__footer} flex`}>
        <div className={`${styles.user} flex`}>
          <img src="/assets/user-profile.png" alt="demo account" />
          <div className={`${styles.user_details} fs-body-sm`}>
            <p className="fw-semi-bold" style={{ lineHeight: "1.1" }}>
              Demo Account
            </p>
            <p className="text-neutral-700">demoaccount@gmail.com</p>
          </div>
        </div>
        <button className={styles.btn__logout}>
          <span className="visually-hidden">logout</span>
          <img src="/assets/logout.svg" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
