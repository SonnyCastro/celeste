import styles from "./index.module.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterVideoEmbed,
} from "react-twitter-embed";
import Image from "next/image";

function Tweets() {
  return (
    <div>
      <h1 className={styles.test}>Crypto Twitter</h1>
      <Image
        src="/line.svg"
        alt="logo"
        width={100}
        height={10}
        layout="responsive"
      />
      {/* <TwitterTweetEmbed sourceType="profile" tweetId="1384194944651337728" options={{width: 400}} /> */}
      <div className={styles.center}>
        <TwitterTweetEmbed
          sourceType="profile"
          tweetId="1370142150449639432"
          options={{ width: 250 }}
        />
        <TwitterTweetEmbed
          sourceType="profile"
          tweetId="1370142150449639432"
          options={{ width: 250 }}
        />
        <TwitterTweetEmbed
          sourceType="profile"
          tweetId="1370142150449639432"
          options={{ width: 250 }}
        />
      </div>
    </div>
  );
}

export default Tweets;
