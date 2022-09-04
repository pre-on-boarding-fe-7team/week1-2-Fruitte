import RegistrationLnb from './Lnb/RegistrationLnb';
import RegistForm from './RegistForm';
import { Container } from './Registration.styl';

const Registration = ({ userId }) => {
  return (
    <Container>
      <RegistrationLnb />
      <RegistForm userId={userId} />
    </Container>
  );
};

export default Registration;
