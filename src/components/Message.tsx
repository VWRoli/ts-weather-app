type Props = {
  message: string;
  isError?: boolean;
};

const Message: React.FC<Props> = ({ message, isError }): JSX.Element => {
  return (
    <div
      className={
        isError ? 'message box-container error' : 'message box-container'
      }>
      <p>{message}</p>
    </div>
  );
};

export default Message;
