import s from "./Profile.module.css";
const Profile = ({name, tag, location, image, stats}) => {

return <div>
    <div className= {s["profile-box"]}>
        
        <img className={s.icon}
            src= {image}
            alt="User avatar"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
        </div>
        
        <ul className={s["stats-list"]}>
            <li className={s["stats-item"]}>
                <span className={s["item-text"]}>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li className={s["stats-item"]}>
                <span className={s["item-text"]}>Views</span>
                <span>{stats.views}</span>
            </li>
            <li className={s["stats-item"]}>
                <span className={s["item-text"]}>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    
        </div>
        
    }
    export default Profile;