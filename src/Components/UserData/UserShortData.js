import classes from './UserShortData.module.css';
const UserShortData = props => {
  const deleteIsLoggedInKey = () =>{
    localStorage.removeItem('isLoggedIn');
  }
  
    return (
      <div className={classes['profile-detail']}>
        <ul className={classes['profile-list']}>
          <li>{props.userData.email}</li>
          <li>Change Password</li>
          <li onClick={deleteIsLoggedInKey}>Log Out</li>
        </ul>
      </div>
    );
}
export default UserShortData;