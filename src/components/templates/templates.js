import './templates.css';
import TemplateCard from'../templateCard/templateCard.js'
import img from '../../imgs/curriculos/imagem_curriculo.png';

function Templates(){
        return(
            <main className='templates'>
                <div className='templates-sidebar'>

                    <p className='templates-categories_title'>CATEGORIAS</p>
                    <div className='templates-categories'>
                        <label><input type="radio" name='categories' value='all' defaultChecked/> Todos</label>
                        <label><input type="radio" name='categories' value='moderno'/> Moderno</label>
                        <label><input type="radio" name='categories' value='classico'/> Classico</label>
                        <label><input type="radio" name='categories' value='minimalista'/> Minimalista</label>
                    </div>

                </div>

                <div className='templates-content'>
                    <h1 className='templates-content_title'>TEMPLATES</h1>
                    <p className='templates-content_description'>Escolha seu template para a customização</p>

                    <div className='templates-cards'>
                        <TemplateCard id={1} nome={'Simplificado'} imagem={img} tags={['Minimalista']} />
                    </div>
                </div>
            </main>
        );
}

export default Templates;