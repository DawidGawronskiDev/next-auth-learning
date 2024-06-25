import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/createuser">Create User</Link>
          <Link href="/clientmember">Client Member</Link>
          <Link href="/member">Member</Link>
          <Link href="/public">Public</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
