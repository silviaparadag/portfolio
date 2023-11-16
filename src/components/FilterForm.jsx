import '../styles/layout/MainProjects.scss';
import PropTypes from 'prop-types';

const FilterForm = (props) => {
  const handleSearchText = (ev) => {
    props.handleFilters('name', ev.target.value);
    console.log(ev.target.value);
  };
  const handleSearchTech = (ev) => {
    props.handleFilters('tech', ev.target.value);
    console.log(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const renderTechStack = props.allTechStack.map((eachTech, ind) => {
    return (
      <option key={ind} value={eachTech}>
        {eachTech}
      </option>
    );
  });

  return (
    <form className="filters" onSubmit={handleSubmit}>
      <fieldset className="filters__fieldset">
        <label className="filters__label" htmlFor="search_name">
          Project name
        </label>
        <input
          className="filters__field"
          type="text"
          name="search_name"
          placeholder="Project name"
          id="search_name"
          value={props.searchByText}
          onChange={handleSearchText}
        />
      </fieldset>
      <fieldset className="filters__fieldset">
        <label className="filters__label" htmlFor="search_technology">
          Tech stack
        </label>
        <select
          className="filters__select"
          name="search_technology"
          id="search_technology"
          value={props.searchByTech}
          onChange={handleSearchTech}
        >
          <option value="All">Todas</option>
          {renderTechStack}
        </select>
      </fieldset>
    </form>
  );
};

export default FilterForm;

FilterForm.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  searchByText: PropTypes.string.isRequired,
  searchByTech: PropTypes.string.isRequired,
  allTechStack: PropTypes.array.isRequired,
};
