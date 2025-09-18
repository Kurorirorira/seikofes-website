import PostCard from "../components/PostCard/PostCard";
import PostCard2 from "../components/PostCard2/PostCard2";
import NewsList from "../components/NewsList/NewsList";

export default function FunnyNews4(){
    return(
        <div>
            <PostCard
            account="パンフレットができました！"
            text={
                <>
                <p>今年度の聖光祭のパンフレットが完成しました！！！</p>
                <p>このホームページの「パンフレット」のボタンからご自由に見れます！</p>
                <p>昨年まではプロの方に製作をお願いしていましたが、今年は「生徒が作った方がより気持ちが伝わるのではないか」と思い、完全生徒編集です！！努力の結晶！！</p>
                <p>初のリバーシブル表紙で、裏表紙のイラストは増田学哉くんが描いてくれました。本当に素晴らしいです。</p>
                <p>当日来場時に紙でも貰っていただけるとうれしいです！！！</p>
                </>
            }
            image="/images/IMG_2268.webp"
            date="21:24・2025年9月10日・87件の表示"
             />
        </div>
    )
}