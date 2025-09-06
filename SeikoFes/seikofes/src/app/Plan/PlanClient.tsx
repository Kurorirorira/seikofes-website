"use client";
import Link from "next/link";
import planstyles from "./Plan.module.scss";
import { useState } from "react";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const gothic = Zen_Kaku_Gothic_New({
        weight: ['400', '700'],
        subsets: ['latin'],
    })

export default function Plan(){
    const [activeTab, setActiveTab] = useState("1F");
    const items1 = [
        {
            title: "タイトル",
            description: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、",
            image: "/images/ホーム画面.webp",
        },
    ];
    const items2 = [
        {
            title: "A SCL 「聖書研究会」",
            description: "①夏の黙想会報告②日常の研究報告③手作り石けん販売（ラルシュかなの家）",
            image: "/images/2F A 聖書研究会.webp"
        },
        {
            title: "B SCL 「わたげの会・同窓会」",
            description: "活躍する学校OBの展示や来校されたOBとその保護者の憩いの場です。ぜひ立ち寄りいただき、ごゆっくりと昔話に花を咲かせてください。",
            image: "/images/2F B わたげの会.webp",
        },
    ];
    const items3 = [
        {
            title: "A 中1学年ルーム 「ガンプラ展示会」",
            description: "メンバーが趣味で集めているガンプラをできるだけたくさん展示しています。またガンプラの製作体験会も実施するので是非一度足を運んでください。",
            image: "/images/3F A ガンプラ展示会.webp",
        },
        {
            title: "B 中1学年ルーム 「Rainbow☆Candy☆Cotton」",
            description: "高校テニス部が運営するわたあめ屋です！夢と希望とわたあめをお届けします！",
            image: "/images/3F B Rainbow⭐︎Candy⭐︎Cotton.webp",
        },
        {
            title: "C C1B 「Pancakes & Paws」",
            description: "ふわふわ焼き立てのパンケーキに、お好みのトッピングを自由にカスタマイズ！ホイップやチョコ、あなただけの”推しパンケーキ”を作って楽しんでください♪文化祭だけの特別な甘さをどうぞ。",
            image: "/images/3F C Pancakes & Paws.webp",
        },
        {
            title: "D C1C 「yellow bucks」",
            description: "昨年大盛況の「青春サイダー」が、今年は「yellow bucks」として華やかに復活！黄金のきらめきと共に、あの味が再び楽しめます！",
            image: "/images/3F D yellow bucks.webp",
        },
        {
            title: "E C1C 「Everyone love Board & card game cafe!!」",
            description: "とても読みにくいタイトルですみません。Everyone love Board & card game cafe!!です！！将棋から様々なボードゲームを取り揃えております。ドリンクも販売しているのでぜひ来てください。",
            image: "/images/3F E Everyone love board & card game cafe!!.webp",
        },
        {
            title: "F C2A 「ボボボーボ・ボーボ棒」",
            description: "棒状の商品を売ります。安くておいしいです。",
            image: "/images/3F F ボボボーボ・ボーボ棒.webp",
        },
        {
            title: "G C2B 「Starion」",
            description: "普段の聖光とは一味違う『夜の聖光』を体験してみませんか？Fantasticなドリンクを飲みながら、キラキラした僕たちと一緒に素敵な時間を過ごしませんか。Starionでお待ちしております。",
            image: "/images/3F G Starion.webp",
        },
        {
            title: "H C2B 「コスパラ！」",
            description: "ようこそ、非日常の世界へ！男子校の高校生がアニメキャラに大変身。女装も本気！推しが給仕する夢のひとときをぜひご堪能ください。写真撮影も大歓迎！あなたのご来店、お待ちしています。",
            image: "/images/3F H コスパラ！.webp",
        },
        {
            title: "I C2C 「射的」",
            description: "昔ながらのお祭り恒例行事！駄菓子などはもちろん、さまざまな豪華景品があります！是非遊びに来てください！",
            image: "/images/3F I 射的.webp",
        },
        {
            title: "J 中2自習室 「水中ドローン×環境問題」",
            description: "ドドンドンド水中ドローン。操縦体験やってます。水中ドローンって何かって？操縦体験やってます。VR体験もやってます。水中ドローンで撮った海中歩けます・環境問題考えてます。水中ドローン、やってます",
            image: "/images/3F J 水中ドローン×環境問題.webp",
        },
        {
            title: "K BIGIRION 「プログラミングFesta2025!!!」",
            description: "ロボットの競技や、部員が作ったゲームで遊べる体験ブース！プログラミングの楽しさをその場で実感しよう！",
            image: "/images/3F K プログラミングfesta2025!!!.webp",
        },
        {
            title: "L BIGIRION 「VR空間展示」",
            description: "普段の活動で制作したVR空間を、VRゴーグルで体験できます。今年は諸事情あって規模を縮小しての実施ですが、クオリティは過去一だと自負しています。老若男女誰でも楽しめること間違いなし！ぜひお越し下さい。",
            image: "/images/3F L VR空間展示.webp",
        },
        {
            title: "M 科学室 「目指せスピードスター☆彡」",
            description: "3つのミニゲームをクリアして速度を競うRTAゲーム",
            image: "/images/3F M 目指せスピードスター☆彡.webp",
        },
        {
            title: "N 自習室 「鉄道クラブ」",
            description: "本物そっくりの鉄道模型を展示中！見て楽しむのはもちろん、鉄道運転シュミレーター(BVE)で運転士気分も味わえます。鉄道グッズも展示中。気軽に遊びに来てください！",
            image: "/images/3F N 鉄道クラブ.webp",
        },
        {
            title: "O クリラボ1&2 「ビーストハウス」",
            description: "暗闇に潜む”先輩”があなたを待っている…。教室の奥から聞こえる声の正体は、あなたの想像を超える存在かもしれない。勇気のある者だけ、ビーストハウスへー来いよ",
            image: "/images/3F O ビーストハウス.JPG",
        },
        {
            title: "P クリラボ3 「不思議な美術館からの脱出」",
            description: "ようこそ久我恒星院と果物展へ、この展示では生前、独特な画風で有名になった久我の展示会となっております、一度入られますと脱出は困難なのでお気をつけ下さい、あなたのお越しをお待ちしております。",
            image: "/images/3F P 不思議な美術館からの脱出.webp",
        },
        {
            title: "Q K1C 「HOT BOYS」",
            description: "文化祭限定でオープンする私たちのカフェ「HOT BOYS」では、こだわりのホットサンド、見た目華やかなフルーツサンド、本格コーヒーを提供します！",
            image: "/images/3F Q HOT BOYS.webp",
        },
        {
            title: "R K1C 「BAR AfterClass」",
            description: "男子校の文化祭、とても楽しいですけどゆったりしたいと思いませんか？そんなあなたにおすすめ！カフェとはまた違う「大人っぽい雰囲気」でカクテルならぬモクテルでゆったりしませんか。",
            image: "/images/3F R BAR AfterClass.webp",
        },
        {
            title: "S K1B 「燕子花」",
            description: "大正ロマンと英国メイドがつくる、華やかな空間へようこそ。扉を開ければ、そこは大正時代の雰囲気とイギリスの優雅さがひとつになった別世界。英国メイドたちが心を込めておもてなしします。",
            image: "/images/3F S 燕子花.webp",
        },
        {
            title: "T K1A 「S&G (Smoothie and Gelateria)」",
            description: "スムージーとジェラートを提供しています。スムージーはミカンや桃などの果物、ジェラートは４つの異なる温度で焙煎したお茶のそれぞれの風味をゆっくりとお楽しみいただけます。ぜひお越しください。",
            image: "/images/3F T S&G (Smoothie and Gelateria).webp",
        },
        {
            title: "U K1A 「STARVALX」",
            description: "この企画は普段プロテインに縁がない人でもより身近に美味しく！楽しめるようになってほしいという願いを込めた思いからできた企画です。",
            image: "/images/3F U STARVALX.webp",
        },
        {
            title: "V 高1自習室 「ダーツ」",
            description: "ダーツやります！点数に応じて景品がもらえます。気軽にお立ち寄りください！",
            image: "/images/3F V ダーツ.webp",
        },
        {
            title: "W 3F踊り場 「南アルプス」",
            description: "南アルプスの魅力をポスターで提示しています。",
            image: "/images/3F W 南アルプス.webp",
        },
    ];
    const items4 = [
        {
            title: "A C3A 「SeikoMini4WD」",
            description: "ミニ四駆部の特徴を活かしコースを使った輪投げや体験、トーナメントを開催します。またガチャガチャなどスタンプラリーもやるので、ぜひお越しください！",
            image: "/images/4F A SeikoMini4WD.webp",
        },
        {
            title: "B C3B 「ストラボ！」",
            description: "テニス部の運営するミニゲーム屋です！高得点が取れれば景品があるかも！？是非遊びに来てください！",
            image: "/images/4F B ストラボ！.webp",
        },
        {
            title: "C C3B 「農学男子のススメ」",
            description: "後継者不足や地球温暖化の影響により厳しい課題に直面しているお茶産業。静岡の自然の恵みをより多くの人に親しんでもらうために「10秒チャレンジ」「お茶クイズ」「宝探し」など体験型のコーナーを企画しました。",
            image: "/images/4F C 農学男子のススメ.webp",
        },
        {
            title: "D C3C 「聖光農園」",
            description: "収穫した野菜の販売を行います！そのほか、日々の活動記録の展示、学校の茶畑で摘んだお茶の試飲を行っています！",
            image: "/images/4F D 聖光農園.webp",
        },
        {
            title: "E 中3自習室 「書道展」",
            description: "",
            image: "/images/4F E 書道展.webp",
        },
        {
            title: "F 物理室 「ドローン操縦体験」",
            description: "DJIフライトシュミレーターで操作方法を確認してから、実際のドローンを操縦できます、そのほかにも部員が所持しているドローンが展示されており、御覧いただけます。",
            image: "/images/4F F ドローン体験会.webp",
        },
        {
            title: "G 生物室 「聖光写真展」",
            description: "この企画は聖光生や先生方が普段撮っている写真などを展示しています。写真の魅力が皆さんにも伝わるような物も沢山あるので是非見に来て下さい！",
            image: "/images/4F G 聖光写真展.webp",
        },
        {
            title: "H 科学室 「MIIZU [H2O]」",
            description: "そもそも水ロケットを知らない人大歓迎！メンバーで行った水ロケット大会の映像と機体や開発段階の残骸など様々なものを展示、解説します！",
            image: "/images/4F H MIZU H2O.webp",
        },
        {
            title: "I 物理部室 「ここが”面”白い！剣道防具の秘密」",
            description: "剣道防具などの秘密を紹介、展示しています。",
            image: "/images/4F I ここが”面”白い！剣道防具の秘密.webp",
        },
        {
            title: "J K2C 「謎解き潜入ゲームLycoris」",
            description: "難攻不落の要塞をあなたは攻略できるか！？",
            image: "/images/4F J 謎解き潜入ゲームLycoris.webp",
        },
        {
            title: "K K2B 「俺のイタリアとブルネイ」",
            description: "イタリアで行われた模擬国連とブルネイで行われたサミットについてレポートにまとめて展示します。模擬国連やグローバルイシュー、イタリア、ブルネイに興味がある方ぜひ見に来てください。",
            image: "/images/4F K 俺のイタリアとブルネイ.webp",
        },
        {
            title: "L K2B 「僕のアメリカ留学体験」",
            description: "この企画では、僕がアメリカで経験したことや、文化の違い、まなび、日本との共通性、こんなんだったことをプレゼンします。また、Q&A、アドバイスなどを話します。",
            image: "/images/4F L 僕のアメリカ留学体験.webp",
        },
        {
            title: "M K2B 「パレスチナを覗いてみよう」",
            description: "パレスチナという国をご存じですか？パレスチナは、日本から国として認められていませんが、日本に似た所もあれば、違う所もあります。そのような場所で日々暮らしている人々がいることに、思いをはせてみませんか？",
            image: "/images/4F M パレスチナを覗いてみよう.webp",
        },
        {
            title: "N K2A 「ベイブレード体験」",
            description: "最新モデルのベイブレード「BEYBLADE X」を体験しよう！自分だけのオリジナルベイをカスタマイズして大熱狂のベイバトルに勝利しよう！！",
            image: "/images/4F N ベイブレード体験.webp",
        },
        {
            title: "O K2A 「シュワッと型抜き横丁」",
            description: "「夏祭りといえばこれ！」という雰囲気をぎゅっと詰め込んだ、型抜きとラムネのお店です。昔懐かしい型抜きや冷たいラムネは夏にぴったりで、挑戦の後にひと息つけば、夏祭りの楽しさをさらに感じられます。子供から大人まで、思いでと涼しさを一緒に楽しんでください。",
            image: "/images/4F O シュワっと型抜き横丁.webp",
        },
        {
            title: "P 高2自習室 「高2展示」",
            description: "聖光祭を運営している高2(53期生)の展示です！",
            image: "/images/4F P 53期展示.JPG",
        },
    ];
    const items5 = [
        {
            title: "A 美術室 「わくわく！げいじゅつの森！！」",
            description: "プラ板とビーズを使ってアクセサリーを作れます。",
            image: "/images/5F A わくわく芸術の森.webp",
        },
    ];
    const items6 = [
        {
            title: "・日本庭園 「mAcha」",
            description: "mAchaでーす❤生徒が作った器で抹茶と和菓子を楽しめまーす❤日本庭園です",
            image: "/images/日本庭園 mAcha.PNG",
        },
        {
            title: "・グリーンプラザ 「平和、求ム。」",
            description: "高校生一万人署名活動」戦後80年。被爆80年。戦争を知らないあなたは、戦争に対し、どう感じる？核兵器に対し、どう感じる？無関心でいいのか？あなたの名前をください。スイスの国連に届けます。平和の声を、頂けますか。",
            image: "/images/グリーンプラザ 「平和、求ム。」高校生一万人署名活動.PNG",
        },
    ]

    return (
        <div className={`${planstyles.planContainer} ${gothic.className}`}>
            <div className={planstyles.menu}>
                <button className={`${planstyles.button1} ${activeTab === "1F" ? planstyles.active : ""}`} onClick={() => setActiveTab("1F")}>1F</button>
                <button className={`${planstyles.button2} ${activeTab === "2F" ? planstyles.active : ""}`} onClick={() => setActiveTab("2F")}>2F</button>
                <button className={`${planstyles.button3} ${activeTab === "3F" ? planstyles.active : ""}`} onClick={() => setActiveTab("3F")}>3F</button>
                <button className={`${planstyles.button4} ${activeTab === "4F" ? planstyles.active : ""}`} onClick={() => setActiveTab("4F")}>4F</button>
                <button className={`${planstyles.button5} ${activeTab === "5F" ? planstyles.active : ""}`} onClick={() => setActiveTab("5F")}>5F</button>
                <button className={`${planstyles.button6} ${activeTab === "out" ? planstyles.active : ""}`} onClick={() => setActiveTab("out")}>外</button>
                <Link className={planstyles.backLink} href="/">
                    <p className={planstyles.back}>戻る</p>
                </Link>
            </div>
            <div className={planstyles.content}>
                {activeTab === "1F" && items1.map((item1, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item1.image} alt={item1.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item1.title}</h2>
                            <p>{item1.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "2F" && items2.map((item2, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item2.image} alt={item2.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item2.title}</h2>
                            <p>{item2.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "3F" && items3.map((item3, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item3.image} alt={item3.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item3.title}</h2>
                            <p>{item3.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "4F" && items4.map((item4, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item4.image} alt={item4.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item4.title}</h2>
                            <p>{item4.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "5F" && items5.map((item5, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item5.image} alt={item5.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item5.title}</h2>
                            <p>{item5.description}</p>
                        </div>
                    </div>
                ))}
                {activeTab === "out" && items6.map((item6, index) => (
                    <div key={index} className={planstyles.card}>
                        <div className={planstyles.imagearea}>
                            <img src={item6.image} alt={item6.title} />
                        </div>
                        <div className={planstyles.textarea}>
                            <h2>{item6.title}</h2>
                            <p>{item6.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}