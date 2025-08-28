import sloganstyles from "./Slogan.module.scss";
import Link from "next/link";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const gothic = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function Slogan(){
    return (
        <div className={`${sloganstyles.sloganContainer} + ${gothic.className}`}>
            <img className={sloganstyles.kyomei} src="/images/FirstView.png" />
            <h1 className={sloganstyles.description}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字</h1>
            <Link className={sloganstyles.backLink} href="/">
            <p className={sloganstyles.back}>戻る</p>
            </Link>
        </div>
    )
}