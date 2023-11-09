const ShowAll = ({ handleShowAllButton }) => {
  return (
    <div>
      <button
        onClick={handleShowAllButton}
        className="bg-primary px-10 py-1 text-white rounded-xl"
      >
        Show All
      </button>
    </div>
  );
};

export default ShowAll;
