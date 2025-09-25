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

        {/* おみくじ */}
        <Link className={picturestyles.onsaLink} href="/FortunePaper">
          <img className={picturestyles.onsa} src="/images/音叉.webp" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.teddyLink} href="/FortunePaper">
          <img className={picturestyles.teddybear} src="/images/犬.webp" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.sleepmanLink} href="/FortunePaper">
          <img className={picturestyles.sleepman} src="/images/「カッコつけて寝そべる」.webp" alt="おみくじを引く" />
        </Link>
        <Link className={picturestyles.duckLink} href="/FortunePaper">
          <img className={picturestyles.duck} src="/images/アヒル！.webp" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.rubbercupLink} href="/FortunePaper">
          <img className={picturestyles.rubbercup} src="/images/ラバーカップ.webp" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.guitarLink} href="/FortunePaper">
          <img className={picturestyles.guitar} src="/images/ギター.webp" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>
        <Link className={picturestyles.hammerLink} href="/FortunePaper">
          <img className={picturestyles.hammer} src="/images/ピコピコハンマー.webp" alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
        </Link>

        <img className={picturestyles.firstview} src="/images/ホーム画面.webp" />

        {/* メインコンテンツ */}
        <div className={backgroundstyles.griditem}>
          <div className={homepagestyles.mainContain}>
          <Link className={homepagestyles.planButtonLink} href="/Plan">
            <img className={homepagestyles.planButtonImg} src="/images/project.png" alt="企画一覧" />
          </Link>
          <Link className={homepagestyles.themeButtonLink} href="/Slogan">
            <img className={homepagestyles.themeButtonImg} src="/images/theme.png" alt="テーマ" />
          </Link>
          <Link className={homepagestyles.stageButtonLink} href="/Event">
            <img className={homepagestyles.stageButtonImg} src="/images/schedule.png" alt="ステージ" />
          </Link>
          </div>

          {/* ニュース */}
          <h1 className={homepagestyles.sectionTitleNews}>おもしろニュース・動画</h1>
          {/* <p className={homepagestyles.sectionLinkMore}>More→</p> リンクがないので削除 */}
          <div className={homepagestyles.newsList}>
            <Link className={homepagestyles.newsLink1} href="/FunnyNews3">
              <img className={homepagestyles.newsImg1} src="/images/ニュース１.webp" alt="ニュース" />
            </Link>
            <Link className={homepagestyles.newsLink2} href="/FunnyNews4">
              <img className={homepagestyles.newsImg2} src="/images/ニュース３.webp" alt="ニュース" />
            </Link>
            <Link className={homepagestyles.newsLink3} href="/FunnyNews5">
              <img className={homepagestyles.newsImg3} src="/images/ニュース４.webp" alt="ニュース" />
            </Link>
            <Link className={homepagestyles.newsLink4} href="/FunnyNews6">
              <img className={homepagestyles.newsImg4} src="/images/ニュース２.webp" alt="ニュース" />
            </Link>
          </div>

          {/* 資料 */}

          <h1 className={homepagestyles.sectionTitleResources}>関連リンク</h1>
          <div className={homepagestyles.linkContain}>
          <a className={homepagestyles.pamphletButtonLink} href="https://drive.google.com/file/d/1q-YKIo3k598YFVQZ-vceEBWqzLGjgRYl/view?usp=drive_link">
            <img className={homepagestyles.pamphletButtonImg} src="/images/panphlet.png" alt="パンフレット" />
          </a>
          <a className={homepagestyles.instagramButtonLink} target="_blank" href="https://www.instagram.com/57th_seiko_fes/">
            <img className={homepagestyles.instagramButtonImg} src="/images/instagram.png" alt="Instagram" />
          </a>
          <a className={homepagestyles.mapButtonLink} href="https://maps.app.goo.gl/RfxvZGEXtikWGXi79?g_st=com.google.maps.preview.copy">
            <img className={homepagestyles.mapButtonImg} src="/images/map.png" alt="マップ" />
          </a>
          <Link className={homepagestyles.mysteryButtonLink} href="/OffShot">
            <img className={homepagestyles.mysteryButtonImg} src="/images/offshot.png" alt="???" />
          </Link>
          </div>

          {/* クレジット */}
          <h2 className={homepagestyles.creditBox}>
            [Credit]
            <br />
            Website Edit: Masaomi Hanazaki
            <br />
            Assist: Konata Sako
            <br />
            Produce: Haruki Ohta
            <br />
            Model: Tokimaru Uchida
          </h2>
        </div>
      </div>
    </div>
  );
}
