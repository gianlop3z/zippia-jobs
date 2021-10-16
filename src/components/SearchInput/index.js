import './index.scss';

// This is the input to filter by company
// These props must be
// {
//    onChange: to catch the input changes,
//    ...rest: i won't rewrite prop by prop, so i used the ES6 destructuring
// }
//

export function SearchInput({ onChange, ...rest }) {

  return ( 
    <div className="search-input">
      <input type="text"
        onChange={e => onChange(e.target.value)}
        {...rest}
      />
      <i className="uil uil-search"/>
    </div>
  )

}