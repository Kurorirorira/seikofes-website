import newsliststyles from "./NewsList.module.scss";
import Link from "next/link";

type NewsListProps = {
    image1: string;
    href1: string;
    image2: string;
    href2: string;
    image3: string;
    href3: string;
    image4?: string;
    href4?: string;
}

export default function NewsList({
    image1,
    href1,
    image2,
    href2,
    image3,
    href3,
    image4,
    href4,
}: NewsListProps){
    return(
        <div className={newsliststyles.newslistcontainer}>
            <Link className={newsliststyles.image1Link} href={href1}>
                <img className={newsliststyles.image1} src={image1} alt="他のニュースへ" />
            </Link>
            <Link className={newsliststyles.image2Link} href={href2}>
                <img className={newsliststyles.image2} src={image2} alt="他のニュースへ" />
            </Link>
            <Link className={newsliststyles.image3Link} href={href3}>
                <img className={newsliststyles.image3} src={image3} alt="他のニュースへ" />
            </Link>
            {image4 && 
                <Link className={newsliststyles.image4Link} href={href4}>
                    <img className={newsliststyles.image4} src={image4} alt="他のニュースへ" />
                </Link>
            }
        </div>
    )
}