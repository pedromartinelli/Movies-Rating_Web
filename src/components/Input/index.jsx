import { Container } from "./styles";

export function Input({ icon: Icon, registers: register, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...register}  {...rest}/>
    </Container>
  );
};