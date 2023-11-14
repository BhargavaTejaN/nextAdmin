import styles from '@/ui/dashboard/dashboard.module.css';
import Rightbar from '@/ui/dashboard/Rightbar/Rightbar';
import Transactions from '@/ui/dashboard/Transactions/Transactions';
import Card from '@/ui/dashboard/Card/Card';
import Chart from '@/ui/dashboard/Chart/Chart';
import {Cards} from '@/constants/Cards';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {Cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
};

export default Dashboard;