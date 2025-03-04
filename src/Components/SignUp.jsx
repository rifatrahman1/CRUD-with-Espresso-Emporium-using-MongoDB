import React, { useContext } from 'react';
import './signup.css'
import { Auth_Context } from '../Provider/Auth_Provider';
import Swal from 'sweetalert2';

const SignUp = () => {
      const { create_user } = useContext(Auth_Context);
      const handle_register = (event) => {

            event.preventDefault();
            const form = event.target;
            const name = form.username.value;
            const email = form.email.value;
            const password = form.password.value;
            const confirm = form.confirm_password.value;

            create_user(email, password)
                  .then(result => {
                        console.log(result.user);
                        const create_at = result?.user?.metadata?.creationTime;
                        const new_users = { name, email, create_at }
                        fetch('https://coffee-store-server-jade-nine.vercel.app/users', {
                              method: 'POST',
                              headers: {
                                    'content-type': 'application/json'
                              },
                              body: JSON.stringify(new_users)
                        })
                              .then(res => res.json())
                              .then((data) => {
                                    console.log(data);
                                    if (data.insertedId) {
                                          Swal.fire({
                                                title: "Good job!",
                                                text: "Your registration successfully!",
                                                icon: "success"
                                          });
                                          form.reset();
                                    }
                              })
                  })
                  .catch((error) => {
                        console.log('ERROR', error);
                  })
      }
      return (
            <div className='bg-[#e8e8e8] min-h-screen flex flex-col justify-center items-center'>
                  <div className="card">
                        <div className="card-header">
                              <div className="text-header">Register</div>
                        </div>
                        <div className="card-body">
                              <form onSubmit={handle_register}>
                                    <div className="form-group">
                                          <label >Username:</label>
                                          <input required="" className="form-control" name="username" id="username" type="text" />
                                    </div>
                                    <div className="form-group">
                                          <label >Email:</label>
                                          <input required="" className="form-control" name="email" id="email" type="email" />
                                    </div>
                                    <div className="form-group">
                                          <label>Password:</label>
                                          <input required="" className="form-control" name="password" id="password" type="password" />
                                    </div>
                                    <div className="form-group">
                                          <label >Confirm Password:</label>
                                          <input required="" className="form-control" name="confirm_password" id="confirm-password" type="password" />
                                    </div>
                                    <input type="submit" className="btn" value="submit" />
                              </form>
                        </div>
                  </div>

            </div>
      );
};

export default SignUp;