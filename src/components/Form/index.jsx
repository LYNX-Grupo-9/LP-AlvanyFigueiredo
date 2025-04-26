import { FormInput } from "../FormInput";
import { FormTextArea } from "../FormTextarea";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export function Form() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.sendForm(
                'service_6knuzn9', // Substitua pelo seu Service ID
                'template_b5uzoeq', // Substitua pelo seu Template ID
                formRef.current,
                'utjNP4FwYfSEdvHyE' // Substitua pela sua Public Key
            );
            console.log('Mensagem enviada com sucesso:', result.text);
            toast.success('Mensagem enviada com sucesso!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            // Limpar os campos do formulário
            setNome("");
            setTelefone("");
            setEmail("");
            setAssunto("");
            setMensagem("");
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            toast.error('Erro ao enviar mensagem. Tente novamente.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        }
    };

    return (
        <div>
            <form ref={formRef} onSubmit={handleSubmit} className="border-2 border-white rounded-lg p-5 flex flex-col gap-4 w-full">
                <FormInput 
                    label="Nome" 
                    placeholder="Digite seu nome..." 
                    name="nome"
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                />
                <FormInput 
                    label="Telefone" 
                    placeholder="Ex: +55 (11) 97885-2543" 
                    name="telefone"
                    value={telefone} 
                    onChange={(e) => setTelefone(e.target.value)} 
                />
                <FormInput 
                    label="Email" 
                    placeholder="Ex: email@example.com" 
                    name="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <FormInput 
                    label="Assunto" 
                    placeholder="Ex: Aposentadoria" 
                    name="assunto"
                    value={assunto} 
                    onChange={(e) => setAssunto(e.target.value)} 
                />
                <FormTextArea 
                    label="Mensagem" 
                    placeholder="Explique o motivo do contato..." 
                    rows="6" 
                    name="mensagem"
                    value={mensagem} 
                    onChange={(e) => setMensagem(e.target.value)} 
                />

                <button 
                    type="submit" 
                    onClick={handleSubmit}
                    className="bg-[color:var(--golden-yellow)] text-white font-bold py-2 px-4 rounded shadow-md hover:bg-[color:var(--accent-yellow)] transition duration-300"
                >
                    Enviar Mensagem
                </button>
            </form>
        </div>
    );
}