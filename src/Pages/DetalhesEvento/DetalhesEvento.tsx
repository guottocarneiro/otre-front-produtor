import './DetalhesEvento.css';

const DetalhesEvento = () => {

    return (
        <div className="detalhes-evento">
            <div>
                <h1 className="display-3">Nome do evento</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis laoreet, euismod velit at, maximus odio.</p>
            </div>

            <div className="detalhes-evento-informacoes">
                <p><i className="bi bi-geo-alt"></i> Mineirão - Avenida Teste</p>
                <p><i className="bi bi-calendar"></i> 22/09/2022</p>
            </div>

            <div className="detalhes-evento-artistas detalhes-evento-container">
                <h5>Artistas</h5>

                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Duda Beat</li>
                            <li className="list-group-item">BaianaSystem</li>
                            <li className="list-group-item">Silva</li>
                            <li className="list-group-item">Iza</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="detalhes-evento-ingressos detalhes-evento-container">
                <h5>Ingressos</h5>

                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">A list item</li>
                            <li className="list-group-item">A list item</li>
                            <li className="list-group-item">A list item</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetalhesEvento;
