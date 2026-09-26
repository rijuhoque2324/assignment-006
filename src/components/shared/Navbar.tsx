"use client";

import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logo from "@/assets/logo.png"
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";


const Navbar = () => {
    const pathname = usePathname();
    const { todayPlan, savedWorkouts } = useWorkout();
    const links = <>
        <li><Link href="/workouts" className={pathname === "/workouts" ? "bg-lime-950 text-lime-400 font-semibold rounded-3xl" : "text-gray-400"}>Workout</Link></li>
        <li><Link href="/my-plan" className={pathname === "/my-plan" ? "bg-lime-950 text-lime-400 font-semibold" : "text-gray-400"}>My Plan</Link></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <nav className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="FITLOG"/>
                        <span className="text-xl font-bold">
                            FITLOG
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                   <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-300">
                        Plan
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
                        {todayPlan.length}
                        </span>
                    </div>

                    {/* Saved */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">
                        Saved
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-sm text-gray-400">
                        {savedWorkouts.length}
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;