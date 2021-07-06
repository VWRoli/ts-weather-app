type Props = {
  title: string;
  data?: string | number;
};

const DataGroup: React.FC<Props> = ({ title, data }): JSX.Element => {
  return (
    <div className="data-group">
      <h4>{title}</h4>
      <p>
        {data} {typeof data === 'number' && String.fromCharCode(0x2103)}
      </p>
    </div>
  );
};

export default DataGroup;
