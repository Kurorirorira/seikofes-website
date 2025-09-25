import postcardstyles from "./PostCard.module.scss";
import Link from "next/link";
import {Zen_Kaku_Gothic_New} from "next/font/google";
import React, { ReactNode } from "react";

const gothic = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin'],
})

type PostCardProps = {
    account: string;
    text: string | ReactNode;
    image: string;
    date: string;
    icon?: string;
};

export default function PostCard({
    account,
    text,
    image,
    date,
    icon = "/images/アイコン.webp",
}: PostCardProps) {
    return(
        <div className={`${postcardstyles.postcardContainer} ${gothic.className}`}>
            {/* <div className={postcardstyles.menu}>
                <p className={postcardstyles.p1}>ホーム</p>
                <p className={postcardstyles.p2}>検索</p>
                <p className={postcardstyles.p3}>通知</p>
                <p className={postcardstyles.p4}>メッセージ</p>
                <p className={postcardstyles.p5}>プロフィール</p>
                <p className={postcardstyles.p6}>聖光祭に行こう</p>
                <Link className={postcardstyles.backLink} href="/">
                  <p className={postcardstyles.back}>戻る</p>
                </Link>
            </div> */}
            <div className={postcardstyles.content}>
                <div className={postcardstyles.postcard}>
                    <Link className={postcardstyles.backLink} href="/">
                    <h1 className={postcardstyles.post}>← 戻る</h1>
                    </Link>
                    <div className={postcardstyles.postheader}>
                        <img className={postcardstyles.icon} src={icon} alt="icon" />
                        <h2 className={postcardstyles.account}>{account}</h2>
                    </div>
                    <p className={postcardstyles.text}>{text}</p>
                    <img className={postcardstyles.image} src={image} alt="image" />
                    {/* <p className={postcardstyles.date}>{date}</p> */}
                </div>
            </div>
        </div>
    );
}