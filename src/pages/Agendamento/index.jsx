import LogoAF from '../../assets/logo-af-branco.png'
import DateInput from '../../components/DateInput'
import { SchedulingInput } from '../../components/SchedulingInput'
import SideImg from '../../assets/agendamento-img.png'
import { useState } from 'react';

export default function Agendamento() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [dataSelecionada, setDataSelecionada] = useState(null);


    return (
        <>
            <div className="bg-[image:var(--agendamento-background)] min-h-screen h-fit w-screen bg-cover bg-no-repeat">

                <img src={LogoAF} alt="" className='w-20 ml-5' />

                <div className='bg-white/10 border border-white/50 backdrop-blur-md max-h-fit rounded-[30px] p-8 m-5 md:m-25 lg:mx-40 lg:my-10 2xl:mx-60'>
                    <div className='lg:flex lg:gap-10'>
                        <div className='flex flex-col gap-4 lg:flex-1 h-fit'>
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
                                placeholder="Ex: +55 (11) 91234-5678"
                                label="Telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                            <SchedulingInput
                                placeholder="Ex: Divórcio..."
                                label="Assunto"
                                value={assunto}
                                onChange={(e) => setAssunto(e.target.value)}
                            />
                            <div className='flex flex-col gap-4 lg:flex-row'>
                                <DateInput
                                    selectedDate={dataSelecionada}
                                    onDateChange={(date) => setDataSelecionada(date)}
                                />
                                <button className='block px-4 py-2 mt-6 rounded-full bg-[color:var(--accent-yellow)] text-base text-white hover:bg-[color:#e49124] w-full' >
                                    Agendar consulta
                                </button>
                            </div>
                        </div>
                        <div className='hidden lg:flex lg:w-2/6 ' >
                            <img src={SideImg} alt="" className='hidden lg:block ' />;
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}