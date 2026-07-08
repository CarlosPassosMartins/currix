import { Link } from 'react-router-dom';
import './templateCard.css';

function TemplateCard({id, nome, imagem, tags}){
    const rota = `/editor/${id}`

        return(
        <Link className='not-link' to={rota}>
            <div className="templateCard">
                <div className='templateCard-image'>
                    <img src={imagem} alt={nome} />
                </div>

                <h2 className='templateCard-title'>{nome}</h2>

                <div className="templateCard-tags">
                    {tags.map((tag) => (
                        <span className='templateCard-tag' key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>

            </div>
        </Link>
        );
}

export default TemplateCard;