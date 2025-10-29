import axios from 'axios';
import { apiUrl } from './config';

const apiClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

const solicitarAgendamento = async (agendamentoData) => 
    apiClient.post('/solicitacao-agendamento/solicitar', agendamentoData);

export { apiClient, solicitarAgendamento };
