import PostCard from "../components/PostCard/PostCard";
import PostCard2 from "../components/PostCard2/PostCard2";
import NewsList from "../components/NewsList/NewsList";

export default function FunnyNews5(){
    return(
        <div>
            <PostCard2
            account = "「新型コロナ対策を開始！」"
            text = {
                <>
                <p>現在、新型コロナウイルスの新変異株「ニンバス」が九州で流行しており、日本列島の南西方面から感染が広がり９月の中旬には関東にも感染の波が押し寄せると予想されています。</p>
                <p>そこで僕たち風紀部門は聖光祭に向けて、生徒たちへ手洗いうがいやマスクでの予防をするよう周知しています！</p>
                <p>元気に聖光祭当日を迎えることができるように、気をつけて残りの日にちを過ごしましょう！</p>
                </>
            }
            image1 = "images/IMG_2264.webp"
            image2="images/IMG_2265.webp"
            date = "午後16:05・2025年9月16日・87件の表示"
             />
             {/* <NewsList
             image1="/images/ニュース２.webp"
             href1="/FunnyNews2"
             image2="/images/ニュース３.webp"
             href2="/FunnyNews4"
             image3="/images/ニュース１.webp"
             href3="/FunnyNews3"
              /> */}
        </div>
    )
}