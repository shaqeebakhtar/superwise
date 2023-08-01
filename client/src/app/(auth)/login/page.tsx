import styles from "@/styles/auth.module.css";
import Link from "next/link";

import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.auth}>
        <h2 className="fw-bold fs-title">Login to your Account</h2>
        <div className="mtb-2 gap">
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
        <button className="btn--add w-full">Login</button>
        <div className="fs-body-sm text-right mt-1">
          Don{`'`}t have an account?{" "}
          <Link href="/signup" className="text-primary-400">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
