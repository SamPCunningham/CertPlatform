import React from 'react';

const MyInfoList = () => {
    return ( 
        <form>
            <div className="col-xs-12 col-sm-6">
                <p><span style={{ color: "red" }}>*</span> Indicates a required field</p>
            </div>
            <div class="form-group row">
	            <label class="col-sm-5 col-md-4 control-label">Social Security #:<span style={{ color: "red"}}>*</span></label>
			      <div class="col-sm-7 col-md-8">
			          <input type="text" size="3" value="XXX" disabled />-
			          <input type="text" size="2" value="XX" disabled />-
			          <input type="text" size="4" value="XXXX" disabled />
			      </div>
	         </div>
             <div class="form-group row">
	            <label class="col-sm-5 col-md-4 control-label">First Name:<span style={{ color: "red"}}>*</span></label>
	            <div class="col-sm-7 col-md-8">
	                <input type="text" name="fname" />
	            </div>
	         </div>
             <div class="form-group row">
	            <label class="col-sm-5 col-md-4 control-label">Middle Initial:</label>
	            <div class="col-sm-7 col-md-8">
	                <input type="text" name="mi" size="1" maxlength="1" />
	            </div>
	         </div>
             <div class="form-group row">
	             <label class="col-sm-5 col-md-4 control-label">Last Name:<span style={{ color: "red"}}>*</span></label>
	             <div class="col-sm-7 col-md-8">
	                 <input name="lname" type="text" />
	             </div>
	         </div>
             <div class="form-group row">
	             <label class="col-sm-5 col-md-4 control-label">Email Address:<span style={{ color: "red"}}>*</span></label>
	             <div class="col-sm-7 col-md-8">
	                 <input  name="email" type="email" id="email" />
	             </div>
	         </div>
             <div class="form-group row">
                <label class="col-sm-5 col-md-4 control-label">Date of Birth:<span style={{ color: "red"}}>*</span></label>
                <select>
                    <option value="January">Jan</option>
                    <option value="February">Feb</option>
                    <option value="March">Mar</option>
                    <option value="April">Apr</option>
                    <option value="May">May</option>
                    <option value="June">Jun</option>
                    <option value="July">Jul</option>
                    <option value="August">Aug</option>
                    <option value="September">Sep</option>
                    <option value="October">Oct</option>
                    <option value="November">Nov</option>
                    <option value="December">Dec</option>
                </select>
                <select>
                    
                </select>
             </div>



        </form>
     );
}
 
export default MyInfoList;