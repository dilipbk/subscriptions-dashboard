const Error = ({ message }: { message: string }) => {
  return (
    <div className="error-container">
      <p>{message}</p>
    </div>
  );
};

export default Error;
