import PostCard from "../components/PostCard/PostCard";
import NewsList from "../components/NewsList/NewsList";

export const metadata = {
    title: "おもしろニュース",
    description: "面白いニュースが載っているよ",
};

export default function FunnyNews3(){
    return(
        <div>
            <PostCard
            account = "「ホームページ完成！」"
            text = {
                <>
                <p>第57回聖光祭のホームページが完成しました！</p>
                <p>念願です！！</p>
                <p>各企画についての詳細、スローガンについて、ステージイベント、最新のニュースなどすべての情報がこのHPから見られます！！</p>
                <p>実は隠しコマンド的な要素もあります...</p>
                <p>いろんなところ押してみつけてみて！！</p>
                </>
            }
            image = "/images/FunnyNewsImage2.jpeg"
            date = "午後16:56・2025年9月10日・87件の表示"
            icon = "/images/アイコン.webp"
            />
        </div>
    )
}