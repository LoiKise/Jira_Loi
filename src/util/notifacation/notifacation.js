import { Button, notification } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';


export const notifacation = (type, message, description = '') => {

    notification[type]({
        message: message,
        description: description,
        icon: <HeartTwoTone twoToneColor="#eb2f96" />
    });
}

