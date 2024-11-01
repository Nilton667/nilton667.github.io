"use client"
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Swal from 'sweetalert2'

const info = [
  {
    icon: <FaPhone/>,
    tittle: 'Telefone',
    description: '(+244) 935 074 974',
  },
  {
    icon: <FaEnvelope/>,
    tittle: 'Email',
    description: 'nilton667@controljp.com',
  },
  {
    icon: <FaMapMarkedAlt/>,
    tittle: 'Endereço',
    description: 'Luanda, Angola',
  }
]

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Http } from "@helper/Http";
import './contacto.css';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [servico, setServico] = useState<string>('Desenvolvimento Móvel');
  const [message, setMessage] = useState<string>('');

  function sendMessage(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    Swal.fire({
      text: "Pretende mesmo enviar o email?",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        setLoading(true)
        try {
          const send = await new Http().post('api/send', {
            body:{
              nome: nome.trim(),
              sobrenome: sobrenome.trim(),
              email: email.trim(),
              telefone: telefone.trim(),
              servico: servico.trim(),
              message: message.trim(),
            }
          });
          setLoading(false);
          return send;
        } catch (error) {
          setLoading(false)
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        if(result.value.result?.success == true){
          setNome('');
          setSobrenome('');
          setEmail('');
          setTelefone('');
          setMessage('');
          Swal.fire({
            text: `O seu email foi enviado com sucesso`,
            icon: 'success',
          });
        }else{
          Swal.fire({
            text: `Não foi possível enviar o seu email`,
            icon: 'error',
          });
        }
      }
    });
  }

  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
    }}
    className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={sendMessage} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl]">
              <h3 className="text-4xl text-accent">Entra em contacto</h3>
              <p className="text-white/6">
                
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                value={nome}
                onChange={(e)=>{setNome(e.target.value)}} 
                disabled={loading} 
                autoComplete="on"  
                required 
                type="text" 
                placeholder="Nome"/>
                
                <Input
                value={sobrenome}
                onChange={(e)=>{setSobrenome(e.target.value)}} 
                disabled={loading} 
                autoComplete="on"  
                required 
                type="text" 
                placeholder="Sobrenome"/>
                
                <Input
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}} 
                disabled={loading} 
                autoComplete="on"  
                required type="email" 
                placeholder="Email"/>
                
                <Input
                value={telefone}
                onChange={(e)=>{setTelefone(e.target.value)}} 
                disabled={loading} 
                autoComplete="on"  
                required 
                type="phone" 
                placeholder="Telefone"/>
              </div>
              {/* Select */}
              <Select
              required 
              defaultValue={servico}
              onValueChange={(value)=>setServico(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um serviço"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione um serviço</SelectLabel>
                    <SelectItem value="Desenvolvimento Móvel">Desenvolvimento Móvel</SelectItem>
                    <SelectItem value="Desenvolvimento web">Desenvolvimento web</SelectItem>
                    <SelectItem value="IA">IA</SelectItem>
                    <SelectItem value="Segurança Digital">Segurança Digital</SelectItem>
                    <SelectItem value="Software personalizado">Software personalizado</SelectItem>
                    <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* TextArea */}
              <Textarea
              value={message}
              onChange={(e)=>{setMessage(e.target.value)}} 
              disabled={loading}
              autoComplete="on" 
              required 
              className="h-[200px]"
              placeholder="Insira a sua mensagem"/>
              {/* Btn */}
              <Button
              type="submit" 
              size={'md'} 
              className={`${loading ? 'disabled' : ''} max-w-40`}
              >Enviar Mensagem</Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((items, i)=>{
                return (
                  <li key={i} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">
                        {items.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="tex-white/60">
                        {items.tittle}
                      </p>
                      <h3 className="text-xl">{items.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
