interface FilterButtonsProps {
  currentFilter: string;
  setFilter: (filter: string) => void;
}

const FilterButtons = ({ currentFilter, setFilter }: FilterButtonsProps) => {
  const filters = ["all", "academic", "social", "career"];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${currentFilter === filter ? "active" : ""}`}
          onClick={() => setFilter(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
