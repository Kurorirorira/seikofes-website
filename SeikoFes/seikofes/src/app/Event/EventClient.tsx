"use client";
import eventstyles from "./Event.module.scss";
import Link from "next/link";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { title } from "process";

const gothic = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Event() {
  const items1 = [
    {
      title: "ゴッドタレント",
      description:
        "世界の大人気バラエティ、聖光学院に上陸！？ダンス・漫才・合唱・筋肉など様々な聖光選りすぐりの”才能”が集結し、王者を決めます。豪華審査員と一緒に観客全員で才能をジャッジします！君の一票がスターを作るかもしれない...",
      image: "/images/シーケンス 01.00_00_01_11.静止画002.webp",
      date: "体育館 10:30→12:00",
    },
    {
      title: "ROCK'IN SEIKO [歌ウマ編]",
      description:
        "毎年恒例聖光イチの歌唱力決定戦の歌うまコンテスト！様々な学年から集まった「のど自慢」が美声を披露します。マイク一本でステージに立つ勇気と自信観客も審査員の一員として聖光を代表するシンガーを決めます！",
      image: "/images/見出 2-2.webp",
      date: "体育館 12:30~",
    },
    {
      title: "ROCK'IN SEIKO [バンド編]",
      description:
        "文化祭の華、文化祭ライブ！！覚悟を決めた生徒たちが体育館中を爆音で埋め尽くします。爆音のギター、うねるベース、弾けるベース、叫ぶボーカルが一つになります！",
      image: "/images/シーケンス 01.00_00_06_16.静止画003.webp",
      date: "体育館 ~15:00",
    },
  ];

  const items2 = [
    {
      title: "吹奏楽部 ON Stage",
      description:
        "どんなイベント？毎年恒例の吹奏楽部による豪華演奏会！！一年に一回の大舞台、今年も素晴らしい演奏が聖光祭を彩ります。ココがおもろい！当たり前ですが「男子のみ」で構成されている吹奏楽部。繊細かつ迫力のあるサウンドが魅力です。",
      image: "/images/見出 2-3.webp",
      date: "体育館(トリニティアリーナ) 10:30",
    },
    {
      title: "セイコービューティーコレクション",
      description:
        "どんなイベント？成功祭の伝統が今年も帰ってきた！！今年は本格的な美の追求にパワーアップ！！「美しい」に性別は関係ない。ココがおもろい！毎年工夫を凝らして自分なりの「カワイイ」を追求する生徒たち。今年は誰が美の頂点の座を掴むのか！！",
      image: "/images/シーケンス 01.00_00_12_04.静止画004.webp",
      date: "体育館(トリニティアリーナ) 13:00→15:00",
    },
  ];

    return (
        <div className={`${eventstyles.eventContainer} ${gothic.className}`}>
            <h1 className={eventstyles.date1}>9/27</h1>
            {items1.map((item1, index) => (
                <div key={index} className={eventstyles.card}>
                    <div className={eventstyles.textarea}>
                        <div className={eventstyles.textflex}>
                            <h2>{item1.title}</h2>
                            <h1 className={eventstyles.date}>{item1.date}</h1>
                        </div>
                        <p>{item1.description}</p>
                    </div>
                    <div className={eventstyles.imagearea}>
                        <img src={item1.image} alt={item1.title} />
                    </div>
                </div>
            ))}
            <h1 className={eventstyles.date2}>9/28</h1>
            {items2.map((item2, index) => (
                <div key={index} className={eventstyles.card}>
                    <div className={eventstyles.textarea}>
                        <div>
                            <h2>{item2.title}</h2>
                            <h1 className={eventstyles.date}>{item2.date}</h1>
                        </div>
                        <p>{item2.description}</p>
                    </div>
                    <div className={eventstyles.imagearea}>
                        <img src={item2.image} alt={item2.title} />
                    </div>
                </div>
            ))}
            <Link className={eventstyles.backLink} href="/">
              <p className={eventstyles.back}>戻る</p>
            </Link>
        </div>
    )

}
