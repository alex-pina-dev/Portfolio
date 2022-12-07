import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Alex Pina</h1>
    <p>I'm a web developer based in Zaragoza, Spain.
     I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
     I have been training myself, but I am currently studying a fullstack web developer bootcamp in Neoland. Besides, I am working as a QA Tester in Hiberus.</p>
    <a href="mailto:alexpina25@gmail.com">Say hi →</a>
    </section>`;
};
