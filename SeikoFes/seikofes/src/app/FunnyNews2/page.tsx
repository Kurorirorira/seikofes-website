import NewsList from "../components/NewsList/NewsList";
import PostCard from "../components/PostCard/PostCard";

export default function FunnyNews2(){
    return(
        <div>
            <PostCard
            account = "ポスター完成する"
            text = "ついに聖光祭のポスターが完成しました"
            image = "/images/ホーム画面.webp"
            date = "午前10:01・2025年8月25日・87件の表示"
             />
            <NewsList
            image1 = "/images/見出し素材「ニュース」.webp"
            href1 = "/"
            image2 = "/images/見出し素材「ニュース」.webp"
            href2 = "/"
            image3 = "/images/見出し素材「ニュース」.webp"
            href3 = "/"
             />
        </div>
    )
}