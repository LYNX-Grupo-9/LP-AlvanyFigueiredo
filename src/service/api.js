import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const solicitarAgendamento = async (agendamentoData) => 
    apiClient.post('/solicitacao-agendamento/solicitar', agendamentoData);

export { apiClient, solicitarAgendamento };
