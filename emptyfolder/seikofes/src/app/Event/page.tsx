import eventstyles from './Event.module.scss';
import Link from 'next/link';

export default function event(){
    return (
        <div className={eventstyles.eventContainer}>
            <h1 className={eventstyles.date1}>9/28</h1>
            <div className={eventstyles.eventDetails}>
                <h2 className={eventstyles.title}>タイトル</h2>
                <p className={eventstyles.text}>テキスト</p>
                <img className={eventstyles.images} src="/images/FirstView.png" />
            </div>
            <h1 className={eventstyles.date2}>9/29</h1>
            <Link className={eventstyles.backLink} href="/">
              <p className={eventstyles.back}>戻る</p>
            </Link>
        </div>
    )
}