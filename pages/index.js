import React from 'react';
import Maingrid from '../src/components/Main'
import Box from '../src/components/Box/'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import ComunidadesMain from '../src/components/Comunidades';
import AmigosMain from '../src/components/Amigos';

function ProfileSideBar(proppriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${proppriedades.gitHubUser}.png`}/>
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${proppriedades.gitHubUser}`}>
          @{proppriedades.gitHubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault></AlurakutProfileSidebarMenuDefault>
    </Box>
  )
}


export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '',
    title: 'Eu adoro acordar cedo',
    image: 'https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2019/08/09144134/acordar-cedo.jpg'
  }]);
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
      <AlurakutMenu githubUser ={gitHubUser} />
        
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

          <Box>
            <h2 className="subTitle">O que voce deseja fazer?</h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              const dadosDoForm = new FormData(e.target);
              let img;
              if(dadosDoForm.get('image')){
                img = dadosDoForm.get('image')
              }else{
                img = 'https://picsum.photos/200/300';
              }
              const comunidade = {
                id: new Date().toISOString,
                title: dadosDoForm.get('title'),
                image: img
              }
              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas)
              console.log(comunidades)
            }}>
              <div>
                <input 
                  placeholder="qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRealationsArea" style={{gridArea: 'profileRealationsArea'}}>
          
          <ComunidadesMain comunidades={comunidades} />

          <AmigosMain amigos={pessoasFavoritas} />

        </div>
      </Maingrid>
    </div>
  )
}
