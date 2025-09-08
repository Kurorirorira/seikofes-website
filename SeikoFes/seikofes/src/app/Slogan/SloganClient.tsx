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
            <img className={sloganstyles.images1} src="/images/「僕は行くよ」.webp" alt="僕は行くよ" />
            <img className={sloganstyles.kyomei} src="/images/SloganImages.webp"alt="テーマ画像" />
            <img className={sloganstyles.images2} src="/images/「筋肉自慢男」.webp" alt="筋肉自慢男" />
            <h1 className={sloganstyles.title}>【聖光祭2025テーマ】</h1>
            <h2 className={sloganstyles.theme}>「共鳴」～鳴らす今、共に奏でる。～</h2>
            <p className={sloganstyles.description}>物理用語として、「振動数の等しい発音隊を並べて、一方を鳴らすと他の一報も音を発する現象」</p>
            <p className={sloganstyles.description}>聖光生という共同体ひとりひとりのやりたいことが広がって、個性が伝播していく。それが１つになるのが、この聖光祭。</p>
            <Link className={sloganstyles.backLink} href="/">
                <p className={sloganstyles.back}>戻る</p>
            </Link>
        </div>
    )
}