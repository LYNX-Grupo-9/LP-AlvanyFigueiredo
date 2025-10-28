import LogoAF from '../../assets/logo-af-branco.png'
import DateInput from '../../components/DateInput'
import { SchedulingInput } from '../../components/SchedulingInput'
import SideImg from '../../assets/agendamento-img.png'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {solicitarAgendamento} from '../../service/api'; 

export default function Agendamento() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [horario, setHorario] = useState('');
    const [dataSolicitacao, setDataSolicitacao] = useState(null);
    const idAdvogado = import.meta.env.VITE_ADV_ID;

    async function handleSubmit(event) {
        event.preventDefault();

        if (!nome || !email || !telefone || !assunto || !dataSolicitacao) {
            toast.error('Por favor, preencha todos os campos antes de agendar.');
            return;
        }

        try {
            const data = {
                nome,
                email,
                telefone,
                assunto,
                dataSolicitacao: dataSolicitacao.toISOString().split('T')[0],
                horaSolicitacao: `${horario}`,
                idAdvogado
            };

            const response = await solicitarAgendamento(data);

            if (response.status === 200) {
                toast.success('Consulta agendada com sucesso!');
                setNome('');
                setEmail('');
                setTelefone('');
                setAssunto('');
                setDataSolicitacao(null);
            } else {
                toast.error('Erro ao agendar consulta. Tente novamente.');
            }

        } catch (error) {
            console.error('Erro ao agendar consulta:', error);
            toast.error('Ocorreu um erro ao agendar a consulta. Tente novamente mais tarde.');
        }
    }

    const hoursOpitions = [
        { value: '09:00:00', label: '09:00' },
        { value: '10:00:00', label: '10:00' },
        { value: '11:00:00', label: '11:00' },
        { value: '12:00:00', label: '12:00' },
        { value: '13:00:00', label: '13:00' },
        { value: '14:00:00', label: '14:00' },
        { value: '15:00:00', label: '15:00' },
        { value: '16:00:00', label: '16:00' },
        { value: '17:00:00', label: '17:00' },
        { value: '18:00:00', label: '18:00' }
    ]

    return (
        <>
            <ToastContainer />
            <div className="bg-[image:var(--agendamento-background)] min-h-screen h-fit w-screen bg-cover bg-no-repeat">

                <img src={LogoAF} alt="" className='w-20 ml-5' />

                <div className='bg-white/10 border border-white/50 backdrop-blur-md max-h-fit rounded-[30px] p-8 m-5 md:m-25 lg:mx-40 lg:my-1 2xl:mx-60 3xl:mx-80'>
                    <div className='lg:flex lg:items-center lg:gap-10'>
                        <form className='flex flex-col gap-4 lg:flex-1 h-fit'>
                            <h1 className='text-white text-center mb-7 text-xl lg:text-3xl'>Agende uma consulta!</h1>
                            <SchedulingInput
                                placeholder="Ex: Maria do Carmo Santos"
                                label="Nome Completo"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            <SchedulingInput
                                placeholder="Ex: seuemail@example.com"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <SchedulingInput
                                isPhone={true}
                                placeholder="Ex: +55 (11) 91234-5678"
                                label="Telefone"
                                value={telefone}
                                onChange={setTelefone}
                            />
                            <SchedulingInput
                                placeholder="Ex: Divórcio..."
                                label="Assunto"
                                value={assunto}
                                onChange={(e) => setAssunto(e.target.value)}
                            />
                            <div className='flex flex-col gap-4 lg:flex-row'>
                                <DateInput
                                    selectedDate={dataSolicitacao}
                                    onDateChange={(date) => setDataSolicitacao(date)}
                                />
                                <SchedulingInput
                                    isSelect={true}
                                    label="Horário"
                                    value={horario}
                                    options={hoursOpitions}
                                    onChange={(e) => setHorario(e.target.value)}
                                />
                            </div>
                            <button type='submit' onClick={handleSubmit} className='block px-4 py-2 mt-6 rounded-full bg-[color:var(--accent-yellow)] text-base text-white hover:bg-[color:#e49124] w-full' >
                                Agendar consulta
                            </button>
                        </form>
                        <div className='hidden lg:flex lg:w-2/6 ' >
                            <img src={SideImg} alt="" className='hidden lg:block ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}