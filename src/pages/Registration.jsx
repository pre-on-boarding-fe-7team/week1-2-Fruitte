import RegistForm from '../components/Registration/RegistForm';

const Registration = ({ userId }) => {
  return (
    <>
      <h1>관리자 등록 페이지</h1>
      <RegistForm userId={userId} />
    </>
  );
};

export default Registration;
