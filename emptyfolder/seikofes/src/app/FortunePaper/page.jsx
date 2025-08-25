import FortuneClient from "./FortuneClient";

export const metadata = {
  title: 'おみくじ',
  description: 'おみくじを引いて運試し！',
};

export default function FortunePaper() {
  return <FortuneClient />;
}