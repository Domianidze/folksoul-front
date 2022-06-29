const PaginationButton: React.FC<{
  to: number;
  curPage: number;
  onSetCurPage: (page: number) => void;
}> = (props) => {
  const active = props.to === props.curPage;

  const setCurPageHandler = () => {
    props.onSetCurPage(props.to);
  };

  return (
    <button
      type='button'
      className={`mx-2 w-5 h-5 bg-dark-gray rounded-full ${
        active ? '' : 'opacity-50'
      }`}
      onClick={setCurPageHandler}
    />
  );
};

export default PaginationButton;
