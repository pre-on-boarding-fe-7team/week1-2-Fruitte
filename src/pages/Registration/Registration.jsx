import RegistrationLnb from '../../components/Registration/Lnb/RegistrationLnb';
import RegistForm from '../../components/Registration/RegistForm';
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
