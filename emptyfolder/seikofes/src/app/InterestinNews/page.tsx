"use client";
import Link from "next/link";
import interestingnewsstyles from "./InterestingNews.module.scss";
import { useState } from "react";

export default function interestingnews(){
    const [activetab, setActiveTab] = useState("home");

    return (
        <div className={interestingnewsstyles.interestingnewscontainer}>
            <div className={interestingnewsstyles.menu}>
                <button className={`${interestingnewsstyles.button1} ${activetab === "home" ? interestingnewsstyles.active : ""}`} onClick={() => setActiveTab("home")}>ホーム</button>
                <button className={`${interestingnewsstyles.button2} ${activetab === "search" ? interestingnewsstyles.active : ""}`} onClick={() => setActiveTab("search")}>検索</button>
                <button className={`${interestingnewsstyles.button3} ${activetab === "notification" ? interestingnewsstyles.active : ""}`} onClick={() => setActiveTab("notification")}>通知</button>
                <button className={`${interestingnewsstyles.button4} ${activetab === "message" ? interestingnewsstyles.active : ""}`} onClick={() => setActiveTab("message")}>メッセージ</button>
                <button className={`${interestingnewsstyles.button5} ${activetab === "profile" ? interestingnewsstyles.active : ""}`} onClick={() => setActiveTab("profile")}>プロフィール</button>
                <button className={`${interestingnewsstyles.button6} ${activetab === "goseikofes" ? interestingnewsstyles.active : ""}`} onClick={() => setActiveTab("goseikofes")}>聖光祭に行く</button>
                <Link className={interestingnewsstyles.backLink} href="/">
                <p className={interestingnewsstyles.back}>戻る</p>
                </Link>
            </div>
            <div className={interestingnewsstyles.content}>
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