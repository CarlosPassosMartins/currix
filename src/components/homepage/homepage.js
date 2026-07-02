import './homepage.css';
import curriculo from'../../imgs/curiculo-amostra.png'

function Homepage(){
        return(
            <main className='homepage'>
                <div className='homepage-left'>

                    <div>
                        <h1 className='homepage-title'>Crie um currículos <br/> proficional <span className='no-mobile'>em minutos</span></h1>
                        <p className='homepage-paragraph'>Destaquese no mercado de trabalho, com nossa ferramenta simplificamos o processo, permitindo que você foque no que mais importa: sua carreira.</p>
                    </div>

                    <div className='homepage-button_container'>
                        <button className='btn btn-primary homepage-btn'>COMEÇAR</button>
                        <span className='homepage-text_btn'> <i className='check-circle'></i> Não requer cartão de credito</span>
                    </div>
                </div>

                <div className='homepage-right'>
                    <div className='homepage-image_container'>
                        <img src={curriculo} alt="" />
                    </div>
                </div>
            </main>
        );
}

export default Homepage;