import satData from './satData.js'

const Buttons = (props) => {

  let { filterByType, sat, setSat, id} = props
  
  return (
    <div>

      <button onCLick={() => filterByType(sat)} key={id}>
        {props.sat} Orbit
      </button>

      <button onClick={(setSat(satData, setSat))}>
        All Orbits
      </button>
      </div>
  );
};

export default Buttons;