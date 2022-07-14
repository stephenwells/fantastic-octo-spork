import Head from "next/head";
import Nav from "../components/Nav";
import Mast from "../components/Mast";
import Merchandise from "../components/Merchandise";
import { merchData, rush } from "./api/merchandise";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Columbia Merch Shop!</title>
        <meta
          name="description"
          content="All your favorite's in one place... "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <Mast />
        <Merchandise data={merchData} />
      </main>
    </div>
  );
}

console.clear();

//Question #4
console.log("--- Question #4 ---");
const median = (arr) => {
  let left = 0;
  let right = arr.reduce((a, b) => a + b, 0); //sum of all values from array

  for (let i = 0; i < arr.length; i++) {
    right -= arr[i]; //subtract values
    if (left === right) return i; //if sum of left and right are equal, return array index of current value
    left += arr[i]; //add values
  }

  return -1;
};
console.log("[2, 3, 1, 7, 1, 4, 5, 4] =>", median([2, 3, 1, 7, 1, 4, 5, 4])); //-1
console.log("[9, 3, 1, 7, 4, 5] =>", median([9, 3, 1, 7, 4, 5])); //-1
console.log("[5, 7, 2, 4, 7, 2, 5] =>", median([5, 7, 2, 4, 7, 2, 5])); //3
console.log(
  "[12, 5, 4, 3, 4, 2, 1, 1, 17, 3] =>",
  median([12, 5, 4, 3, 4, 2, 1, 1, 17, 3])
);

//Question #5
console.log("--- Question #5 ---");
rush.forEach((person) => {
  console.log(
    `${person.name.first} ${person.name.last}: ${person.instruments}`
  );
});

//Question #6
console.log("--- Question #6 ---");
const match = (str, pattern) => {
  let regex;

  if (pattern === "*") {
    regex = /\\*/;
  } else if (/\?./.exec(pattern)) {
    /* https://regex101.com/r/sN8xFv/1
       Match a digit (\d) that is neither preceded nor followed by digit, 
       (?<!\d) being a negative lookbehind and (?!\d) being a negative lookahead 
    */
    regex = /(?<!\d)\d(?!\d)/gm;
  } else {
    console.log(`match('${str}', '${pattern}') == false`);
    return false;
  }

  const test = regex.test(str) ? true : false;
  console.log(`match('${str}', '${pattern}') == ${test}`);
};

match("my.exe", "*");
match("other.exe", "*");
match("my.exe", "*.txt");
match("log1.txt", "log?.txt");
match("log12.txt", "log?.txt");
