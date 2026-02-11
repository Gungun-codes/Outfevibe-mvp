"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, User as UserIcon, ChevronDown } from "lucide-react";
import { User } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserDropdownProps {
    user: User;
    logout: () => Promise<void>;
}

export default function UserDropdown({ user, logout }: UserDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Get initials for fallback
    const getInitials = (name: string | null) => {
        if (!name) return "U";
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
    };

    return (
        <div className="relative z-50" ref={dropdownRef}>
            {/* TRIGGER */}
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-3 pl-1 pr-4 py-1 rounded-full border border-white/10 hover:border-[#d4af7f]/50 hover:bg-white/5 transition-all duration-300 group outline-none"
            >
                <Avatar className="h-9 w-9 border-2 border-[#1f1f1f] group-hover:border-[#d4af7f] transition-colors">
                    <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                    <AvatarFallback className="bg-[#2a2a2a] text-[#d4af7f] font-bold">
                        {getInitials(user.displayName)}
                    </AvatarFallback>
                </Avatar>

                <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-white group-hover:text-[#d4af7f] transition-colors leading-none">
                        {user.displayName?.split(" ")[0] || "User"}
                    </p>
                </div>

                <ChevronDown
                    className={`w-4 h-4 text-gray-500 group-hover:text-[#d4af7f] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {/* DROPDOWN MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 mt-3 w-72 origin-top-right rounded-2xl bg-[#0a0a0a] border border-[#2a2a2a] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] overflow-hidden"
                    >
                        {/* HEADER */}
                        <div className="p-5 border-b border-[#1f1f1f] bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                            <div className="flex items-center gap-3 mb-3">
                                <Avatar className="h-12 w-12 border border-[#2a2a2a]">
                                    <AvatarImage src={user.photoURL || ""} />
                                    <AvatarFallback className="bg-[#1a1a1a] text-[#d4af7f]">
                                        {getInitials(user.displayName)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="overflow-hidden">
                                    <p className="text-white font-bold truncate text-lg">
                                        {user.displayName || "User"}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate mt-0.5 font-mono">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SECTIONS */}
                        <div className="p-2 space-y-1 bg-[#0a0a0a]">

                            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all group">
                                <UserIcon className="w-4 h-4 text-gray-500 group-hover:text-[#d4af7f] transition-colors" />
                                <span>My Profile</span>
                            </button>

                            <div className="my-1 h-px bg-[#1f1f1f] mx-2" />

                            <button
                                onClick={() => {
                                    logout();
                                    setIsOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all group font-medium"
                            >
                                <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span>Sign Out</span>
                            </button>
                        </div>

                        {/* FOOTER */}
                        <div className="px-4 py-3 bg-[#050505] border-t border-[#1f1f1f] flex justify-center">
                            <span className="text-[10px] text-gray-600 tracking-widest uppercase">
                                Outfevibe ID
                            </span>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
