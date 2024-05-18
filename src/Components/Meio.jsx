import React, { useState } from "react";

const Meio = () => {
    const [produtos, setProdutos] = useState([
        // { id: 0, nome: "Nome do produto" }
    ]);

    const deletarProduto = (e) => {
        const id = parseInt(e.target.id, 10);
        const novosProdutos = produtos.filter(i => i.id !== id);
        setProdutos(novosProdutos);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            let produto = document.getElementById('produto');
            let produto_texto = produto.value;
            let autoIncremento = 0;
            try {
                autoIncremento = produtos[produtos.length-1].id + 1;
            } catch (err) {
                autoIncremento = 1;
            }

            const [nome, quantidadeStr] = produto_texto.split('X');
            const quantidade = parseInt(quantidadeStr, 10) || 1; // Valor padrão 1 caso a quantidade não seja válida

            const novoProduto = {
                id: autoIncremento,
                nome: nome,
                quantidade: quantidade
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
                    placeholder="Inserir produto na lista de compras (Ex: 'ArrozX10')"
                    onKeyDown={handleEnter}
                />

                <table className="table table-hover table-striped my-4">
                    <thead>
                        <tr>
                            <th className="w-50">Produto</th>
                            <th className="w-10">Quantidade</th>
                            <th className="text-end w-20">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        { produtos.length > 0
                            ?
                            produtos.map(
                                (i) =>
                                    <tr key={i.id}>
                                        <td>{i.nome}</td>
                                        <td>{i.quantidade}</td>
                                        <td className="text-end">
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