import './index.scss';

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