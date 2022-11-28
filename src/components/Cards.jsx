import { Subtitulo } from "./Subtitulo";
import { Texto } from "./Texto";
import { Imagem } from "./Imagem";
import '../styles/imagem.css'

export function Cards() {
    return (
        <div className="cards-container">
            <div className="card">
                <Subtitulo texto="HTML"/>
                <Texto conteudo="HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo."/>
                <Imagem estilo="imagem" link ="https://gifimage.net/wp-content/uploads/2017/10/html-gif-9.gif" alt=""/>
            </div>

            <div className="card">
                <Subtitulo texto="CSS"/>
                <Texto conteudo="Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos."/>
                <Imagem estilo="imagem" link ="https://lenadesign.org/wp-content/uploads/2019/12/untitled7-1.gif?w=580" alt=""/>
                {/* <Imagem link ="https://i.pinimg.com/originals/e2/80/37/e28037a05dcc62ea9a0d6375f9cea155.gif"/> */}
            </div>

            <div className="card">
                <Subtitulo texto="Javascript"/>
                <Texto conteudo="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."/>
                <Imagem estilo="imagem" link ="https://www.heartinternet.uk/blog/wp-content/uploads/cssjavascriptanimations-pinkbutton.gif"/>
            </div>

            <div className="card">
                <Subtitulo texto="React"/>
                <Texto conteudo="O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."/>
                <Imagem estilo="imagem" link ="https://campuscode-site.s3.sa-east-1.amazonaws.com/newsletter/169_benefits-of-react.gif"/>
            </div>

            <div className="card">
                <Subtitulo texto="Git"/>
                <Texto conteudo="Git ₍ₒᵤ em inglês britânico₎ é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."/>
                <Imagem estilo="imagem" link ="https://raw.githubusercontent.com/gist/giorgiobraz/d49ea5384d4df8269ec4e23eded8010a/raw/79b11bc64c9a184ccbeb94490864b3c2d7ee14f9/cat.gif"/>
            </div>
        </div>
    )
}