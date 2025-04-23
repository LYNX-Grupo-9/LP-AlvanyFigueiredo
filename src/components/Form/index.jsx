import { FormInput } from "../FormInput";
import { FormTextArea } from "../FormTextarea";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export function Form() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");


    
    return (
        <div className="p-7">
            <div className="border-2 border-white rounded-lg p-5 flex flex-col gap-4 w-full">
                <FormInput 
                    label="Nome" 
                    placeholder="Digite seu nome..." 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                />
                <FormInput 
                    label="Telefone" 
                    placeholder="Ex: +55 (11) 97885-2543" 
                    value={telefone} 
                    onChange={(e) => setTelefone(e.target.value)} 
                />
                <FormInput 
                    label="Email" 
                    placeholder="Ex: email@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <FormInput 
                    label="Assunto" 
                    placeholder="Ex: Aposentadoria" 
                    value={assunto} 
                    onChange={(e) => setAssunto(e.target.value)} 
                />
                <FormTextArea 
                    label="Assunto" 
                    placeholder="Ex: Aposentadoria" 
                    rows="6" 
                    value={mensagem} 
                    onChange={(e) => setMensagem(e.target.value)} 
                />

                <button className="bg-[color:var(--golden-yellow)] text-white font-bold py-2 px-4 rounded shadow-md hover:bg-[color:var(--accent-yellow)] transition duration-300">
                    Enviar Mensagem
                </button>
            </div>
        </div>
    );
}