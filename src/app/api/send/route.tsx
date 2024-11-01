/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import ResponseModel from '@model/responseModel'
import { SendEmail } from '@helper/nodemail';

export async function POST(request: Request) {
  try{
    const res = await request.json()

    const send = await SendEmail({
      name: `${res.nome} ${res.sobrenome}`,
      email: res.email,
      to: 'nilton667@controljp.com',
      subject: res.servico,
      text: res.message,
    });

    if(send == true){
      const response: ResponseModel = {
        result:{
          success: true,
          data: 'Email enviado com sucesso!'
        }
      }
      return NextResponse.json(response);
    }else{
      const response: ResponseModel = {
        result:{
          success: true,
          data: 'Email enviado com sucesso!'
        }
      }
      return NextResponse.json(response);
    }
  }catch(error: any){
    const response: ResponseModel = {
      result:{
        success: false,
        error: error.message
      }
    }
    return NextResponse.json(response);
  }
}