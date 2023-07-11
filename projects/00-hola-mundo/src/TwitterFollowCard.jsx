export function TwitterFollowCard({name, username}){
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${username}`} alt="avatar" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{username}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    seguir
                </button>
            </aside>
      </article>
    )
}