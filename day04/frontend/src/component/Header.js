import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="w-full h-14 flex justify-between items-center">
        {/* 좌측 요소 */}
        <ul className="flex text-lg even:mx-5">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-3">
            <Link to="/about/swanious">AboutSwanious</Link>
          </li>
          <li className="mx-3">
            <Link to="/axios">AxiosTest</Link>
          </li>
        </ul>

        {/* 우측 요소 */}
        <div className="text-lg">
          <Link className="mx-3" to="/login">
            Login
          </Link>
          <Link className="mx-3" to="/profile/swanious">
            Profile
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  );
}
