import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Estudando agora',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Quero aprender',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Já aprendi',
      cor: '#DB6EBF'
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'React',
      cargo: 'Biblioteca para construção de interfaces',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      time: 'Estudando agora'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JavaScript',
      cargo: 'Linguagem de programação para web',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      time: 'Estudando agora'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Node.js',
      cargo: 'Runtime JavaScript para backend',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      time: 'Estudando agora'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Docker',
      cargo: 'Containerização de aplicações',
      imagem: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
      time: 'Quero aprender'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'AWS',
      cargo: 'Cloud computing da Amazon',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      time: 'Quero aprender'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Git',
      cargo: 'Controle de versão',
      imagem: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      time: 'Já aprendi'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'xUnit',
      cargo: 'Framework de testes para .NET',
      imagem: 'https://avatars.githubusercontent.com/u/2092016?s=200&v=4',
      time: 'Já aprendi'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'C#',
      cargo: '.NET Programming Language',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
      time: 'Já aprendi'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Azure DevOps',
      cargo: 'Ferramenta de CI/CD e gestão de projetos',
      imagem: 'https://tse3.mm.bing.net/th/id/OIP.Ij5iBo3vcJwsSpgJsGR2YAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      time: 'Já aprendi'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'HTML',
      cargo: 'Linguagem de marcação para estruturar páginas web',
      imagem: 'https://img.icons8.com/fluent/1200/html-5.jpg',
      time: 'Já aprendi'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CSS',
      cargo: 'Linguagem para estilização de páginas web',
      imagem: 'https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp',
      time: 'Já aprendi'
    }
  ];

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Tecnologias</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
    </div>
  );
}

export default App;