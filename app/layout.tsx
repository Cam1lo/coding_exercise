import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { METADATA } from "@/core/constants/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = METADATA;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="w-[100%] max-w-[90rem] mx-auto h-full">
                    <div className="navbar p-4 flex justify-between items-center">
                        <a href="/">
                            <Image src={"/logo.png"} alt="Royalty Hotels logo" height={64} width={64}></Image>
                        </a>
                        <div className="flex gap-4">
                            <a href="/filters" className="cursor-pointer">
                                Filters
                            </a>
                            <a href="#" className="cursor-pointer">
                                Contact Us
                            </a>
                            <a href="#" className="cursor-pointer">
                                About Us
                            </a>
                        </div>
                    </div>

                    {children}
                </div>
            </body>
        </html>
    );
}
