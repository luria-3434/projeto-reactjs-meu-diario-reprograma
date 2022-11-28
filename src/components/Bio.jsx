import { Subtitulo } from "./Subtitulo"
import { Texto } from "./Texto"
import { Imagem } from "./Imagem"

export function Bio (){
    return(
        <div className="bio">
            <Imagem className="foto-git" link="https://mir-s3-cdn-cf.behance.net/user/276/6e643f380790403.5fadeae4174c1.jpg"/>

        <div>
            <Subtitulo texto="Luria"/>
            <Texto conteudo="Eu sou aluna Reprograma, estou em 
            transição de carreira, venho 
            do design de moda. Hoje me considero uma desenvolvedora Front-end e sei que ainda tenho muito que aprender."/>
        </div>
    </div>
    )
}