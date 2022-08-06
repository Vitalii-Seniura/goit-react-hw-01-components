import user from './Profile/user.json';
import Profile from './Profile/Profile';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
import friends from "./FriendList/friends.json";
import FriendList from './FriendList/FriendList';
import transactions from "./Transactions/transactions.json";
import TransactionHistory from './Transactions/TransactionHistory';
import css from './Container.module.css';


export const App = () => {
  return (
    <div className={css.container}>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
