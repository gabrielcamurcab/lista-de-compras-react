import React from "react";

class Fundo extends React.Component {
    render() {
        let data_atual = new Date();
        return (
            <footer className="bg-secondary p-2">
                <div className="container">
                    <p className="text text-light text-center small">
                        Copyright: { data_atual.getFullYear() }.
                        Criado por Gabriel Camurça.
                    </p>
                </div>
            </footer>
        )
    }
};

export default Fundo;