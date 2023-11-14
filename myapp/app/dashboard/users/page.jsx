import Link from 'next/link';
import Image from 'next/image';

import styles from '@/ui/dashboard/Users/users.module.css';
import Search from '@/ui/dashboard/Search/Search';
import Pagination from '@/ui/dashboard/Pagination/Pagination';
import { fetchUsers } from '@/lib/data';
import { deleteUser } from '@/lib/actions/userActions';

const UsersPage = async({searchParams}) => {

  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;

  const {users,count} = await fetchUsers(q,page);
  //console.log("users : ",users);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search For A User" />
        <Link href="/dashboard/users/add">
          <button
            className={styles.addButton}
          >
            Add New User
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
              <div className={styles.user}>
                <Image
                  src={user.img || '/noavatar.png'}
                  alt="userImg"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                {user.username}
              </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>            
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
};

export default UsersPage;