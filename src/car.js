
function Car(props){
     const {val} = props;
     const {brand,color} =val;

  return(
    <h2> hello car {brand} color is {color}</h2>
  )
}
export default Car;