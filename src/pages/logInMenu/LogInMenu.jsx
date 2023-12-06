import { Fragment, useState} from "react";
import './logInMenu.scss'
import Input from "../../components/input/Input";
import emailIcon from '../../assets/img/mail.png'
import padlock from '../../assets/img/padlock.png'
import closeEye from '../../assets/img/hide.png'


function LogInMenu () {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const emailChange = (value) => {
    setEmail(value);
  }

  const passwordChange = (value) => {
    setPassword(value);
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return(

    <Fragment>
    <div className="MainContainerLogIn">
      <div className="LogInContainer">
          <div className="LogInImgLogo">Welcome <br/>to our site</div>
          <div className="LogInInputMenu">
            <div className="LogInInputName">
          <Input 
          label="Your Email"
          logoIcon={emailIcon}
          type="text"
          value={email}
          onChange={emailChange}
          />
          </div>
            <div className="LogInInputPassword">
              <Input 
              label="Your password"
              logoIcon={padlock}
              type={showPassword ? "text" : "password"}
              eyeIcon={closeEye}
              value={password}
              onChange={passwordChange}
              onButtonClick={handleShowPassword}
              />
              </div>
          </div>
     </div>
     </div>
     
    </Fragment>

  )

}

export default LogInMenu;