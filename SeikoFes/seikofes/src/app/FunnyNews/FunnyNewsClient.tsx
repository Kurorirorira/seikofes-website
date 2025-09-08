"use client";
import Link from "next/link";
import funnynewsstyles from "./FunnyNews.module.scss";
import { useState } from "react";
import {Zen_Kaku_Gothic_New} from "next/font/google";

const gothic = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function FunnyNews(){
    const [activetab, setActiveTab] = useState("home");

    return (
        <div className={`${funnynewsstyles.funnynewscontainer} ${gothic.className}`}>
            <div className={funnynewsstyles.menu}>
                <button className={funnynewsstyles.button1}>ホーム</button>
                <button className={funnynewsstyles.button2}>検索</button>
                <button className={funnynewsstyles.button3}>通知</button>
                <button className={funnynewsstyles.button4}>メッセージ</button>
                <button className={funnynewsstyles.button5}>プロフィール</button>
                <button className={funnynewsstyles.button6}>聖光祭に行く</button>
                <Link className={funnynewsstyles.backLink} href="/">
                    <p className={funnynewsstyles.back}>戻る</p>
                </Link>
            </div>
            <div className={funnynewsstyles.content}>
                <div className={funnynewsstyles.postcard}>
                    <h1 className={funnynewsstyles.post}>← おもしろニュース</h1>
                    <div className={funnynewsstyles.postheader}>
                        <img className={funnynewsstyles.icon} src="/images/ホーム画面.webp" />
                        <h2 className={funnynewsstyles.account}>ポスター完成する</h2>
                    </div>
                    <p className={funnynewsstyles.text}>ついに、聖光祭のポスターができました。皆さん来てください</p>
                    <img className={funnynewsstyles.image} src="/images/ホーム画面.webp" />
                    <p className={funnynewsstyles.date}>午前10:01・2025年8月25日・87件の表示</p>
                </div>
            </div>
            <div className={funnynewsstyles.othernews}>
                <Link className={funnynewsstyles.news1Link} href="/FunnyNews">
                    <img className={funnynewsstyles.news1} src="/images/見出し素材「ニュース」.webp" alt="他のニュースへ" />
                </Link>
                <Link className={funnynewsstyles.news2Link} href="/FunnyNews">
                    <img className={funnynewsstyles.news2} src="/images/見出し素材「ニュース」.webp" alt="他のニュースへ" />
                </Link>
                <Link className={funnynewsstyles.news3Link} href="/FunnyNews">
                    <img className={funnynewsstyles.news3} src="/images/見出し素材「ニュース」.webp" alt="他のニュースへ" />
                </Link>
                <Link className={funnynewsstyles.news4Link} href="/FunnyNews">
                    <img className={funnynewsstyles.news4} src="/images/見出し素材「ニュース」.webp" alt="他のニュースへ" />
                </Link>
            </div>
        </div>
    )
}