import PostCard from "../components/PostCard/PostCard";
import NewsList from "../components/NewsList/NewsList";

export default function FunnyNews6(){
    return(
        <div>
            <PostCard
            account = "ポスターデザイン完成"
            text = {
                <>
                <p>第５７回聖光祭のポスターが完成しました！！</p>
                <p>いやーこれは共鳴すごいことになっていますね</p>
                <p>ぜひ皆さんたくさん来てください</p>
                <p>[第５７回聖光祭]</p>
                <p>「『共鳴』〜鳴らす今、共に奏でる〜」</p>
                <p>9/27(土)&9/28(日)10:00~15:00</p>
                <p>@静岡聖光学院</p>
                </>
            }
            image="/images/IMG_2268.webp"
            date="午後17:43・2025年9月12日・87件の表示"
             />
        </div>
    )
}