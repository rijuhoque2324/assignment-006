import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import footerLogo from "@/assets/logo.png"

const Footer = () => {
    return (
        <div className="border-t border-white/10 bg-[#0d0f11]">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
        
        {/* Left - Logo */}
        <Link href="/" className="flex items-center gap-2">
            <Image src={footerLogo} alt="FITLOG"/>
                <span className="text-l font-semibold">
                    FITLOG
                </span>
        </Link>

        {/* Right - Copyright */}
        <p className="text-center text-sm text-gray-500 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
        </div>
    );
};

export default Footer;