import EventClient from "./EventClient";

export const metadata = {
    title: 'イベント情報',
    description: 'イベントの詳細情報が載っているよ',
};

export default function Event() {
    return <EventClient />;
}