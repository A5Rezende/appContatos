import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../services/api"

export default function Lista() {
    const [contatos, setContatos] = useState([])
    
    useEffect(() => {
        carregarContatos()
    }, [])

    const carregarContatos = async() => {
        const resposta = await api.get("/contatos")
        const listaOrdenada = [...resposta.data].sort((a, b) => a.nome.localeCompare(b.nome))
        setContatos(listaOrdenada)
    }

    function ordenarLista(lista) {
        const listaOrdenada = [...lista].sort((a, b) => a.nome.localeCompare(b.nome))
        setContatos(listaOrdenada)
    }

    const deletar = async(id) => {
        if (window.confirm("Você tem certeza que deseja excluir?")) {
            await api.delete(`/contatos/${id}`)
        }
        carregarContatos()
    }

    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h4>Contatos no catálogo</h4>
            </div>
            <div className="card-body d-flex justify-content-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Número</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contatos.map((contato) => (
                            <tr key={contato.id}>
                                <td>{contato.id}</td>
                                <td>{contato.nome}</td>
                                <td>{contato.numero}</td>
                                <td>{contato.email}</td>
                                <td>
                                    <div className="btn-group">
                                        <Link className="btn btn-sm btn-primary m-1" to={`/editar/${contato.id}`}>Editar</Link>
                                        <button className="btn btn-sm btn-danger m-1" onClick={() => deletar(contato.id)}>Excluir</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
