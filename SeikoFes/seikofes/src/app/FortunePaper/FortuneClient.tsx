"use client";
import { useState, useEffect } from "react";
import styles from "./FortunePaper.module.scss";
import Link from "next/link";
import {Zen_Kaku_Gothic_New} from "next/font/google";

const gothic = Zen_Kaku_Gothic_New({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function FortuneClient() {
  const maxcount = 3;
  const [result, setResult] = useState("");
  const [count, setCount] = useState(maxcount);

  useEffect(() =>{
    const savedcount = localStorage.getItem("omikujicount");
    if (savedcount !== null  && !isNaN(Number(savedcount))) {
      setCount(Number(savedcount));
    } else {
      setCount(maxcount);
    }
  }, []);

  const handleClick = () => {
    if (count <= 0) return;

    const rand = Math.random();
    let omikuji = "";
    if (rand < 0.1) omikuji = "大吉";
    else if (rand < 0.4) omikuji = "中吉";
    else if (rand < 0.9) omikuji = "小吉";
    else omikuji = "凶";

    setResult(omikuji);
    const newcount = count - 1;
    setCount(newcount);
    localStorage.setItem("omikujicount", newcount.toString());
  };

  const handleReset = () => {
    setCount(maxcount);
    localStorage.setItem("omikujicount", maxcount.toString());
    setResult("");
  }

  return (
    <>
    <div className={`${styles.fortunecontainer} ${gothic.className}`}>
      <h1>おみくじを引いてね</h1>
      <button className={styles.omikujibutton} onClick={handleClick} disabled={count <= 0}>
        おみくじを引く
      </button>
      {result && <p className={styles.resulttext}>結果:{result}</p>}
      <p className={styles.omikujicount}>残り回数:{count}回</p>
      {count <= 0 &&(
        <button className={styles.resetbutton} onClick={handleReset}>回数をリセット</button>
      )}
      <Link className={styles.backlink} href={"/"}>
        <p>戻る</p>
      </Link>
    </div>
    </>
  );
}