"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { LogOut, User as UserIcon } from "lucide-react";

export default function AuthButton() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div className="flex items-center gap-3">
                <div className="h-8 w-16 bg-gray-50 animate-pulse rounded-lg" />
                <div className="h-10 w-28 bg-gray-50 animate-pulse rounded-xl" />
            </div>
        );
    }

    if (session) {
        return (
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center text-white shadow-sm">
                        <UserIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{session.user?.name}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="p-2 text-gray-400 hover:text-red-600 transition-all hover:bg-red-50 rounded-lg group cursor-pointer"
                    title="Logout"
                >
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3">
            <Link
                href="/login"
                className="text-sm font-bold text-gray-600 hover:text-teal-600 transition-colors"
            >
                Login
            </Link>
            <Link
                href="/register"
                className="bg-teal-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-teal-700 shadow-lg shadow-teal-500/25 transition transform hover:-translate-y-0.5 active:scale-95"
            >
                Join Care.xyz
            </Link>
        </div>
    );
}
