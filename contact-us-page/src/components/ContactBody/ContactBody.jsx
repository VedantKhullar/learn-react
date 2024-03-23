import styles from './ContactBody.module.css'
import { IoMdCall, IoIosMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import Button from '../Button/Button';


function ContactBody() {
    return (
        <div className={styles.contact_body_container}>
            <div className={styles.call_to_action_container}>
                <div className={styles.call_chat_button_container}>
                    <Button btnText={'VIA SUPPORT CHAT'} icon={<MdMessage fontSize="24px" />} />
                    <Button btnText={'VIA CALL'} icon={<IoMdCall fontSize="24px" />} />
                </div>
                <div>
                    <Button btnText={'VIA EMAIL FORM'} icon={<IoIosMail fontSize="24px" />} isOutline={true} />
                </div>
                <form className={styles.form_container}>
                    <div className={styles.form_field}>
                        <label htmlFor="name">Name</label>
                        <input type='text' name='name'/>
                    </div>
                    <div className={styles.form_field}>
                        <label htmlFor="email">E-Mail</label>
                        <input type='email'name='email'/>
                    </div>
                    <div className={styles.form_field}>
                        <label htmlFor="text">Text</label>
                        <textarea type='text' name='text' rows={8}/>
                    </div>
                </form>
                <div>
                    <Button btnText={'SUBMIT DETAILS'}/>
                </div>
            </div>
            
            <div>
                <img src="./images/customercare.png" alt="customercare" />
            </div>

        </div>
    )
}

export default ContactBody