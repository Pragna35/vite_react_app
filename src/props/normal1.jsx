// const Childprop = (props) => {
//     //destructuring the prop (object)
//    console.log(props)
//     var {a} = props
//    //  console.log(a)


//     return (
//       <>
  
//       <h1>i'm  child component.my parent is {a}</h1>
//       </>
//     )
//   }
  
//   export default Childprop;


//fakestore task --- 17-10-24 --------------------------

const ChildComponent = ({info}) => {
   console.log(info)

   const table = {
    border:"2px solid",
    borderCollapse:"collapse",
   }
   const tr = {
    border:"2px solid",
    padding:"12px"
   }

    const products = info.map((item,ind) => {
        return (
      
            <tr key={ind}>
                <td style={tr}>{item.title}</td>
                <td style={tr}>{item.category}</td>
                <td style={tr}>{item.price}</td>
                <td style={tr}><img src={item.image} alt={item.title} width="100px"/></td>
                <td style={tr}>{item.description}</td>
                <td style={tr}>{item.rating.rate}</td>
                <td style={tr}>{item.rating.count}</td>
            </tr>
          
         
        )
    })


    return (
        <>
        <h2>iam a child component of fake store api</h2>
        <table style={table}>
        <thead>
            <tr >
                <th style={tr} rowSpan={2}>Title</th>
                <th style={tr} rowSpan={2}>category</th>
                <th style={tr} rowSpan={2}>Price</th>
                <th style={tr} rowSpan={2}>image</th>
                <th style={tr} rowSpan={2}>Description</th>
                <th style={tr} colSpan={2}>Rating  </th>
            </tr>
            <tr >
           
            <th style={tr} >rate</th>
            <th style={tr} >count</th>
            </tr>
       
            </thead>
            <tbody>
        {/* injecting product component */}
            {products}
          
           </tbody>

        </table>
     
        </>
    )
}
export default ChildComponent;