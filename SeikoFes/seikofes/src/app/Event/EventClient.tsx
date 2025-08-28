"use client";
import eventstyles from './Event.module.scss';
import Link from 'next/link';

export default function Event(){
    const items1 = [
        {
            title: "タイトル",
            description: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、",
            image: "/images/FirstView.png",
        },
        {
            title: "タイトル",
            description: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、",
            image: "/images/FirstView.png",
        },
    ];

    const items2 = [
        {
            title: "タイトル",
            description: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字",
            image: "/images/FirstView.png",
        },
        {
            title: "",
            description: "",
            image: "/images/FirstView.png",
        },
    ]

    return (
        <div className={eventstyles.eventContainer}>
            <h1 className={eventstyles.date1}>9/28</h1>
            {items1.map((item1, index) => (
                <div key={index} className={eventstyles.card}>
                    <div className={eventstyles.textarea}>
                        <h2>{item1.title}</h2>
                        <p>{item1.description}</p>
                    </div>
                    <div className={eventstyles.imagearea}>
                        <img src={item1.image} alt={item1.title} />
                    </div>
                </div>
            ))}
            <h1 className={eventstyles.date2}>9/29</h1>
            {items2.map((item2, index) => (
                <div key={index} className={eventstyles.card}>
                    <div className={eventstyles.textarea}>
                        <h2>{item2.title}</h2>
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