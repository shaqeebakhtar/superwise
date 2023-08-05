import styles from "@/styles/auth.module.css";
import Link from "next/link";

import React, { useState } from "react";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
