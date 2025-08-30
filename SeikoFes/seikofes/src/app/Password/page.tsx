"use client";
import { useState } from "react";
import passwordstyles from "./Password.module.scss";

export default function SecretPage() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const PASSWORD = "2468";

  const handleNumberClick = (num: string) => {
    if (input.length < PASSWORD.length) {
      setInput(input + num);
    }
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCheck = () => {
    if (input === PASSWORD) {
      setUnlocked(true);
    } else {
      alert("数字が違います！");
      setInput("");
    }
  };

  return (
    <main className={passwordstyles.page}>
      {unlocked ? (
        <div className={passwordstyles.secretContent}>
          <h1>隠しページへようこそ！</h1>
          <p>ここに秘密のコンテンツを置けます。</p>
          <img src="/images/secret.webp" alt="秘密" />
        </div>
      ) : (
        <div className={passwordstyles.lockScreen}>
          <h2>パスワードを入力してください</h2>
          <div className={passwordstyles.display}>
            {"*".repeat(input.length)}
          </div>

          <div className={passwordstyles.keypad}>
            {[..."123456789"].map((num) => (
              <button key={num} onClick={() => handleNumberClick(num)}>
                {num}
              </button>
            ))}
            <button onClick={handleBackspace}>←</button>
            <button onClick={() => handleNumberClick("0")}>0</button>
            <button className={passwordstyles.okButton} onClick={handleCheck}>OK</button>
          </div>
        </div>
      )}
    </main>
  );
}
