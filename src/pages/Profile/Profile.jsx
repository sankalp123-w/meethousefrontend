import React from 'react';
import styles from './Profile.module.css';
import { useSelector } from 'react-redux';
export default function Profile() {

    const userdta = useSelector((state) => state.auth.user)
    return (<div className="container">
        <div className={styles.roomsHeader}>
            <div className={styles.left}>
                <span className={styles.heading}>Profile</span>

            </div>
        </div>

        <div className={styles.usercnt}>
        <div className={styles.userdta}>
                                <div className={styles.userHead}>
                                  
                                    <img
                                        className={styles.userAvatar}
                                        src={userdta.avatar}
                                        alt="avatar"
                                    />

                                  
                                </div>
                               <div> <h4 className={styles.name}>{userdta.name}</h4></div>
                              
                              
                              <div className={styles.buttondiv}><button className={styles.button}>
                            <span>Follow</span>
                             </button></div> 
                            </div>
            
            <div className={styles.rectangle}>
                  <div className={styles.follower}>
                      <h2 className={styles.flow}>5B</h2>
                      <small className={styles.small}>Followers</small>
                  </div>
              <div className={styles.following}>
              <h2 className={styles.flow}>0</h2>
                      <small  className={styles.small}>Following</small>

              </div>
            </div>
            </div>

            <div className={styles.bio}>
            Full-stack Software Developer and Javascript Enthusiast, Who Loves Building Things In Javascript. 🔥 👨🏽‍💻🏅
            </div>

     
            
        </div>

    )


        ;
}
