import React from 'react'
import './Register.css'

export default function Register() {
    return (
        <div className="reg">  
            <h1>Registration Form</h1>

<form className='register' >
<ul>
<li><label for="username">Name:</label></li>
<input type="text" name="username" size="50"  placeholder="Enter Name" required />
<li><label for="passid">Password:</label></li>
<input type="password" name="passid" size="12" placeholder="Enter password" required />

<li><label for="address">Address:</label></li>
<input type="text" name="address" size="50" placeholder="Enter Address"   required/>
<li><label for="phno">PhNo:</label></li>
<input type="text" name="phno" size="50" placeholder="Enter Phone Number"required />

<li><label for="email">Email:</label></li>
<input type="text" name="email" size="50"  placeholder="Enter Email" required />
<li><label id="gender">Sex:</label></li>
<input type="radio" name="msex" value="Male" /><span>Male</span>
<input type="radio" name="fsex" value="Female" /><span>Female</span>
<li><select name="country">
<option selected="" value="Default"  required>(Favourite Places)</option>
<option value="AF">Kashmir</option>
<option value="AL">Manali</option>
<option value="DZ">Madkeri</option>
<option value="AS">Paris</option>

</select></li><br/>
<input type="submit" name="submit" value="Register" />
</ul>
</form>
        </div>
    )
}
