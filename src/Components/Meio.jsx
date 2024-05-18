import React, { useState } from "react";

const Meio = () => {
    const [produtos, setProdutos] = useState([
        { id: 0, nome: "Nome do produto" }
    ]);

    const deletarProduto = (e) => {
        const id = parseInt(e.target.id, 10);
        const novosProdutos = produtos.filter(i => i.id !== id);
        setProdutos(novosProdutos);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            let produto = document.getElementById('produto');
            let autoIncremento = 0;
            try {
                autoIncremento = produtos[produtos.length-1].id + 1;
            } catch (err) {
                autoIncremento = 1;
            }

            const novoProduto = {
                id: autoIncremento,
                nome: produto.value
            }

            const novosProdutos = [...produtos, novoProduto];

            setProdutos(novosProdutos);

            console.log(novosProdutos);

            produto.value = '';
        }
    }

    return (
        <main className="my-5">
            <div className="container">
                <input
                    id="produto"
                    type="text"
                    className="form-control"
                    placeholder="Inserir produto na lista de compras"
                    onKeyDown={handleEnter}
                />

                <table className="table table-hover table-striped my-4">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th className="text-end">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        { produtos.length > 0
                            ?
                            produtos.map(
                                (i) =>
                                    <tr key={i.id}>
                                        <td>{i.nome}</td>
                                        <td className="text-end pe-4">
                                            <i
                                                className="bi bi-x-circle-fill text-danger h4"
                                                id={i.id}
                                                onClick={deletarProduto}
                                            >
                                            </i>
                                        </td>
                                    </tr>
                            )
                            :
                                <tr>
                                    <td colSpan={2} className="text-muted small p-2">
                                        Nenhum produto encontrado na lista
                                    </td>
                                </tr>
                            
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Meio;