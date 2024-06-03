import Car from './car';

function App() {
const name = {brand:'ambaster',color:'yellow'};
const arr =[
  {brand:'alto',color:'black'},
  {brand:'alto',color:'red'},
  {brand:'jeep',color:'blue'}
];
  return (
    <>
    <h2>Learn React how da</h2>

    { name.brand ==='' ? <Car val={name}/>:null }
    <ol type='I'>
         {arr.map((n) => <li><Car val={n} /></li>)}
    </ol>
    </>
          
  );
}

export default App;

