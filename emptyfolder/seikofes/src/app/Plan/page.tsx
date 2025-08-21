"use client";
import Link from "next/link";
import planstyles from "./Plan.module.scss";
import { useState } from "react";

export default function plan(){
    const [ActiveTab, setActiveTab] = useState("1F");

    return (
        <div className={planstyles.planContainer}>
            <div className={planstyles.menu}>
                <button className={`${planstyles.button1} ${ActiveTab === "1F" ? planstyles.active : ""}`} onClick={() => setActiveTab("1F")}>1F</button>
                <button className={`${planstyles.button2} ${ActiveTab === "2F" ? planstyles.active : ""}`} onClick={() => setActiveTab("2F")}>2F</button>
                <button className={`${planstyles.button3} ${ActiveTab === "3F" ? planstyles.active : ""}`} onClick={() => setActiveTab("3F")}>3F</button>
                <button className={`${planstyles.button4} ${ActiveTab === "4F" ? planstyles.active : ""}`} onClick={() => setActiveTab("4F")}>4F</button>
                <button className={`${planstyles.button5} ${ActiveTab === "5F" ? planstyles.active : ""}`} onClick={() => setActiveTab("5F")}>5F</button>
                <button className={`${planstyles.button6} ${ActiveTab === "out" ? planstyles.active : ""}`} onClick={() => setActiveTab("out")}>外</button>
                <Link className={planstyles.backLink} href="/">
                <p className={planstyles.back}>戻る</p>
                </Link>
            </div>
            <div className={planstyles.content}>
                {ActiveTab === "1F" && <h2>1Fの情報</h2>}
                {ActiveTab === "2F" && <h2>2Fの情報</h2>}
                {ActiveTab === "3F" && <h2>3Fの情報</h2>}
                {ActiveTab === "4F" && <h2>4Fの情報</h2>}
                {ActiveTab === "5F" && <h2>5Fの情報</h2>}
                {ActiveTab === "out" && <h2>外の情報</h2>}
            </div>
        </div>
    )
}