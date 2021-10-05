import React, { useState } from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';


export default function DrawerJiraBug(props) {

    const { visible, ComponentContentDrawer, callBackSubmit } = useSelector(state => state.drawerReducer)
    const dispatch = useDispatch();


    const showDrawer = () => {
        dispatch({ type: 'OPEN_MODAL' })
    };

    const onClose = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    };


    return (
        <>
            <Drawer
                title="Create a new account"
                width={720}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={callBackSubmit} type="primary">
                            Submit
                        </Button>
                    </div>
                }
            >

                {/* //chèn nội dung */}
                {ComponentContentDrawer}
            </Drawer>
        </>
    )
}
