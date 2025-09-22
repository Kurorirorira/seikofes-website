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
          <img className={picturestyles.onsa} src="/images/音叉.webp  " alt="おみくじを引く" style={{ cursor: "pointer", width: "200px"}} />
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
         <div className={backgroundstyles.griditem}> 
            <Link className={homepagestyles.img1aLink} href="/Plan">
              <img className={homepagestyles.img1a} src="/images/ボタン「企画一覧」ホーム用.webp" alt="企画一覧" />
            </Link>
            <Link className={homepagestyles.img1bLink} href="/Slogan">
              <img className={homepagestyles.img1b} src="/images/ボタン「テーマ」ホーム用.webp" alt="テーマ" />
            </Link>
            <Link className={homepagestyles.img1cLink} href="/Event">
              <img className={homepagestyles.img1c} src="/images/ボタン「ステージ」ホーム用.webp" alt="ステージ" />
            </Link>
            <h1 className={homepagestyles.textA}>おもしろニュース・動画</h1>
            <p className={homepagestyles.textAA}>More→</p>
            <div className={homepagestyles.linkContainer}>
              <Link className={homepagestyles.img2aLink} href="/FunnyNews3">
                <img className={homepagestyles.img2a} src="/images/ニュース１.webp" alt="ニュース" />
              </Link>
              <Link className={homepagestyles.img2bLink} href="/FunnyNews4">
                <img className={homepagestyles.img2b} src="/images/ニュース３.webp" alt="ニュース" />
              </Link>
              <Link className={homepagestyles.img2cLink} href="/FunnyNews5">
                <img className={homepagestyles.img2c} src="/images/ニュース４.webp" alt="ニュース" />
              </Link>
              <Link className={homepagestyles.img2dLink} href="/FunnyNews6">
                <img className={homepagestyles.img2d} src="/images/ニュース２.webp" alt="ニュース" />
              </Link>
            </div>
            <h1 className={homepagestyles.textB}>資料</h1>
            <a className={homepagestyles.img3aLink} href="https://drive.google.com/file/d/1q-YKIo3k598YFVQZ-vceEBWqzLGjgRYl/view?usp=drive_link" >
              <img className={homepagestyles.img3a} src="/images/ボタン「パンフレット」ホーム用.webp" alt="パンフレット" />
            </a>
            <a className={homepagestyles.img3bLink} target="_blank" href="https://wwwinstagram.com/57th_seiko_fes/">
              <img className={`${homepagestyles.img3b} ${homepagestyles.img3bLink}`} src="/images/ボタン「Instagram」ホーム用.webp" alt="Instagram" />
            </a>
            <a className={homepagestyles.img3cLink} href="https://maps.app.goo.gl/RfxvZGEXtikWGXi79?g_st=com.google.maps.preview.copy">
              <img className={homepagestyles.img3c} src="/images/マップボタン.webp" alt="マップ" />
            </a>
            <Link className={homepagestyles.img3dLink} href="/OffShot">
            <img className={homepagestyles.img3d} src="/images/ボタン「？？？」.webp" alt="???" />
            </Link>
            <h2 className={homepagestyles.textC1}>
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