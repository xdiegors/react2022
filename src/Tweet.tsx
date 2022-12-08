type TweetProps = {
    text: string;
    numero?: number;
}

export function Tweet(props: TweetProps) {
    return (
        <div>
        <p>{props.text} e {props.numero}</p>
            </div>
    );
}