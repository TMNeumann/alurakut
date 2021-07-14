import { ProfileRelationsBoxWrapper } from '../ProfileRelations'; 

export default function AmigosMain(prop) {
    const item = prop.amigos;
    const total = item.length;  
    return (
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({total.length})
            </h2>
            <ul>
              {item.slice(0,6).map((ItemAtual) => {
                return (
                  <li key={ItemAtual}>
                    <a href={`/users/${ItemAtual}`} >
                      <img src={`https://github.com/${ItemAtual}.png`}></img>
                      <span>{ItemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
        </ProfileRelationsBoxWrapper>
    )
  }