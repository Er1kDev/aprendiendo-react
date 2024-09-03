// Hooks permiten anadir funcionalidades a componentes de react 
import { useState } from "react" // permite guardar el estado de un componente


export function TwitterFollowCard({ children, userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="avatar de midudev" />
                <div className='tw-followCard-info'>
                    {children}
                    <span className='tw-followCard-infoUsername'>{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    <span className="tw-followCard-text">{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}