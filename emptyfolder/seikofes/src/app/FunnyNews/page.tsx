"use client";
import Link from "next/link";
import funnynewsstyles from "./FunnyNews.module.scss";
import { useState } from "react";

export default function funnynews(){
    const [activetab, setActiveTab] = useState("home");

    return (
        <div className={funnynewsstyles.funnynewscontainer}>
            <div className={funnynewsstyles.menu}>
                <button className={`${funnynewsstyles.button1} ${activetab === "home" ? funnynewsstyles.active : ""}`} onClick={() => setActiveTab("home")}>ホーム</button>
                <button className={`${funnynewsstyles.button2} ${activetab === "search" ? funnynewsstyles.active : ""}`} onClick={() => setActiveTab("search")}>検索</button>
                <button className={`${funnynewsstyles.button3} ${activetab === "notification" ? funnynewsstyles.active : ""}`} onClick={() => setActiveTab("notification")}>通知</button>
                <button className={`${funnynewsstyles.button4} ${activetab === "message" ? funnynewsstyles.active : ""}`} onClick={() => setActiveTab("message")}>メッセージ</button>
                <button className={`${funnynewsstyles.button5} ${activetab === "profile" ? funnynewsstyles.active : ""}`} onClick={() => setActiveTab("profile")}>プロフィール</button>
                <button className={`${funnynewsstyles.button6} ${activetab === "goseikofes" ? funnynewsstyles.active : ""}`} onClick={() => setActiveTab("goseikofes")}>聖光祭に行く</button>
                <Link className={funnynewsstyles.backLink} href="/">
                <p className={funnynewsstyles.back}>戻る</p>
                </Link>
            </div>
            <div className={funnynewsstyles.content}>
                {activetab === "home" && <h2>ホーム</h2>}
                {activetab === "search" && <h2>検索</h2>}
                {activetab === "notification" && <h2>通知</h2>}
                {activetab === "message" && <h2>メッセージ</h2>}
                {activetab === "profile" && <h2>プロフィール</h2>}
                {activetab === "goseikofes" && <h2>聖光祭に行く</h2>}
            </div>
        </div>
    )
}