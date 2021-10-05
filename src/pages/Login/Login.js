import React from 'react';
import '../Login/Login.scss';
import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { SinginJiraBugAction } from '../../redux/actions/JiraBugAction';
import { connect } from 'react-redux';


function Login(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (

        <form className="container" onSubmit={handleSubmit}>
            <div style={{ height: window.innerHeight }} >
                <h3>LOGIN</h3>
                <div className="mt-3">
                    <Input onChange={handleChange} name="email" size="large" placeholder="Email" prefix={<UserOutlined />} />
                </div>
                <div className="validation">{errors.email}</div>
                <div className='mt-3'>
                    <Input onChange={handleChange} name="password" type="password" size="large" placeholder="password" prefix={<LockOutlined />} />
                </div >
                <div className="validation">{errors.password}</div>
                <Button htmlType="submit" size="large" className="mt-3">
                    LOGIN
                </Button>
                <div className="social mt-3">
                    <Button className="mr-3" type="primary" shape="circle" icon={<i class="fab fa-facebook-f"></i>} size={'large'} />
                    <Button shape="circle" icon={<i class="fab fa-twitter"></i>} size={'large'} />
                </div>
            </div>
        </form>
    )
}
const LoginWithFormik = withFormik({

    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is invalid'),
        password: Yup.string().min(6, 'Password must have min 6 characters').max(32, 'Password must have max 32 characters')
    }),

    handleSubmit: ({ email, password }, { props, setSubmitting }) => {
        // sau khi nhấn nút đăng nhập sẽ nhảy xuống xử lý hàm này 

        props.dispatch(SinginJiraBugAction(email, password))

        console.log(props)
    },

    displayName: 'BasicForm',
})(Login);

export default connect()(LoginWithFormik)
