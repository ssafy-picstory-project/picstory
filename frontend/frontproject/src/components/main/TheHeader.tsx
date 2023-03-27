import styles from '../../assets/css/TheHeader.module.css'
import { colorAtom, menuState } from '../../atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import menuIcon from '../../assets/menu.png'

const TheHeader = () => {
  const navigation = useNavigate()
  const color = useRecoilValue(colorAtom)
  const setMenu = useSetRecoilState(menuState)
  
  // 로그아웃
  const logout =()=>{
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  navigation('/')
  }

  return (
    <header className={`${styles['header']} ${styles[color]}`}>
      <div className={styles.contents}>
        <div
          className={styles.logo}
          onClick={() => {
            navigation('/')
          }}
          >
          picstory
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li
              className={styles.list}
              onClick={logout}
              >
              Logout
            </li>
            <li className={styles.list} onClick={() => {}}>
              MyInfo
            </li>
            <li
              className={styles.list}
              onClick={() => {
                navigation('/library')
              }}
            >
              이야기들
            </li>
            <li
              className={styles.list}
              onClick={() => {
                navigation('/vocabulary')
              }}
            >
              단어장
            </li>
            <li
              onClick={() => {
                setMenu(true)
              }}
            >
              <img
                src={menuIcon}
                className={styles.menuIcon}
                width={30}
                alt=""
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default TheHeader
