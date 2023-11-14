import Navbar from "@/ui/dashboard/Navbar/Navbar";
import Sidebar from "@/ui/dashboard/Sidebar/Sidebar";

import styles from '@/ui/dashboard/dashboard.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;