import offshotstyles from "./OffShot.module.scss"
import Link from "next/link"
import {Zen_Kaku_Gothic_New} from "next/font/google";

const gothic = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function OffShot(){
    return(
        <div className={`${offshotstyles.offshotContainer} ${gothic.className}`}>
            <h1>ここはオフショット倉庫です</h1>
            <Link className={offshotstyles.backLink} href="/">
              <p className={offshotstyles.back}>戻る</p>
            </Link>
        </div>
    )
}