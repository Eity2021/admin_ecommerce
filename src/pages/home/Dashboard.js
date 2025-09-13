import Cards from "./Cards";
import Charts from "./Charts";
import HomeRecentOrdersList from "./HomeRecentOrdersList";

export default function Dashboard() {
  return (
    <div>
      <Cards></Cards>
      <Charts></Charts>
      <HomeRecentOrdersList></HomeRecentOrdersList>
    </div>
  );
}
