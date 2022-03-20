
import "./Form.css"
function Form(){
    return(
        <>
            <div className="container">  
                <div className="row justify-content-center form my-md-4">
                    <div className="col-md-5 col-lg-4">
                        <div className="py-5 px-3">
                            <h1>
                                Personal data
                            </h1>
                        </div>
                        <form className="px-3">
                            <div class="mb-3 mt-3">
                              <label for="email" class="form-label">Email address</label>
                              <input type="email" class="form-control" id="email"/>
                            </div>
                            <div class="mb-3">
                              <label for="age" class="form-label">Age</label>
                              <input type="number" class="form-control" id="age"/>
                            </div>
                            <div class="mb-3">
                                <label for="sport" class="form-label">Sport</label>
                                <select class="form-select" aria-label="Default select example">
                                  <option selected>None</option>
                                  <option value="1">gym</option>
                                  <option value="2">swim</option>
                                  <option value="3">karate</option>
                                  <option value="4">soccer</option>
                                  <option value="5">tennis</option>
                                  <option value="6">bike</option>
                                  <option value="7">run</option>
                                  <option value="3">volleyball</option>


                                </select>
                            </div>
                            <div class="mb-3">
                              <label for="work" class="form-label">Work</label>
                              <input type="text" class="form-control" id="work"/>
                            </div>
                            <div class="mb-3">
                              <label for="sport" class="form-label">Sex</label>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="sex" id="sex-male"value="male"/>
                                  <label class="form-check-label" for="sex-male">
                                    Male
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="sex" id="sex-female" value="female"     />
                                  <label class="form-check-label" for="sex-female">
                                    Female
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="sex" id="sex-other" value="other"/>
                                  <label class="form-check-label" for="sex-other">
                                    Other
                                  </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export { Form }