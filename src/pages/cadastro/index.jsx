import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm } from "react-hook-form";
import { Container, Title, Column, Row, CriarText, EsqueciText, SubtitleLogin, TitleLogin, Wrapper, FazerLogin, LoginText } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  name: yup.string().required(),
}).required();

const Cadastro = () => {

  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onchange',

  });
  const handleClickSignUp = () => {
    navigate('/feed')

  }
  const handleClickLogin = () => {
    navigate('/login')
  }




  return (<>
    <Header />
    <Container>
      <Column>
        <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Comece agora grátis</TitleLogin>
          <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
          <form onSubmit={handleSubmit} >
            <Input name="nome" control={control} placeholder="Nome Completo" type="text" leftIcon={<MdPerson />} />
            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" type="email" leftIcon={<MdEmail />} />
            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title='Criar minha conta' variant="secondary" type="submit" onClick={handleClickSignUp} />
          </form>
          <Row>
            <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
          </Row>
          <Row>
            <LoginText>Já tenho conta.
              <FazerLogin onClick={handleClickLogin}>Fazer login</FazerLogin>
            </LoginText>
          </Row>
        </Wrapper>
      </Column>

    </Container>

  </>

  )

}










export { Cadastro };