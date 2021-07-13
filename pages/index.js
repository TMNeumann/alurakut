import Maingrid from '../src/components/Main'
import Box from '../src/components/Box/'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(prop) {
  return (
    <Box>
      <img src={`https://github.com/${prop.gitHubUser}.png`}/>
    </Box>
  )
}

export default function Home() {
  const gitHubUser = 'tmneumann';
  const pessoasFavoritas = [
    'juunegreiros', 
    'rafaballerini',
    'omariosouto', 
    'peas',  
    'marcobrunodev',
    'dosantosbjj'
  ];

  return (
    <div>
      <AlurakutMenu />
      <Maingrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar gitHubUser={gitHubUser}/>        
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
            Bem Vindo(a)
            </h1>

            <OrkutNostalgicIconSet>

            </OrkutNostalgicIconSet>
          </Box>
        </div>
        <div className="profileRealationsArea" style={{gridArea: 'profileRealationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((ItemAtual) => {
                return (
                  <li>
                    <a href={`/users/${ItemAtual}`} key={ItemAtual}>
                      <img src={`https://github.com/${ItemAtual}.png`}></img>
                      <span>{ItemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </Maingrid>
    </div>
  )
}
