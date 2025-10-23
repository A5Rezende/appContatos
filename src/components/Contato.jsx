import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            api.get(`/contatos/${id}`).then((resposta) => {
                setNome(resposta.data.nome)
                setNumero(resposta.data.numero)
                setEmail(resposta.data.email)
            })
        }
    }, [id])

    const salvar = async (event) => {
        event.preventDefault()
        const dados = { nome, numero, email}
        
        if (id) {
            await api.put(`/contatos/${id}`, dados)
        } else {
            await api.post("/contatos", dados)
        }
        navigate("/")
    }

    return (
        <div className="container card p-0 mt-5" style={{ maxWidth: "500px" }}>
            <div className="card-header">
                <h5>{id ? "Editar Contato" : "Novo Contato"}</h5>
            </div>
            <div className="card-body">

                <form>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Numero</label>
                            <input
                                type="number"
                                className="form-control"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success" onClick={salvar}>Salvar</button>
                    <Link className="btn btn-warning ms-2" to={`/`}>
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    );
}
