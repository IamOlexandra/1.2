import logo from './logo.svg';
import './App.css';
import NameTitle from './components/NameTitle';
import WelcomeText from './components/WelcomeText';
import Image from './components/Image';
import Link from './components/Link';
import SumText from './components/SumText';
import ColorList from './components/ColorList';

const myName = "Ole",
  favWebsite = {name: "SCP wiki", url: "https://scp-wiki.wikidot.com"},
  colors = ["Чорний", "Сірий", "Білий", "Фіолетовий"];

function App() {
  return (
    <>
      <NameTitle name={myName}/>
      <WelcomeText/>
      <Image src="https://preview.redd.it/this-bad-taxidermy-of-a-cat-v0-pp27bhgolctc1.jpeg?auto=webp&s=0f17f48534a5b2f0241b88126e0d78415b3b75f0" alt="Bad taxidermy of a cat"/>
      <Link href={favWebsite.url} text={favWebsite.name}/>
      <SumText num1={52} num2={614}/>
      <ColorList array={colors}/>
    </>
  );
}

export default App;