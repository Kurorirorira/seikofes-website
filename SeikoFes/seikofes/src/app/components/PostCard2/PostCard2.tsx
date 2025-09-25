import postcard2styles from "./PostCard2.module.scss";
import Link from "next/link";
import React, {ReactNode} from "react";
import {Zen_Kaku_Gothic_New} from "next/font/google";

const gothic = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin'],
})

type PostCard2Props = {
    account: string;
    text: string | ReactNode;
    image1: string;
    image2: string;
    date: string;
    icon?: string;
};

export default function PostCard2({
    account,
    text,
    image1,
    image2,
    date,
    icon = "/images/ホーム画面.webp",
}: PostCard2Props){
    return(
        <div className={`${postcard2styles.postcard2container} ${gothic.className}`}>
            {/* <div className={postcard2styles.menu}>
                <p className={postcard2styles.p1}>ホーム</p>
                <p className={postcard2styles.p2}>検索</p>
                <p className={postcard2styles.p3}>通知</p>
                <p className={postcard2styles.p4}>メッセージ</p>
                <p className={postcard2styles.p5}>プロフィール</p>
                <p className={postcard2styles.p6}>聖光祭に行こう</p>
                <Link className={postcard2styles.backLink} href="/">
                  <p className={postcard2styles.back}>戻る</p>
                </Link>
            </div> */}
            <div className={postcard2styles.content}>
                <div className={postcard2styles.postcard}>
                    <Link className={postcard2styles.backLink} href="/">
                    <h1 className={postcard2styles.post}>← 戻る</h1>
                    </Link>
                    <div className={postcard2styles.postheader}>
                        <img className={postcard2styles.icon} src={icon} alt="icon" />
                        <h2 className={postcard2styles.account}>{account}</h2>
                    </div>
                    <p className={postcard2styles.text}>{text}</p>
                    <div className={postcard2styles.imageflex}>
                        <img className={postcard2styles.image1} src={image1} alt="image" />
                        <img className={postcard2styles.image2} src={image2} alt="image" />
                    </div>
                    {/* <p className={postcard2styles.date}>{date}</p> */}
                </div>
            </div>
        </div>
    )
}