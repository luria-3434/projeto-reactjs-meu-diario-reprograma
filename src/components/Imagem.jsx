import '../styles/imagem.css'

export function Imagem(props) {
    return(
        <div>
        <img className={props.estilo} src={props.link}/>
        </div>
        )
}