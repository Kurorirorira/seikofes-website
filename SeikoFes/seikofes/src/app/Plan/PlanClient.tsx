"use client";
import Link from "next/link";
import planstyles from "./Plan.module.scss";
import { useState } from "react";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const gothic = Zen_Kaku_Gothic_New({
        weight: ['400', '700'],
        subsets: ['latin'],
    })

export default function Plan(){
    const [activeTab, setActiveTab] = useState("1F");
    const items1 = [
        {
            title: "タイトル",
            description: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、",
            image: "/images/ホーム画面.webp",
        },
    ];
    const items2 = [
        {
            title: "タイトル２",
            description: "説明",
            image: "/images/ホーム画面.webp",
        },
    ];
    const items3 = [
        {
            title: "",
            description: "",
            image: "/images/ホーム画面.webp",
        },
        {
            title: "",
            description: "",
            image: "/images/ホーム画面.webp",
        },
        {
            title: "",
            description: "",
            image: "/images/ホーム画面.webp",
        },
        {
            title: "",
            description: "",
            image: "/images/ホーム画面.webp",
        },
    ];
    const items4 = [
        {
            title: "",
            description: "",
            image: "/images/ホーム画面.webp",
        },
    ];
    const items5 = [
        {
            title: "",
            description: "",
            image: "/images/ホーム画面.webp",
        },
    ];
    const items6 = [
        {
            title: "",
            description: "",
            image: "/images/ホーム画面.webp",
        },
    ]

    return (
        <div className={`${planstyles.planContainer} ${gothic.className}`}>
            <div className={planstyles.menu}>
                <button className={`${planstyles.button1} ${activeTab === "1F" ? planstyles.active : ""}`} onClick={() => setActiveTab("1F")}>1F</button>
                <button className={`${planstyles.button2} ${activeTab === "2F" ? planstyles.active : ""}`} onClick={() => setActiveTab("2F")}>2F</button>
                <button className={`${planstyles.button3} ${activeTab === "3F" ? planstyles.active : ""}`} onClick={() => setActiveTab("3F")}>3F</button>
                <button className={`${planstyles.button4} ${activeTab === "4F" ? planstyles.active : ""}`} onClick={() => setActiveTab("4F")}>4F</button>
                <button className={`${planstyles.button5} ${activeTab === "5F" ? planstyles.active : ""}`} onClick={() => setActiveTab("5F")}>5F</button>
                <button className={`${planstyles.button6} ${activeTab === "out" ? planstyles.active : ""}`} onClick={() => setActiveTab("out")}>外</button>
                <Link className={planstyles.backLink} href="/">
                    <p className={planstyles.back}>戻る</p>
                </Link>
            </div>
            <div className={planstyles.content}>
                {activeTab === "1F" && items1.map((item1, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item1.image} alt={item1.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item1.title}</h2>
                            <p>{item1.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "2F" && items2.map((item2, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item2.image} alt={item2.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item2.title}</h2>
                            <p>{item2.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "3F" && items3.map((item3, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item3.image} alt={item3.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item3.title}</h2>
                            <p>{item3.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "4F" && items4.map((item4, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item4.image} alt={item4.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item4.title}</h2>
                            <p>{item4.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "5F" && items5.map((item5, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item5.image} alt={item5.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item5.title}</h2>
                            <p>{item5.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "out" && items6.map((item6, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item6.image} alt={item6.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item6.title}</h2>
                            <p>{item6.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}