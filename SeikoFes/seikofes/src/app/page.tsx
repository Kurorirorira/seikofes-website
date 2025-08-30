import backgroundstyles from "./BackGround.module.scss";
import homepagestyles from "./HomePage.module.scss";
import picturestyles from "./Picture.module.scss";
import Link from "next/link";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const gothic = Zen_Kaku_Gothic_New({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={`${backgroundstyles.background} ${gothic.className}`}>
      <div className={backgroundstyles.backgroundgrid}>
        <Link className={picturestyles.onsaLink} href="/FortunePaper">
          <img className={picturestyles.onsa} src="/images/Onsa.png" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.teddyLink} href="/FortunePaper">
          <img className={picturestyles.teddybear} src="/images/TeddyBear.png" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.duckLink} href="/FortunePaper">
          <img className={picturestyles.duck} src="/images/Duck.png" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.rubbercupLink} href="/FortunePaper">
          <img className={picturestyles.rubbercup} src="/images/RubberCup.png" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.guitarLink} href="/FortunePaper">
          <img className={picturestyles.guitar} src="/images/Guitar.png" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.hammerLink} href="/FortunePaper">
          <img className={picturestyles.hammer} src="/images/Hammer.png" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <img className={picturestyles.firstview} src="/images/ホーム画面.webp" />
         <div className={backgroundstyles.griditem}> 
            <Link className={homepagestyles.img1aLink} href="/Plan">
              <img className={homepagestyles.img1a} src="/images/ボタン「企画一覧」.png" alt="企画一覧" />
            </Link>
            <Link className={homepagestyles.img1bLink} href="/Slogan">
              <img className={homepagestyles.img1b} src="/images/ボタン「テーマ」.png" alt="テーマ" />
            </Link>
            <Link className={homepagestyles.img1cLink} href="/Event">
              <img className={homepagestyles.img1c} src="/images/ボタン「ステージ」.png" alt="ステージ" />
            </Link>
            <h1 className={homepagestyles.textA}>おもしろニュース・動画</h1>
            <p className={homepagestyles.textAA}>More→</p>
            <div className={homepagestyles.linkContainer}>
              <Link className={homepagestyles.img2aLink} href="/FunnyNews">
                <img className={homepagestyles.img2a} src="/images/見出し素材「ニュース」.png" alt="ニュース" />
              </Link>
              <Link className={homepagestyles.img2bLink} href="/FunnyNews">
                <img className={homepagestyles.img2b} src="/images/見出し素材「レポート日記」.png" alt="レポート日記" />
              </Link>
              <Link className={homepagestyles.img2cLink} href="/FunnyNews">
                <img className={homepagestyles.img2c} src="/images/見出し素材「写真・動画」.png" alt="写真・動画" />
              </Link>
              <Link className={homepagestyles.img2dLink} href="/FunnyNews">
                <img className={homepagestyles.img2d} src="/images/見出し素材「情報解禁」.png" alt="情報解禁" />
              </Link>
            </div>
            <h1 className={homepagestyles.textB}>資料</h1>
            <Link className={homepagestyles.img3aLink} href="">
              <img className={homepagestyles.img3a} src="/images/ボタン「パンフレット」.png" alt="パンフレット" />
            </Link>
            <Link className={homepagestyles.img3bLink} href="">
              <img className={homepagestyles.img3b} src="/images/ボタン「Instagram」.png" alt="Instagram" />
            </Link>
            <Link className={homepagestyles.img3cLink} href="">
              <img className={homepagestyles.img3c} src="/images/ボタン「パンフレット」.png" alt="パンフレット" />
            </Link>
            <h2 className={homepagestyles.textC1}>
              クレジット
              <span className={homepagestyles.imgC2}>
                <Link href="/">
                  <img src="/images/ボタン「？？？」.png" alt="???" />
                </Link>
              </span>
            </h2>
         </div> 
      </div>
    </div>
  );
}