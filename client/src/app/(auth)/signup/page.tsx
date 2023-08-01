import styles from "@/styles/auth.module.css";
import Link from "next/link";

import React from "react";

type Props = {};

const Signup = (props: Props) => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.auth}>
        <h2 className="fw-bold fs-title">Create your Account</h2>
        <div className="mtb-2 gap">
          <div className={styles.input_field}>
            <label htmlFor="name" className="fs-body-sm text-neutral-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              //   value={clientName}
              //   onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className={styles.input_field}>
            <label htmlFor="email" className="fs-body-sm text-neutral-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              //   value={clientName}
              //   onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className={styles.input_field}>
            <label htmlFor="password" className="fs-body-sm text-neutral-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              //   value={clientName}
              //   onChange={(e) => setClientName(e.target.value)}
            />
          </div>
        </div>
        <button className="btn--add w-full">Signup</button>
        <div className="fs-body-sm text-right mt-1">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-400">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
