import sloganstyles from "./Slogan.module.scss";
import Link from "next/link";

export default function Slogan(){
    return (
        <div className={sloganstyles.sloganContainer}>
            <img className={sloganstyles.kyomei} src="/images/FirstView.png" />
            <h1 className={sloganstyles.description}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字</h1>
            <Link className={sloganstyles.backLink} href="/">
            <p className={sloganstyles.back}>戻る</p>
            </Link>
        </div>
    )
}