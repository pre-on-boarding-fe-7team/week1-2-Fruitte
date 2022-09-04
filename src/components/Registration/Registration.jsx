import RegistForm from './RegistForm';
import { Container } from './Registration.styl';

const Registration = ({ userId }) => {
  return (
    <Container>
      <RegistForm userId={userId} />
    </Container>
  );
};

export default Registration;
