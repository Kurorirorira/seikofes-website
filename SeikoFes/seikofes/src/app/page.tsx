import backgroundstyles from "./BackGround.module.scss";
import homepagestyles from "./HomePage.module.scss";
import picturestyles from "./Picture.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={backgroundstyles.background}>
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
          <img className={picturestyles.firstview} src="/images/FirstView.png" />
         <div className={backgroundstyles.griditem}> 
            <Link className={homepagestyles.text1aLink} href="/Plan">
              <p className={homepagestyles.text1a}>企画一覧</p>
            </Link>
            <Link className={homepagestyles.text1bLink} href="/Slogan">
              <p className={homepagestyles.text1b}>スローガン</p>
            </Link>
            <Link className={homepagestyles.text1cLink} href="/Event">
              <p className={homepagestyles.text1c}>イベント</p>
            </Link>
            <h1 className={homepagestyles.textA}>おもしろニュース・動画</h1>
            <p className={homepagestyles.textAA}>More→</p>
            <Link className={homepagestyles.text2aLink} href="/FunnyNews">
              <p className={homepagestyles.text2a}>装飾できた</p>
            </Link>
            <Link className={homepagestyles.text2bLink} href="/FunnyNews">
              <p className={homepagestyles.text2b}>ステージ企画公開</p>
            </Link>
            <Link className={homepagestyles.text2cLink} href="/FunnyNews">
              <p className={homepagestyles.text2c}>グッズ完成</p>
            </Link>
            <Link className={homepagestyles.text2dLink} href="/FunnyNews">
              <p className={homepagestyles.text2d}>ご飯おいしい</p>
            </Link>
            <p className={homepagestyles.trapezoid1}></p>
            <p className={homepagestyles.trapezoid2}></p>
            <p className={homepagestyles.trapezoid3}></p>
            <p className={homepagestyles.trapezoid4}></p>
            <h1 className={homepagestyles.textB}>資料</h1>
            <p className={homepagestyles.text3a}>パンフレット</p>
            <p className={homepagestyles.text3b}>SNS</p>
            <p className={homepagestyles.text3c}>マップ</p>
            <h2 className={homepagestyles.textC1}>クレジット<span className={homepagestyles.textC2}>/???</span></h2>
         </div> 
      </div>
    </div>
  );
}