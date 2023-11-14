import Image from "next/image";
import { MdLogout } from "react-icons/md";

import styles from "./sidebar.module.css";
import {menuItems} from '@/constants/MenuLinks';
import MenuLink from "./menuLink/MenuLink";
import { auth,signOut } from "@/app/auth";

const Sidebar = async() => {

  const {user} = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.user}
          src={'/noavatar.png'}
          alt="userImg"
          width="50"
          height="50" 
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.username}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((each) => (
          <li key={each.title}>
            <span className={styles.cat}>{each.title}</span>
            {each.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>

    </div>
  )
};

export default Sidebar;