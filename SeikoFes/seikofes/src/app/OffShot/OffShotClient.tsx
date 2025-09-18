import offshotstyles from "./OffShot.module.scss"
import Link from "next/link"
import {Zen_Kaku_Gothic_New} from "next/font/google";

const gothic = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function OffShot(){
    return(
        <div className={`${offshotstyles.offshotcontainer} ${gothic.className}`}>
            <h1 className={offshotstyles.text}>ここはオフショット倉庫です</h1>
            <Link className={offshotstyles.backLink} href="/">
              <p className={offshotstyles.back}>戻る</p>
            </Link>
            <img src="/images/IMG_2763.webp" alt="オフショット" />
            <img src="/images/IMG_2771.webp" alt="オフショット" />
            <img src="/images/IMG_2774.webp" alt="オフショット" />
            <img src="/images/IMG_4298.webp" alt="オフショット" />
            <img src="/images/IMG_4307.webp" alt="オフショット" />
            <img src="/images/IMG_4335.webp" alt="オフショット" />
            <img src="/images/IMG_4456.webp" alt="オフショット" />
            <img src="/images/IMG_4457.webp" alt="オフショット" />
            <img src="/images/IMG_5274.webp" alt="オフショット" />
        </div>
    )
}