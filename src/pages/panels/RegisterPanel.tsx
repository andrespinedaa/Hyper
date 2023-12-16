import Field from "../../components/form/Field";
import "./css/registerpanel.css";

function RegisterPanel() {
  return (
    <form className="registerPanel">
       <Field type="color"/>
       <Field type="width"/>
       <Field type="height"/>
       <Field type="blade"/>
       <button type="button">register</button>
    </form>
  );
}

export default RegisterPanel;
