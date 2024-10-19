function Resume(){
    const name = {
        display:"inline",
    }
    const mainDiv ={
        textAlign:"center",
        margin:"0% 20% ",
    }
    const table = {
        border:" 2px solid",
        borderCollapse:"collapse",
        margin:"0px auto"
    }
    const tr = {
        border:"2px solid",

    }
    const th = {
        border:"2px solid",
        padding:" 10px 20px"
    }
    return(
        
        <div style={mainDiv}>
            
          <h2 style={name}>Pragna Murkiker</h2><br />
        <b>Email: </b><span>pragnagirish11@gmail.com</span><br />
        <b>phone: </b><span>+91 8639256609</span><br />
        <b>address: </b><span>kphb colony,hyderabad</span><br />
          
            <hr />
            <h2>Profile summary</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique nesciunt repellendus dolores molestias suscipit est ratione molestiae velit consectetur iure, corporis at nostrum magnam dignissimos, quam minima magni distinctio?</p>
       <hr />
       <h2>Education</h2>
       <table style={table}>
        <tr style={tr}>
            <th style={th}>qualification</th>
            <th style={th}>institution</th>
            <th style={th}>year of passing</th>
           <th style={th}> percentage</th>
            </tr>
            <tr style={tr}>
                <td style={th}><b>MSC(mathematics)</b></td>
                <td style={th}>Girraj govt. college</td>
                <td style={th}>2022</td>
                <td style={th}>90%</td>
            </tr>
            <tr style={tr}>
            <td style={th}><b>Bsc(computer science)</b></td>
                <td style={th}>Nishitha degree college</td>
                <td style={th}>2020</td>
                <td style={th}>94%</td>
            </tr>
         
       </table>
       <hr />
       <h2>Technical skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVA SCRIPT</li>
        <li>SQL</li>
      </ul>
      <hr />
       <h2>
        hobbies
       </h2>
       <ul>
        <li>Watching TV</li>
        <li>Listening to music</li>
        <li>Playing with kitty</li>
       </ul>
     <hr />
     <h2>Declaration</h2>
     
     
        </div>
      
    )
}

export default Resume;