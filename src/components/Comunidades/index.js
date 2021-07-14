import { ProfileRelationsBoxWrapper } from '../ProfileRelations'; 

export default function ComunidadesMain(prop) {
    const item = prop.comunidades;
    const total = item.length;  
    return (
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          comunidades ({total})
        </h2>
        <ul>
  
          {item.slice(0,6).map((i) => {
            return (
              <li key={i.id}>
                <a href={`/users/${i.title}`}>
                  <img src={i.image}></img>
                  <span>{i.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
    )
  }