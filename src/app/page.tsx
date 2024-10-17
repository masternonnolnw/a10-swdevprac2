import CardPanel from "@/components/CardPanel";
import Banner from "../components/Banner";
import Card from "../components/Card";
import styles from "./page.module.css";
import PromoteCard from "@/components/PromoteCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <CardPanel />
      <PromoteCard />
    </div>
  );
}
