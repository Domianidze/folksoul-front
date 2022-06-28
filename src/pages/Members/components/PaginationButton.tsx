const PaginationButton: React.FC<{
  active: boolean;
}> = (props) => {
  return (
    <button
      type='button'
      className={`mx-2 w-5 h-5 bg-dark-gray rounded-full ${
        props.active ? '' : 'opacity-50'
      }`}
    />
  );
};

export default PaginationButton;
