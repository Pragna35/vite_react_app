
//here we are getting  props as a component 
const Child = (props) => {
   // console.log(props,"display component of children.prop.jsx")

 return (
   
    <>
 {/* <h2>i am receiving display component from children-prop.jsx </h2> */}

{props.children}

    </>
 )
 
 }
 export default Child;